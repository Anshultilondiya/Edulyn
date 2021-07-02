import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import Footer from '../../components/Footer';
import { Styles } from './styles/forms.js';
import { Dropdown, Button, ButtonGroup, Form } from "react-bootstrap"
import { fetchCourseDetails } from "./../../apis/api";
import { useClientStore } from "./../../contextProviders/clientContext"


function Admission() {
    const clientStore = useClientStore();
    const [admission, setAdmission] = useState("Select");
    const [eduArr, setEduArr] = useState([])


    useEffect(() => {
        getCourses();
    }, []);

    const getCourses = async () => {
        const res = await fetchCourseDetails(clientStore.webHash, 3);
        // console.log("All Courses", res.response);
        setEduArr([...res.response, { course_name: "Others" }]);
    };





    useEffect(() => {
        const form = document.getElementById("form_registration");
        const fname = document.getElementById("registration_fname");
        const lname = document.getElementById("registration_lname");
        const email = document.getElementById("registration_email");
        const phone_1 = document.getElementById("registration_phone_1");
        const phone_2 = document.getElementById("registration_phone_2");
        const user = document.getElementById("registration_user");
        const password = document.getElementById("registration_password");
        const cpassword = document.getElementById("registration_cpassword");

        form.addEventListener("submit", formSubmit);

        function formSubmit(e) {
            e.preventDefault();

            const fnameValue = fname.value.trim();
            const lnameValue = lname.value.trim();
            const emailValue = email.value.trim();
            const userValue = user.value.trim();
            const passwordValue = password.value.trim();
            const cpasswordValue = cpassword.value.trim();

            if (fnameValue === "") {
                setError(fname, "First name can't be blank");
            } else {
                setSuccess(fname);
            }

            if (lnameValue === "") {
                setError(lname, "Last name can't be blank");
            } else {
                setSuccess(lname);
            }

            if (emailValue === "") {
                setError(email, "Email can't be blank");
            } else if (!isEmail(emailValue)) {
                setError(email, "Not a valid email");
            } else {
                setSuccess(email);
            }

            if (userValue === "") {
                setError(user, "User name can't be blank");
            } else {
                setSuccess(user);
            }

            if (passwordValue === "") {
                setError(password, "Password can't be blank");
            } else {
                setSuccess(password);
            }

            if (cpasswordValue === "" || passwordValue !== cpasswordValue) {
                setError(cpassword, "Password doesn't match");
            } else {
                setSuccess(cpassword);
            }
        }

        function setError(input, message) {
            const formControl = input.parentElement;
            const errorMsg = formControl.querySelector(".registration_input-msg");
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
    return (
        <Styles>
            {/* Main Wrapper */}
            <div className="main-wrapper registration-page">

                {/* Header 2 */}
                <HeaderTwo />

                {/* Breadcroumb */}
                {/* <BreadcrumbBox title="Admission" /> */}

                {/* Registration Area */}
                <section className="registration-area">
                    <Container>
                        <Row>
                            <Col md="12">
                                <div className="registration-box">
                                    <div className="registration-title text-center">
                                        <h3>Admission Form</h3>
                                    </div>
                                    <form id="form_registration" className="form">
                                        <Row>
                                            <Col lg="6">
                                                <p className="form-control">
                                                    <label htmlFor="registration_fname">Full Name</label>
                                                    <input type="text" placeholder="Full Name" id="registration_fname" />
                                                    <span className="registration_input-msg"></span>
                                                </p>
                                            </Col>
                                            <Col lg="6">
                                                <p className="form-control">
                                                    <label htmlFor="registration_user">Upload Photo</label>
                                                    <input type="file" name="file" className="resume-upload" />
                                                </p>
                                            </Col>
                                            <Col lg="6">
                                                <p className="form-control">
                                                    <label htmlFor="registration_lname">Father's Name</label>
                                                    <input type="text" placeholder="Father's Full Name" id="registration_lname" />
                                                    <span className="registration_input-msg"></span>
                                                </p>
                                            </Col>
                                            <Col lg="6">
                                                <p className="form-control">
                                                    <label htmlFor="registration_lname">Mother's Name</label>
                                                    <input type="text" placeholder="Mother's Full Name" id="registration_lname" />
                                                    <span className="registration_input-msg"></span>
                                                </p>
                                            </Col>
                                            <Col lg="6">
                                                <p className="form-control">
                                                    <label htmlFor="registration_email">Date of Birth</label>
                                                    <input type="date" />
                                                    <span className="registration_input-msg"></span>
                                                </p>
                                            </Col>
                                            <Col lg="6">
                                                <p className="form-control">
                                                    <label htmlFor="registration_email">Email Address</label>
                                                    <input type="email" placeholder="Email address" id="registration_email" />
                                                    <span className="registration_input-msg"></span>
                                                </p>
                                            </Col>
                                            <Col lg="6">
                                                <p className="form-control">
                                                    <label htmlFor="registration_user">Address</label>
                                                    <input type="text" placeholder="Address" id="registration_phone_1" />
                                                    <span className="registration_input-msg"></span>
                                                </p>
                                            </Col>
                                            <Col lg="6">
                                                <p className="form-control">
                                                    <label htmlFor="registration_user">City</label>
                                                    <input type="text" placeholder="City" id="registration_phone_2" />
                                                    <span className="registration_input-msg"></span>
                                                </p>
                                            </Col>
                                            <Col lg="6">
                                                <p className="form-control">
                                                    <label htmlFor="registration_user">District</label>
                                                    <input type="text" placeholder="District" id="registration_phone_2" />
                                                    <span className="registration_input-msg"></span>
                                                </p>
                                            </Col>
                                            <Col lg="6">
                                                <p className="form-control">
                                                    <label htmlFor="registration_user">State</label>
                                                    <input type="text" placeholder="State" id="registration_phone_2" />
                                                    <span className="registration_input-msg"></span>
                                                </p>
                                            </Col>
                                            <Col lg="6">
                                                <p className="form-control">
                                                    <label htmlFor="registration_user">Country</label>
                                                    <input type="text" placeholder="Country" id="registration_phone_2" />
                                                    <span className="registration_input-msg"></span>
                                                </p>
                                            </Col>
                                            <Col lg="6">
                                                <p className="form-control">
                                                    <label htmlFor="registration_user">Phone Number</label>
                                                    <input type="text" placeholder="Phone Number" id="registration_phone_2" />
                                                    <span className="registration_input-msg"></span>
                                                </p>
                                            </Col>
                                            <Col lg="6">
                                                <p className="form-control">
                                                    <label htmlFor="registration_user">Qualification</label>
                                                    <input type="text" placeholder="Qualification" id="registration_phone_2" />
                                                    <span className="registration_input-msg"></span>
                                                </p>
                                            </Col>
                                            <Col lg="6">
                                                <p className="form-control">
                                                    <label htmlFor="registration_user">Previous Year Precentage</label>
                                                    <input type="text" placeholder="Previous Year Precentage" id="registration_phone_2" />
                                                    <span className="registration_input-msg"></span>
                                                </p>
                                            </Col>

                                            <Col lg="6">
                                                <p className="form-control option-menu">
                                                    <Col lg="12">

                                                        <label htmlFor="registration_user">Admission For</label>
                                                    </Col>
                                                    <Col lg="12">
                                                        <Dropdown as={ButtonGroup}>
                                                            <Button variant="success">{admission}</Button>
                                                            <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
                                                            <Dropdown.Menu>
                                                                {eduArr.map((el, index) => (
                                                                    <Dropdown.Item key={index} onClick={() => {
                                                                        setAdmission(el.course_name)
                                                                        console.log(el.course_name)
                                                                    }}>{el.course_name}</Dropdown.Item>
                                                                ))}
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </Col>
                                                    {
                                                        admission === "Others" ? (
                                                            <div className="others-text">
                                                                <input type="email" placeholder="Please Enter " id="registration_email" />
                                                                <span className="registration_input-msg"></span>
                                                            </div>) : null
                                                    }

                                                    {/* <p>{education}</p> */}
                                                </p>
                                            </Col>
                                            <Col lg="6">
                                                <p className="form-control">
                                                    <label htmlFor="registration_user">Upload Documents</label>
                                                    <input type="file" name="file" className="resume-upload" />
                                                    <input type="file" name="file" className="resume-upload" />
                                                </p>
                                            </Col>

                                            {/* <Col lg="6">
                                                <Row>
                                                    <Col lg="6">
                                                        <p className="form-control">
                                                            <label htmlFor="registration_user">Phone 1</label>
                                                            <input type="text" placeholder="Phone 1" id="registration_phone_1" />
                                                            <span className="registration_input-msg"></span>
                                                        </p>
                                                    </Col>
                                                    <Col lg="6">
                                                        <p className="form-control">
                                                            <label htmlFor="registration_user">Phone 2</label>
                                                            <input type="text" placeholder="Phone 2" id="registration_phone_2" />
                                                            <span className="registration_input-msg"></span>
                                                        </p>
                                                    </Col>
                                                </Row>
                                            </Col> */}
                                            {/* <Col lg="6">
                                                <p className="form-control option-menu">
                                                    <Col lg="12">

                                                        <label htmlFor="registration_email">Educational Qualification</label>
                                                    </Col>
                                                    <Col lg="12">
                                                        <Dropdown as={ButtonGroup}>
                                                            <Button variant="success">{education}</Button>
                                                            <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
                                                            <Dropdown.Menu>
                                                                {eduArr.map((el, index) => (
                                                                    <Dropdown.Item key={index} onClick={() => {
                                                                        setEducation(el)
                                                                        console.log(el)
                                                                    }}>{el}</Dropdown.Item>
                                                                ))}
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </Col>
                                                    {
                                                        education === "Others" ? (
                                                            <div className="others-text">
                                                                <input type="email" placeholder="Please Enter Your Qualification" id="registration_email" />
                                                                <span className="registration_input-msg"></span>
                                                            </div>) : null
                                                    }

                                                    
                                                </p>
                                            </Col> */}
                                            {/* <Col lg="6">
                                                <p className="form-control option-menu">
                                                    <Col lg="12">

                                                        <label htmlFor="registration_email">Current Status</label>
                                                    </Col>
                                                    <Col lg="12">
                                                        <Dropdown as={ButtonGroup}>
                                                            <Button variant="success">{current}</Button>
                                                            <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
                                                            <Dropdown.Menu>
                                                                <Dropdown.Item onClick={() => { setCurrent("Working") }}>Working</Dropdown.Item>
                                                                <Dropdown.Item onClick={() => { setCurrent("Self-Employed") }}>Self-Employed</Dropdown.Item>
                                                                <Dropdown.Item onClick={() => { setCurrent("Un-Employed") }}>Un-Employed</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </Col>
                                                    {
                                                        education === "Others" ? (
                                                            <div className="others-text">
                                                                <input type="email" placeholder="Please Enter Your Qualification" id="registration_email" />
                                                                <span className="registration_input-msg"></span>
                                                            </div>) : null
                                                    }


                                                </p>
                                            </Col> */}
                                            {/* <Col lg="6">
                                                <p className="form-control">
                                                    <label htmlFor="registration_user">Location</label>
                                                    <input type="text" placeholder="Location" id="registration_phone_2" />
                                                    <span className="registration_input-msg"></span>
                                                </p>
                                            </Col>

                                            <Col lg="6">
                                                <p className="form-control">
                                                    <label htmlFor="registration_user">Investment Capacity</label>
                                                    <input type="text" placeholder="Investment Capacity" id="registration_phone_2" />
                                                    <span className="registration_input-msg"></span>
                                                </p>

                                            </Col> */}
                                        </Row>
                                        {/* <p className="form-control">
                                            <label htmlFor="registration_user">Upload</label>
                                            <input type="file" name="file" className="resume-upload" />
                                        </p> */}
                                        {/* <p className="form-control">
                                            <label htmlFor="registration_password">Password</label>
                                            <input type="password" placeholder="*******" id="registration_password" />
                                            <span className="registration_input-msg"></span>
                                        </p>
                                        <p className="form-control">
                                            <label htmlFor="registration_cpassword">Confirm Password</label>
                                            <input type="password" placeholder="Confirm password" id="registration_cpassword" />
                                            <span className="registration_input-msg"></span>
                                        </p> */}
                                        <button className="submit">Submit</button>
                                    </form>
                                    {/* <div className="have_account-btn text-center">
                                        <p>Already have an account? <Link to="/login">Login Here</Link></p>
                                    </div> */}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* Footer 2 */}
                <Footer />

            </div>
        </Styles >
    )
}

export default Admission