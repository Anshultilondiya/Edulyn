import { nanoid } from "nanoid";
import moment from "moment";

export const buildSliderObject = (obj) => {
  let object = {
    id: nanoid(),
    backgroundImage: obj.img_url,
    uniqClass: "slider-box slider-box2 text-right",
    title: obj.slider_text,
    desc: "Best University In This Region Join With Us Today",
    btnOneLink: "course-grid",
    btnTwoLink: "contact",
  };
  return object;
};

export const coreFeatureDataFormat = (obj) => {
  let arr = [];
  // console.log(obj);
  let maxlen = 0;
  for (let i = 1; i <= 4; i++) {
    let elobj = {
      id: nanoid(),
      uniqClass: "box-icon box1",
      boxIcon: obj[`feature${i}_icon`],
      title: obj[`feature${i}_title`],
      subTitle: obj[`feature${i}_detail`],
      length: obj[`feature${i}_detail`],
    };
    maxlen = maxlen < elobj.subTitle.length ? elobj.subTitle.length : maxlen;
    // console.log(elobj);
    arr.push(elobj);
    // console.log(elobj.subTitle.length, maxlen);
  }
  // arr = arr.map((el) => {
  //   let diff = maxlen - el.subTitle.length;
  //   if (diff > 0) {
  //     for (let i = 0; i < diff; i++) {
  //       el.extraWhiteSpace = el.extraWhiteSpace + "&nbsp;";
  //     }
  //   }
  //   return el;
  //   console.log(el.subTitle.length);
  // });

  return { arr, maxlen };
};

export const buildCourse = (res) => {
  let arr = [];

  for (let i = 0; i < res.length; i++) {
    let obj = {
      id: nanoid(),
      targetId: "desi",
      // imgUrl:
      //   res[i]["course_image"] !== ""
      //     ? res[i]["course_image"]
      //     : "https://i.ibb.co/PQbvZM3/course1.jpg",
      imgUrl: "https://i.ibb.co/PQbvZM3/course1.jpg",
      authorImg: "author.jpg",
      authorName: "John Doe",
      authorCourses: "13 Courses",
      price: "$20",
      courseSlug: res[i]["course_slug"],
      courseTitle: res[i]["course_name"],
      courseDesc: res[i]["course_detail"],
      courseLink: `/course-details/${res[i]["course_slug"]}`,
    };
    arr.push(obj);
  }
  return arr;
};


// course_duration: "3 Months"
// course_name: "SSC CHSL (10+2)"
// course_price: "6000"
// course_slug: "SSC_CHSL_(10+2)"
// course_start_date: "2021-06-14T00:00:00.000Z"


export const buildTestimonials = (res) => {
  let arr = [];
  for (let i = 0; i < res.length; i++) {
    let obj = {
      id: nanoid(),
      testimonialTitle: res[i].title,
      testimonialDesc: res[i].desc,
      authorImg: res[i].img_url,
      // authorImg: "testimonial-1.jpg",
      authorName: `${res[i].fname} ${res[i].lname}`,
      authorTitle: "Developer",
    };
    arr.push(obj);
  }
  return arr;
};

export const buildNotification = (res) => {
  let arr = [];
  for (let i = 0; i < res.length; i++) {
    let obj = {
      id: res[i].notify_id,
      eventDate: moment.utc(res[i].date).format("DD MMM"),
      eventFullDate: moment.utc(res[i].date).format("DD MMMM YYYY"),
      eventTitle: res[i].notify_title,
      eventTime: "5:30pm - 7.00pm",
      eventLocation: "Newyork,NY.",
      eventdesc: res[i].notify_description,
      eventLink: "/event-details",
      eventImg: "event-02.jpg",
    };
    // console.log(obj);
    arr.push(obj);
  }
  // console.log("Arr", arr);
  return arr;
};

export const buildPackage = (res) => {
  let arr = [];
  for (let i = 0; i < res.length; i++) {
    let obj = {
      "id": nanoid(),
      "productImg": "https://www.marketplace.org/wp-content/uploads/2021/01/Books_New-e1611252343470.jpg?fit=2879%2C1619",
      "productTitle": res[i].course_name,
      "productUrl": `/course-details/${res[i].course_slug}`,
      "courseSlug": res[i].course_slug,
      "price": res[i].course_price,
      "discount": "-30%",
      "courseStartDate": moment.utc(res[i].course_start_date).format("DD MMMM YYYY"),
      "courseDuration": res[i].course_duration
    }
    // console.log(obj);
    arr.push(obj);
  }

  // console.log(el.course_start_date)
  return arr
}




export const buildFaq = (res) => {
  let arr = [];
  for (let i = 0; i < res.length; i++) {
    let obj = {
      id: nanoid(),
      faqTitle: res[i].Question,
      faqDesc: res[i].Answer,
    };
    arr.push(obj);
  }
  return arr;
};

export const buildFaculty = (res) => {
  let arr = [];
  for (let i = 0; i < res.length; i++) {
    let obj = {
      id: nanoid(),
      personImage: res[i].url,
      personName: res[i].faculty_name,
      personTitle: "Teacher",
      personDetails: res[i].faculty_detail,
      socialLinks: {
        facebook: "//www.facebook.com",
        twitter: "//www.twitter.com",
        linkedin: "//www.linkedin.com",
        youtube: "//www.youtube.com",
      },
    };
    arr.push(obj);
  }
  return arr;
};

export const buildBlog = (res) => {
  let arr = [];
  for (let i = 0; i < res.length; i++) {
    let shortDes = res[i].post_description.slice(0, 100) + " ....";
    let obj = {
      id: res[i].blog_id,
      authorImg: "author.jpg",
      postImg: res[i].post_image,
      postLink: "/blog-details/" + res[i].blog_id,
      postDate: "25 Mar",
      postTitle: res[i].post_title,
      postExcerpt: res[i].post_description,
      shortDes: shortDes,
      authorLink: "/",
      commentLink: "/",
      likeLink: "/",
      authorFName: res[i].user_first_name,
      authorLName: res[i].user_last_name,
    };
    arr.push(obj);
  }
  return arr;
};

// blog_id: 1593
// post_description: "<p>The board exams are an extremely crucial part of any student&rsquo;s academic life. The board exam&rsquo;s percentage or grades decide your future career path. Getting good scores in board exams is important to get admission in top college or university for an undergraduate degree or other diploma programmes. They will also decide your eligibility for various competitive exams.</p>\r\n\r\n<p>Therefore, it is very important for students to give their 100% and prepare properly for board exams.</p>\r\n\r\n<p>Here are some tips on how commerce students can prepare for important subjects:</p>\r\n\r\n<p><strong>Accountancy &ndash;</strong><br />\r\nIt is the key and scoring subject in the commerce syllabus. It is very important how you answer the accountancy questions in the final exams. Students should write a description below each journal entry, proper format of the balance sheet, keeping working notes separate, etc. Important topics to concentrate in accountancy are cash flow statement, company accounts and partnership. Memorize all the important formulas and do your calculations correctly.</p>\r\n\r\n<p><strong>Economics &ndash;</strong><br />\r\nIt has got a vast syllabus and therefore instead of referring to too many study material, students should concentrate only on the actual course books. Start improving your logical reasoning and analytical writing skills. It would be good for students to make notes of important terms and definitions. Draw graphs, diagrams and tables neatly. Important topics to concentrate on are National Income, Demand and Supply, Revenue and Cost, etc.</p>\r\n\r\n<p><strong>Business Studies &ndash;</strong><br />\r\nIt is again one of the scoring subjects in commerce. It is very easy to understand but students need to make sure that they cover all the topics given in the course books. Try to give the answers in pointers and not in paragraphs. Try to understand the concepts behind the important definitions.</p>\r\n\r\n<p>For the overall preparation, make proper notes of every subject separately. Know the important and scoring topics, your weaker and stronger subject areas and how you to need to improve the same. Calculate how much time is left in the final exams and prepare a time table for your preparation.</p>\r\n\r\n<p>Give yourself enough time for revision before the actual board exams. Solve sample papers and previous year papers to understand the actual exam pattern, type of questions and difficulty level of the questions.</p>\r\n"
// post_image: "4412_1623739035.png"
// post_title: "How to prepare for Commerce 12th Board Exams"
// user_first_name: "Admin"
// user_last_name: "Admin"

// course_detail: "<p>The Institute of Banking Personnel Selection conducts the IBPS PO Bank Exam which is your gateway to the much sought after bank jobs. IBPS provides its services to all public&ndash;sector banks, SBI, associate banks of SBI, RBI, NABARD, SIDBI, LIC &amp; Insurance companies and other banks which are regular members of the IBPS society.</p>"
// course_eligibility: "<p>\r\n                                <p><strong>Educational Qualification:</strong>&nbsp;&nbsp; Candidate should have a degree (Graduation) in any discipline from a University recognized by the Govt. of India or any equivalent qualification recognized as such by the Central Government. The candidate must possess valid mark&ndash;sheet &frasl; degree certificate that he &frasl; she is a graduate on the day he &frasl; she registers and indicate the percentage of marks obtained in graduation while registering online.</p>\r\n                                <p><strong>Computer Literacy:</strong>&nbsp;&nbsp;Operating and working knowledge in computer systems is mandatory i.e. candidates should have certificate&frasl;diploma&frasl;degree in computer operations&frasl;language&frasl; should have studied computer &frasl; information technology as one of the subjects in the high school&frasl;college&frasl;institute.</p>\r\n                                <p><strong>Age:</strong>&nbsp;Minimum: 20 years, Maximum: 30 years i.e. A candidate must have been born not earlier than 02.07.1986 and not later than 01.07.1996 (both dates inclusive)</p>\r\n                            </p>"
// course_key_benefits: "<p>\r\n                                <ul>\r\n                                    <li>PO&rsquo;s are benefitted with the Housing Loan, Car Loan &amp; Personal Loans on concessionary rate of interest.</li>\r\n                                    <li>Women and single men with children or aged parents have the provision to take sabbatical leave of up to 2 years.</li>\r\n                                    <li>Bank employees can also be transferred to its respective foreign branches and can get a chance to work in foreign countries.</li>\r\n                                </ul>\r\n                            </p>"
// course_name: "IBPS PO"
// course_overview: "<p>\r\n                                <p>The IBP
// course_slug: "IBPS_PO

// {
//   "id": "1",
//   "imgUrl": "course-1.jpg",
//   "authorImg": "author.jpg",
//   "authorName": "John Doe",
//   "authorCourses": "13 Courses",
//   "price": "$20",
//   "courseTitle": "Php & mySql Programming",
//   "courseDesc": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur accusamus hic ea in autem debitis minima.",
//   "courseLink": "/course-details"
// }
