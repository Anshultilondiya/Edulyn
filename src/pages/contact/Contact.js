import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import GoogleMap from './GoogleMap';
import Footer from '../../components/Footer';
import { StyleFun } from './styles/contact.js';
import { useClientStore } from '../../contextProviders/clientContext';
import { fetchInstituteDetails, fetchStatus, sendContactData } from "./../../apis/api"
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { updateColorObj } from "./../../utility"

function Contact() {




    const [formData, updateFormData] = useState({
        first_name: "",
        email: "",
        contact_no: "",
        your_query: ""
    });
    const [buttonState, setButtonState] = useState("Submit Now");
    const [queryType, setQueryType] = useState("")

    const handleChange = (e) => {
        updateFormData({
            ...formData,

            // Trimming any whitespace
            [e.target.name]: e.target.value.trim()
        });
        console.log(formData);
    };
    function isValidform() {
        var flag = 1;
        for (var key in formData) {
            if (formData[key] === "") {
                flag = 0;
            }
        }
        if (queryType === "") {
            flag = 0;
        }
        return flag;
    }

    const handleSubmit = (e) => {
        setButtonState("Submitting...")
        e.preventDefault();
        const data = new FormData();
        for (var key in formData) {
            data.append(key, formData[key]);
        }
        data.append('query_type', queryType);
        console.log(formData);
        if (isValidform()) {
            sendContactData(clientStore.webHash, formData)
                .then((data) => {
                    if (data.flag === 1) {
                        toast.success("Your Form Submitted Successfully", {
                            position: "bottom-right"
                        });
                        setButtonState("Submit Now");
                    } else {
                        console.log(data);
                        toast.error("Form Submission Failed", {
                            position: "bottom-right"
                        });
                        setButtonState("Submit Now")
                    }
                })
                .catch((err) => {
                    toast.error("Form Submission Failed", {
                        position: "bottom-right",
                    });
                    console.log(err);
                    setButtonState("Submit Now")
                });
        } else {
            toast.error("Fill all the Required Fields", {
                position: "bottom-right"
            });
            setButtonState("Submit Now")
        }

    };












    useEffect(() => {
        const form = document.getElementById("form_contact");
        const name = document.getElementById("contact_name");
        const email = document.getElementById("contact_email");
        const subject = document.getElementById("contact_subject");
        const message = document.getElementById("contact_message");

        form.addEventListener("submit", formSubmit);

        function formSubmit(e) {
            e.preventDefault();

            const nameValue = name.value.trim();
            const emailValue = email.value.trim();
            const subjectValue = subject.value.trim();
            const messageValue = message.value.trim();


            if (nameValue === "") {
                setError(name, "Name can't be blank");
            } else {
                setSuccess(name);
            }

            if (emailValue === "") {
                setError(email, "Email can't be blank");
            } else if (!isEmail(emailValue)) {
                setError(email, "Not a valid email");
            } else {
                setSuccess(email);
            }

            if (subjectValue === "") {
                setError(subject, "Subject can't be blank");
            } else {
                setSuccess(subject);
            }

            if (messageValue === "") {
                setError(message, "Message can't be blank");
            } else {
                setSuccess(message);
            }
        }

        function setError(input, message) {
            const formControl = input.parentElement;
            const errorMsg = formControl.querySelector(".contact_input-msg");
            formControl.className = "form-control text-left error";
            errorMsg.innerText = message;
        }

        function setSuccess(input) {
            const formControl = input.parentElement;
            formControl.className = "form-control success";
        }

        function isEmail(email) {
            return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
        }
    });

    const clientStore = useClientStore();
    const [instDetail, setInstDetail] = useState({});

    const [config, setConfig] = useState({});
    const [configStatus, setConfigStatus] = useState(false);
    const [status, setStatus] = useState(false);
    const [defImages, setDefImages] = useState({});
    const [queryArr, setQueryArr] = useState([])
    useEffect(() => {
        fetchInstituteDetails(clientStore.webHash)
            .then((data) => {
                if (data.status === "Success") {
                    setInstDetail(data.response);
                    setStatus(true);
                    setDefImages(data.default_img);
                }
            })
            .catch((err) => {
                console.log(err);
            });
        fetchStatus(clientStore.webHash)
            .then((data) => {
                if (data) {
                    setConfig(data.config);
                    setConfigStatus(true);
                }
            }).catch((err) => {
                console.log(err);
            });
        let arr = ["Complaint", "Suggestion", "Feedback"]
        setQueryArr(arr)

    }, []);
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const [colors, setColors] = useState({ ...clientStore.colors });
    const [dataStatus, setDataStatus] = useState(false);
    const [toggle, setToggle] = useState(0);
    const [Styles, setStyles] = useState(StyleFun(colors));

    useEffect(() => {
        updateColors();
    }, [colors, toggle, dataStatus]);

    const updateColors = () => {
        if (clientStore.webLayout["primary"] !== undefined && !dataStatus) {
            let obj = { ...colors }
            setColors({ ...updateColorObj(obj, clientStore.webLayout) })
            setStyles(StyleFun({ ...updateColorObj(obj, clientStore.webLayout) }))
            setDataStatus(true);
        }
        if (!dataStatus) setToggle(toggle + 1);
    };



    return (
        <Styles>
            {/* Main Wrapper */}
            <div className="main-wrapper contact-page">

                {/* Header 2 */}
                <HeaderTwo />

                {/* Breadcroumb */}
                <BreadcrumbBox title="Contact Us" />

                {/* Contact Area */}
                <section className="contact-area">
                    <Container>
                        <Row>
                            <Col md="4">
                                <div className="contact-box-title">
                                    <h4>Contact Info</h4>
                                </div>
                                <div className="contact-icon-box d-flex">
                                    <div className="icon">
                                        <i className="las la-map-marker"></i>
                                    </div>
                                    <div className="box-content">
                                        <h5>Our Location</h5>
                                        <p>{instDetail.Address1} <br />{instDetail.Address2} </p>
                                        {/* <p>{instDetail.Address2}</p> */}
                                    </div>
                                </div>
                                <div className="contact-icon-box d-flex">
                                    <div className="icon">
                                        <i className="las la-envelope-open"></i>
                                    </div>
                                    <div className="box-content">
                                        <h5>Email Address</h5>
                                        <p>{instDetail.Email1}<br />{instDetail.Email2}</p>
                                    </div>
                                </div>
                                <div className="contact-icon-box d-flex">
                                    <div className="icon">
                                        <i className="las la-phone"></i>
                                    </div>
                                    <div className="box-content">
                                        <h5>Phone Number</h5>
                                        <p>{instDetail.Contact1}<br />{instDetail.Contact2}</p>
                                    </div>
                                </div>
                                <div className="contact-social">
                                    <ul className="social list-unstyled list-inline">
                                        <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-facebook-f"></i></a></li>
                                        <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-twitter"></i></a></li>
                                        <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-linkedin-in"></i></a></li>
                                        <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-youtube"></i></a></li>
                                        <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-dribbble"></i></a></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md="8">
                                <div className="contact-form">
                                    <div className="form-title">
                                        <h4>Get In Touch</h4>
                                    </div>
                                    <div className="form-box">
                                        <form id="form_contact" className="form">
                                            <Row>
                                                <Col md="6">
                                                    <p className="form-control">
                                                        <input type="text" placeholder="Full Name" id="contact_name" name="first_name" onChange={handleChange} value={formData.first_name} />
                                                        <span className="contact_input-msg"></span>
                                                    </p>
                                                </Col>
                                                <Col md="6">
                                                    <p className="form-control">
                                                        <input type="email" placeholder="Email Address" id="contact_email" name="email" onChange={handleChange} value={formData.email} />
                                                        <span className="contact_input-msg"></span>
                                                    </p>
                                                </Col>
                                                <Col md="8">
                                                    <p className="form-control">
                                                        <input type="text" placeholder="Mobile No." id="contact_subject" name="contact_no" onChange={handleChange} value={formData.contact_no} />
                                                        <span className="contact_input-msg"></span>
                                                    </p>
                                                </Col>
                                                <Col md="4">
                                                    <p className="form-control" id="contact_query">
                                                        <DropdownButton id="dropdown-basic-button" title="Query Type">
                                                            {queryArr.map((el, index) => (
                                                                <Dropdown.Item key={index} onClick={() => {
                                                                    setQueryType(el)
                                                                    console.log(el)
                                                                }}>{el}</Dropdown.Item>
                                                            ))}
                                                        </DropdownButton>
                                                    </p>
                                                </Col>
                                                <Col md="12">
                                                    <p className="form-control">
                                                        <textarea name="message" id="contact_message" placeholder="Enter Message" name="your_query" onChange={handleChange} value={formData.your_query}></textarea>
                                                        <span className="contact_input-msg"></span>
                                                    </p>
                                                </Col>
                                                <Col md="12">
                                                    <button onClick={handleSubmit} >{buttonState}</button>
                                                </Col>
                                            </Row>
                                        </form>
                                        <ToastContainer />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                    {/* Google Map */}
                    <GoogleMap id={clientStore.webHash} />
                </section>

                {/* Footer 2 */}
                <Footer />

            </div>
        </Styles>
    )
}

export default Contact











// import React, { useEffect, useState } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import HeaderTwo from '../../components/HeaderTwo';
// import { BreadcrumbBox } from '../../components/common/Breadcrumb';
// import GoogleMap from './GoogleMap';
// import Footer from '../../components/Footer';
// import { Styles } from './styles/contact.js';
// import { useClientStore } from '../../contextProviders/clientContext';
// import { fetchInstituteDetails, fetchStatus } from "./../../apis/api"
// import { DropdownButton, Dropdown } from 'react-bootstrap'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function Contact() {
//     const [queryType, setQueryType] = useState("")
//     useEffect(() => {
//         const form = document.getElementById("form_contact");
//         const name = document.getElementById("contact_name");
//         const email = document.getElementById("contact_email");
//         const subject = document.getElementById("contact_subject");
//         const message = document.getElementById("contact_message");

//         form.addEventListener("submit", formSubmit);

//         function formSubmit(e) {
//             e.preventDefault();

//             const nameValue = name.value.trim();
//             const emailValue = email.value.trim();
//             const subjectValue = subject.value.trim();
//             const messageValue = message.value.trim();


//             if (nameValue === "") {
//                 setError(name, "Name can't be blank");
//             } else {
//                 setSuccess(name);
//             }

//             if (emailValue === "") {
//                 setError(email, "Email can't be blank");
//             } else if (!isEmail(emailValue)) {
//                 setError(email, "Not a valid email");
//             } else {
//                 setSuccess(email);
//             }

//             if (subjectValue === "") {
//                 setError(subject, "Subject can't be blank");
//             } else {
//                 setSuccess(subject);
//             }

//             if (messageValue === "") {
//                 setError(message, "Message can't be blank");
//             } else {
//                 setSuccess(message);
//             }
//         }

//         function setError(input, message) {
//             const formControl = input.parentElement;
//             const errorMsg = formControl.querySelector(".contact_input-msg");
//             formControl.className = "form-control text-left error";
//             errorMsg.innerText = message;
//         }

//         function setSuccess(input) {
//             const formControl = input.parentElement;
//             formControl.className = "form-control success";
//         }

//         function isEmail(email) {
//             return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
//         }
//     });

//     const clientStore = useClientStore();
//     const [instDetail, setInstDetail] = useState({});
//     const [buttonState, setButtonState] = useState("Submit Now");
//     const [config, setConfig] = useState({});
//     const [configStatus, setConfigStatus] = useState(false);
//     const [status, setStatus] = useState(false);
//     const [defImages, setDefImages] = useState({});
//     const [queryArr, setQueryArr] = useState([])
//     useEffect(() => {
//         fetchInstituteDetails(clientStore.webHash)
//             .then((data) => {
//                 if (data.status === "Success") {
//                     setInstDetail(data.response);
//                     setStatus(true);
//                     setDefImages(data.default_img);
//                 }
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//         fetchStatus(clientStore.webHash)
//             .then((data) => {
//                 if (data) {
//                     setConfig(data.config);
//                     setConfigStatus(true);
//                 }
//             }).catch((err) => {
//                 console.log(err);
//             });
//         let arr = ["Complaint", "Suggestion", "Feedback"]
//         setQueryArr(arr)

//     }, []);
//     useEffect(() => {
//         window.scrollTo(0, 0)
//     }, [])




//     return (
//         <Styles>
//             {/* Main Wrapper */}
//             <div className="main-wrapper contact-page">

//                 {/* Header 2 */}
//                 <HeaderTwo />

//                 {/* Breadcroumb */}
//                 <BreadcrumbBox title="Contact Us" />

//                 {/* Contact Area */}
//                 <section className="contact-area">
//                     <Container>
//                         <Row>
//                             <Col md="4">
//                                 <div className="contact-box-title">
//                                     <h4>Contact Info</h4>
//                                 </div>
//                                 <div className="contact-icon-box d-flex">
//                                     <div className="icon">
//                                         <i className="las la-map-marker"></i>
//                                     </div>
//                                     <div className="box-content">
//                                         <h5>Our Location</h5>
//                                         <p>{instDetail.Address1} <br />{instDetail.Address2} </p>
//                                         {/* <p>{instDetail.Address2}</p> */}
//                                     </div>
//                                 </div>
//                                 <div className="contact-icon-box d-flex">
//                                     <div className="icon">
//                                         <i className="las la-envelope-open"></i>
//                                     </div>
//                                     <div className="box-content">
//                                         <h5>Email Address</h5>
//                                         <p>{instDetail.Email1}<br />{instDetail.Email2}</p>
//                                     </div>
//                                 </div>
//                                 <div className="contact-icon-box d-flex">
//                                     <div className="icon">
//                                         <i className="las la-phone"></i>
//                                     </div>
//                                     <div className="box-content">
//                                         <h5>Phone Number</h5>
//                                         <p>{instDetail.Contact1}<br />{instDetail.Contact2}</p>
//                                     </div>
//                                 </div>
//                                 <div className="contact-social">
//                                     <ul className="social list-unstyled list-inline">
//                                         <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-facebook-f"></i></a></li>
//                                         <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-twitter"></i></a></li>
//                                         <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-linkedin-in"></i></a></li>
//                                         <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-youtube"></i></a></li>
//                                         <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-dribbble"></i></a></li>
//                                     </ul>
//                                 </div>
//                             </Col>
//                             <Col md="8">
//                                 <div className="contact-form">
//                                     <div className="form-title">
//                                         <h4>Get In Touch</h4>
//                                     </div>
//                                     <div className="form-box">
//                                         <form id="form_contact" className="form">
//                                             <Row>
//                                                 <Col md="6">
//                                                     <p className="form-control">
//                                                         <input type="text" placeholder="Full Name" id="contact_name" />
//                                                         <span className="contact_input-msg"></span>
//                                                     </p>
//                                                 </Col>
//                                                 <Col md="6">
//                                                     <p className="form-control">
//                                                         <input type="email" placeholder="Email Address" id="contact_email" />
//                                                         <span className="contact_input-msg"></span>
//                                                     </p>
//                                                 </Col>
//                                                 <Col md="8">
//                                                     <p className="form-control">
//                                                         <input type="text" placeholder="Subject" id="contact_subject" />
//                                                         <span className="contact_input-msg"></span>
//                                                     </p>
//                                                 </Col>
//                                                 <Col md="4">
//                                                     <p className="form-control" id="contact_query">
//                                                         <DropdownButton id="dropdown-basic-button" title="Query Type">
//                                                             {queryArr.map((el, index) => (
//                                                                 <Dropdown.Item key={index} onClick={() => {
//                                                                     setQueryType(el)
//                                                                     console.log(el)
//                                                                 }}>{el}</Dropdown.Item>
//                                                             ))}
//                                                         </DropdownButton>
//                                                     </p>
//                                                 </Col>
//                                                 <Col md="12">
//                                                     <p className="form-control">
//                                                         <textarea name="message" id="contact_message" placeholder="Enter Message"></textarea>
//                                                         <span className="contact_input-msg"></span>
//                                                     </p>
//                                                 </Col>
//                                                 <Col md="12">
//                                                     <button>Send Message</button>
//                                                 </Col>
//                                             </Row>
//                                         </form>
//                                     </div>
//                                 </div>
//                             </Col>
//                         </Row>
//                     </Container>

//                     {/* Google Map */}
//                     <GoogleMap id={clientStore.webHash} />
//                 </section>

//                 {/* Footer 2 */}
//                 <Footer />

//             </div>
//         </Styles>
//     )
// }

// export default Contact