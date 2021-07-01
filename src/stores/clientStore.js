const createClientStore = () => {
  return {
    webHash: "81c318711abc5110e0fbd3d374e9103c",
    expiryDate: "",
    updateHash(webHash, expiryDate) {
      this.webHash = webHash;
      this.expiryDate = expiryDate;
      console.log("webHash", this.webHash);
      console.log("expiryDate", this.expiryDate);
    },
    sliderData: [],
    coreFeaturesData: [],
    instituteDetails: {},
    topCourses: [],
    testimonials: [],
    faqData: [],
    notifications: [],
    facultyData: [],
    blogs: [],
    allCourses: [],
  };
};

export default createClientStore;

// course_detail: "<p>The State Bank of India is the country&rsquo;s oldest bank and has widespread network in India. It is headquartered in Mumbai. SBI conducts online objective prelims and mains exams. It is one of the most desired competitive exams in India as it is offering a prestigious career option to the candidates looking for banking and government sector jobs.</p>"
// course_eligibility: "<p>\r\n                            <p><strong>1</strong><strong>. Essential Academic Qualifications:</strong></p>\r\n                            <p>Graduation in any discipline from a recognized University or any equivalent qualification recognized by the Central Government. Those who are in the Final year&frasl;Semester of their Graduation may also apply provisionally subject to the condition that, if called for the interview, they will have to produce proof of having passed the graduation examination. Candidates possessing the qualification of Chartered Accountant may also apply.</p>\r\n                            <p><strong>2. Age Limit</strong></p>\r\n                            <p>Not below 21 years and not above 30 years i.e. candidates must have been born not earlier than 02.04.1987 and not later than 01.04.1996 (both days inclusive)</p>\r\n                        </p>"
// course_id: 9464
// course_key_benefits: "<p>\r\n                            <ul>\r\n                                <li>The basic salary of a newly joined SBI PO is more than that of a PO who has joined in any other public sector bank.</li>\r\n                                <li>The employees with the bank are governed under the Defined Contributory Provident Funds Scheme in which the bank will make contributions to the PF account of the employee.</li>\r\n                                <li>The employees in SBI enjoy a medical benefit scheme, unmatched in the public sector.</li>\r\n                                <li>Women employees of SBI can take two-year sabbatical leave from work for purposes such as children&rsquo;s education.</li>\r\n                                <li>SBI offers the best promotion policy among all the public sector banks in India and it rewards its top performers accordingly by giving them challenging assignments.</li>\r\n                            </ul>\r\n                        </p>"
// course_name: "SBI PO"
// course_overview: "<p>\r\n                            <p>There is online objective type preliminary test followed by online objective mains test and online descriptive test. Mains exam is followed by GD and interview.</p>\r\n                            <p><strong>Phase I &ndash; Preliminary Exam:</strong>&nbsp;&nbsp;Preliminary Examination consisting of objective tests for 100 marks and it is conducted online. This test would be of 1 hour duration consisting of 3 sections as follows:</p>\r\n                            <ul>\r\n                                    <li>English Language</li>\r\n                                    <li>Quantitative Aptitude</li>\r\n                                    <li>Reasoning Ability</li>\r\n                            </ul>\r\n                            <p>There is a penalty for wrong answer. One&ndash;fourth mark is deducted for every incorrect answer. Candidates have to qualify in each of the three tests by securing passing marks to be decided by the bank. An adequate number of candidates in each category as decided by the bank are&nbsp;shortlisted for the main examination.</p>\r\n                            <p><strong>Phase II&ndash; Mains Examination:</strong></p>\r\n                            <p><strong>1. Objective Test</strong></p>\r\n                            <p><strong>2. Descriptive Test </strong></p>\r\n                            <p>Mains Examination consists of objective tests for 200 marks and descriptive test for 50 marks. Both the objective and descriptive tests are online. Candidates have to answer descriptive test by typing on the computer. Immediately after completion of objective test, descriptive test is administered.</p>\r\n                            <p><strong>Phase III &ndash;</strong>&nbsp;<strong>Group Exercises (20 marks) &amp; Interview (30 marks):</strong></p>\r\n                            <p>The aggregate marks of candidates qualifying in both the objective tests and descriptive test are arranged in descending order in each category. The adequate number of candidates in each category, as decided by the bank is called for group exercises and interview. The qualifying marks in group exercises &amp; interview are as decided by the bank.</p>\r\n                        </p>"
// course_slug