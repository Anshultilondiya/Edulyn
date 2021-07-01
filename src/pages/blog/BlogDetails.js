import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import BlogSidebar from './components/BlogSidebar';
import CommentForm from './components/CommentForm';
import Footer from '../../components/Footer';
import { Styles } from './styles/blogDetails.js';
import { useParams } from 'react-router-dom'
import { useClientStore } from '../../contextProviders/clientContext';
import { Observer } from 'mobx-react';
import { fetchBlogs } from '../../apis/api';

const BlogDetails = () => {
    const clientStore = useClientStore();
    const { blogID } = useParams();
    const [blog, setblog] = useState({});
    const [blogs, setblogs] = useState([]);
    const [status, setStatus] = useState(false);
    const [defImages, setDefImages] = useState({});
    useEffect(() => {
        getBlogData();
    }, []);
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const getBlogData = async () => {
        const res = await fetchBlogs(clientStore.webHash)
        console.log(res.response)
        console.log(blogID)
        for (let i = 0; i < res.response.length; i++) {
            // console.log(res.response[i].blog_id)
            if (res.response[i].blog_id == blogID) {
                setblog(res.response[i]);
                console.log(res.response[i])
                break;
            }
        }
    }



    return (
        <Observer>
            {() => {
                return (
                    <Styles>
                        {/* Main Wrapper */}
                        <div className="main-wrapper blog-details-page">

                            {/* Header 2 */}
                            <HeaderTwo />

                            {/* Breadcroumb */}
                            <BreadcrumbBox title="Blog Details" />

                            {/* Blog Details */}
                            <section className="blog-details-area">
                                <Container>
                                    <Row>
                                        <Col lg="11" md="11" sm="11" style={{ margin: "auto" }}>
                                            <div className="blog-details-box">
                                                <div className="blog-details-banner">
                                                    <img src="https://www.shortmanclothier.com/manage/wp-content/themes/shortman-clothier/timthumb.php?src=https://www.shortmanclothier.com/manage/wp-content/uploads/2018/08/blogging-1.jpg&h=450&w=650&zc=1q=100" alt="" className="img-fluid" />
                                                </div>
                                                <div className="heading">
                                                    <h4>{blog.post_title}</h4>
                                                </div>
                                                <div className="blog-auth_date d-flex">
                                                    <div className="author-img d-flex">
                                                        <Link to={process.env.PUBLIC_URL + "/"}><img src={process.env.PUBLIC_URL + `/assets/images/author.jpg`} alt="" /></Link>
                                                        <p><Link to={process.env.PUBLIC_URL + "/"}>{blog.user_first_name + " " + blog.user_last_name}</Link></p>
                                                    </div>

                                                    <div className="post-date">
                                                        <p><i className="las la-calendar"></i> April 23, 2020</p>
                                                    </div>
                                                    <div className="post-category">
                                                        <p><Link to={process.env.PUBLIC_URL + "/"}><i className="las la-bookmark"></i> Web Design</Link></p>
                                                    </div>
                                                    <div className="post-comment">
                                                        <p><Link to={process.env.PUBLIC_URL + "/"}><i className="las la-comment"></i> (23)</Link></p>
                                                    </div>
                                                </div>
                                                <div className="blog-details-desc">
                                                    <div dangerouslySetInnerHTML={{ __html: blog.post_description }} style={{
                                                        textAlign: "justify"
                                                    }}>

                                                    </div>
                                                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nesciunt harum facilis odit inventore molestias qui asperiores recusandae architecto mollitia provident ipsa unde, praesentium impedit enim voluptate ducimus, saepe autem. Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br /><br />Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda optio sequi suscipit et modi! Corporis obcaecati rerum et, explicabo inventore, aliquid, odit modi harum libero culpa distinctio. Nemo, aliquid dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio earum accusantium quam eius dignissimos quaerat voluptatem excepturi aliquid dolor ducimus. Illo porro maiores fuga dignissimos temporibus odio nulla nobis nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. <span><i className="las la-quote-right"></i>Nemo, aliquid dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio earum accusantium quam eius dignissimos quaerat voluptatem excepturi aliquid dolor ducimus. Optio earum accusantium quam eius dignissimos quaerat voluptatem excepturi aliquid dolor ducimus.</span>Assumenda optio sequi suscipit et modi! Corporis obcaecati rerum et, explicabo inventore, aliquid, odit modi harum libero culpa distinctio. Nemo, aliquid dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                                    <ul className="list-unstyled">
                                                        <li><i className="fa fa-check"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere Quae impedit eligendi perspiciatis animi maxime ab minus corporis omnis similique excepturi.</li>
                                                        <li><i className="fa fa-check"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere Quae impedit eligendi perspiciatis animi maxime ab minus corporis omnis similique excepturi.</li>
                                                        <li><i className="fa fa-check"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere Quae impedit eligendi perspiciatis animi maxime ab minus corporis omnis similique excepturi.</li>
                                                    </ul> */}
                                                </div>
                                                {/* <div className="blog-tag_share d-flex justify-content-between">
                                                    <div className="blog-tag">
                                                        <ul className="tags list-unstyled list-inline">
                                                            <li className="list-inline-item">Tags:</li>
                                                            <li className="list-inline-item"><Link to={process.env.PUBLIC_URL + "/"}>Html</Link>,</li>
                                                            <li className="list-inline-item"><Link to={process.env.PUBLIC_URL + "/"}>Design</Link>,</li>
                                                            <li className="list-inline-item"><Link to={process.env.PUBLIC_URL + "/"}>Develop</Link>,</li>
                                                            <li className="list-inline-item"><Link to={process.env.PUBLIC_URL + "/"}>React</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="blog-share">
                                                        <ul className="social list-unstyled list-inline">
                                                            <li className="list-inline-item">Share:</li>
                                                            <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-facebook-f"></i></a></li>
                                                            <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-twitter"></i></a></li>
                                                            <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-linkedin-in"></i></a></li>
                                                            <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-youtube"></i></a></li>
                                                            <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-dribbble"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div> */}
                                                {/* <div className="blog-comments">
                                                    <h5>Comments (03)</h5>
                                                    <div className="comment-box d-flex">
                                                        <div className="comment-image">
                                                            <img src={process.env.PUBLIC_URL + `/assets/images/testimonial-2.jpg`} alt="" />
                                                        </div>
                                                        <div className="comment-content">
                                                            <div className="content-title d-flex justify-content-between">
                                                                <div className="comment-writer">
                                                                    <h6>Mark Shadow</h6>
                                                                    <p>Mar 26, 2020 | 06:30pm</p>
                                                                </div>
                                                                <div className="reply-btn">
                                                                    <button type="button"><i className="las la-reply-all"></i> Reply</button>
                                                                </div>
                                                            </div>
                                                            <div className="comment-desc">
                                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laborum quas placeat perspiciatis est, nisi expedita consectetur sit minus illum laudantium nostrum dolore odit asperiores quisquam ad enim iusto laborum quas placeat perspiciatis saepe.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="comment-box d-flex">
                                                        <div className="comment-image">
                                                            <img src={process.env.PUBLIC_URL + `/assets/images/testimonial-1.jpg`} alt="" />
                                                        </div>
                                                        <div className="comment-content">
                                                            <div className="content-title d-flex justify-content-between">
                                                                <div className="comment-writer">
                                                                    <h6>Katrin Kay</h6>
                                                                    <p>Mar 26, 2020 | 06:30pm</p>
                                                                </div>
                                                                <div className="reply-btn">
                                                                    <button type="button"><i className="las la-reply-all"></i> Reply</button>
                                                                </div>
                                                            </div>
                                                            <div className="comment-desc">
                                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laborum quas placeat perspiciatis est, nisi expedita consectetur sit minus illum laudantium nostrum dolore odit asperiores quisquam ad enim iusto laborum quas placeat perspiciatis saepe.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="comment-box d-flex">
                                                        <div className="comment-image">
                                                            <img src={process.env.PUBLIC_URL + `/assets/images/testimonial-2.jpg`} alt="" />
                                                        </div>
                                                        <div className="comment-content">
                                                            <div className="content-title d-flex justify-content-between">
                                                                <div className="comment-writer">
                                                                    <h6>David Show</h6>
                                                                    <p>Mar 26, 2020 | 06:30pm</p>
                                                                </div>
                                                                <div className="reply-btn">
                                                                    <button type="button"><i className="las la-reply-all"></i> Reply</button>
                                                                </div>
                                                            </div>
                                                            <div className="comment-desc">
                                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laborum quas placeat perspiciatis est, nisi expedita consectetur sit minus illum laudantium nostrum dolore odit asperiores quisquam ad enim iusto laborum quas placeat perspiciatis saepe.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> */}

                                                <CommentForm />
                                            </div>
                                        </Col>

                                    </Row>
                                </Container>
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

export default BlogDetails