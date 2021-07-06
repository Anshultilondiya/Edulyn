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
    webDetails: {},
    webConfig: {},
    webLayout: {},
    logo: "",
    colors: {
      bg1: "#182B49",
      bg2: "#F6F9FF",
      bg3: "#11B67A",
      gr_bg: "linear-gradient(90deg, #11B67A 0%, #009444 100%)",
      gr_bg2: "linear-gradient(90deg, #009444 0%, #11B67A 100%)",
      copy_bg: "#122340",
      blue: "#2c97ea",
      green: "#11B67A",
      green2: "#00a76a",
      red: "#ff6f6f",
      purple: "#84479c",
      yellow: "#fbab19",
      black1: "#182B49",
      black2: "#444444",
      text1: "#555555",
      text2: "#666666",
      text3: "#969696",
      text4: "#aaaaaa",
      text5: "#cccccc",
      border1: "#eeeeee",
      border2: "#3e3e3e",
      border3: "#dddddd",
      footer1: "#1a1b25",
      footer2: "#16171f",
      ftext: "#8D8E92",
      white: "ffffff"
    },
    updateColors(obj) {
      this.colors.bg1 = obj.primary
      this.colors.green = obj.secondary
      this.colors.green2 = obj.ternary
      this.colors.gr_bg = `linear-gradient(90deg, ${obj.secondary} 0%, ${obj.ternary} 100%)`
      this.colors.gr_bg2 = `linear-gradient(90deg, ${obj.ternary} 0%, ${obj.secondary} 100%)`
      return this.colors
    }
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