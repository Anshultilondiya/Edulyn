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
    colors: {},
  };
};

export default createClientStore;