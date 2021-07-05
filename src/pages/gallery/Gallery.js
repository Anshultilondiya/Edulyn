import React, { useEffect, useState, useCallback } from 'react';
import Datas from '../../data/gallery/gallery-page.json';
import { Container, Row, Col } from 'react-bootstrap';
import ModalImage from "react-modal-image";
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import Pagination from './../../components/Pagination';
import Footer from '../../components/Footer';
import { StyleFun } from './styles/gallery.js';
import { fetchImages, fetchVideo } from '../../apis/api';
import { useClientStore } from '../../contextProviders/clientContext';
import { Observer } from 'mobx-react';
import ImageViewer from 'react-simple-image-viewer';
import { updateColorObj } from '../../utility';



const Gallery = () => {
    // const [imageUrlArr, setImageUrlArr] = useState([])
    const [images, setImages] = useState([]);
    const [status, setStatus] = useState(false);
    const [videos, setVideos] = useState([]);

    const clientStore = useClientStore();

    useEffect(() => {
        fetchImages(clientStore.webHash, 100)
            .then((data) => {
                if (data.status === "success") {
                    setImages(data.response);
                    // let arr = data.response.map(el => el.url)
                    // setImageUrlArr(arr);
                    setStatus(true);
                }
            })
            .catch((err) => {
                console.log(err);
            });


        fetchVideo(clientStore.webHash, 100)
            .then((data) => {
                if (data.status === "success") {
                    setVideos(data.response);
                }
            })
            .catch((err) => {
                console.log(err);
            });


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



    // console.log(images);
    // console.log(status);
    // const [imageLg, setImageLg] = useState(null)
    // const [currentImage, setCurrentImage] = useState(0);
    // const [isViewerOpen, setIsViewerOpen] = useState(false);

    // const openImageViewer = useCallback((index) => {
    //     setCurrentImage(index);
    //     setIsViewerOpen(true);
    //     document.getElementsByTagName("BODY")[0].style.overflow = "hidden"
    //     // $('body').css('overflow','hidden')
    // }, []);

    // const closeImageViewer = () => {
    //     setCurrentImage(0);
    //     setIsViewerOpen(false);
    //     document.getElementsByTagName("BODY")[0].style.overflow = "auto"

    // };

    return (
        <Observer>
            {() => {
                return (
                    <Styles>
                        {/* Main Wrapper */}
                        <div className="main-wrapper gallery-page">

                            {/* Header 2 */}
                            <HeaderTwo />

                            {/* Breadcroumb */}
                            <BreadcrumbBox title="Gallery" />

                            {/* Gallery Area */}
                            <section className="gallery-page-area">
                                <Container>
                                    <h3
                                        style={{
                                            marginBottom: "20px"
                                        }}
                                    >
                                        <span
                                            style={{
                                                borderBottom: "3px solid",
                                                padding: "5px"
                                            }}
                                        >

                                            Photos
                                        </span>
                                    </h3>
                                    <Row >
                                        {
                                            images.map((data, i) => (
                                                <Col lg="4" sm="6" key={i} >
                                                    <div className="gallery-box">
                                                        <ModalImage small={data.url} alt="" large={data.url} />
                                                        {/* <ModalImage small={process.env.PUBLIC_URL + `/assets/images/${data.galleryImage}`} large={process.env.PUBLIC_URL + `/assets/images/${data.galleryImage}`} alt="" /> */}
                                                    </div>
                                                </Col>
                                            ))
                                        }

                                        {/* <Col md="12" className="text-center">
                                            <Pagination />
                                        </Col> */}
                                    </Row>
                                </Container>
                                <div
                                    style={{
                                        marginTop: "20px",
                                        backgroundColor: "#eeeeee",
                                        padding: "50px"
                                    }}>

                                    <Container>
                                        <h3
                                            style={{
                                                marginBottom: "20px"
                                            }}
                                        >
                                            <span
                                                style={{
                                                    borderBottom: "3px solid",
                                                    padding: "5px"
                                                }}
                                            >

                                                Videos
                                            </span>
                                        </h3>
                                        <Row>

                                            {videos.map((video, index) => {
                                                return (
                                                    //  <Col sm={4}>
                                                    //     <div class=" text-center embed-responsive embed-responsive-16by9 videoDiv">
                                                    //         <div>
                                                    //             <iframe width="auto" height="auto" class="rounded embed-responsive-item" src={video.video_link.replace("watch?v=", "embed/")} allowfullscreen="allowfullscreen" ></iframe>
                                                    //             <h5 className="mb-0">{video.video_title}</h5>
                                                    //             <p>{video.desc}</p>
                                                    //         </div>
                                                    //     </div>
                                                    // </Col>
                                                    <Col lg="4" sm="6" key={index}>
                                                        <div className="gallery-box embed-responsive embed-responsive-16by9">
                                                            <iframe width="auto" height="auto" class="rounded embed-responsive-item" src={video.video_link.replace("watch?v=", "embed/")} allowfullscreen="allowfullscreen" ></iframe>
                                                            <h5 className="mb-0">{video.video_title}</h5>
                                                            <p>{video.desc}</p>
                                                        </div>
                                                    </Col>
                                                )
                                            })}


                                        </Row>
                                    </Container>
                                </div>
                            </section>

                            {/* Footer 2 */}
                            <Footer />

                        </div>
                    </Styles>
                )
            }}
        </Observer>
    )




}

export default Gallery