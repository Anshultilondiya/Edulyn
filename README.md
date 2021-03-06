SpeEdlabs Project : Edu-CMS

# Edulyn
---
### Application Execution
This application supports npm as package manager therefore it is highly recommended to use npm only, other package manager will also work fine but they will create there own package version managing files that may lead to conflict in versions of libraries used.

#### Run
```
npm start
```
#### Build
```
npm run build
```
---
### Folder Structure
```
Edulyn
├── public
|  └── assets
└── src
   ├── apis
   ├── components
   ├── contextProviders
   ├── data
   ├── helper
   ├── pages
   └── stores
```
1.    public folder contains all the static assets and should not be modified.
2.    src folder contains all the JavaScript files.

```
├── apis
|  └── api.js
├── App.css
├── App.js
├── App.test.js
├── components
|  ├── AboutUs.js
|  ├── common
|  |  ├── BackToTop.js
|  |  ├── Breadcrumb.js
|  |  ├── element
|  |  |  └── elements.js
|  |  ├── MobileMenu.js
|  |  ├── Search.js
|  |  ├── Sidebar.js
|  |  ├── StickyMenu.js
|  |  ├── styles
|  |  |  ├── backToTop.js
|  |  |  ├── breadcrumb.js
|  |  |  ├── global.js
|  |  |  ├── mobileMenu.js
|  |  |  ├── search.js
|  |  |  ├── sidebar.js
|  |  |  └── stickyMenu.js
|  |  └── svg
|  ├── CourseFilter.js
|  ├── FaqEvent.js
|  ├── Footer.js
|  ├── Header.js
|  ├── HeaderTwo.js
|  ├── HeroImage.js
|  ├── HeroSlider.js
|  ├── HomeBlog.js
|  ├── IconBox.js
|  ├── IconBoxModal.js
|  ├── ImageGallery.js
|  ├── PackageSection.js
|  ├── styles
|  |  ├── aboutUs.js
|  |  ├── courseFilter.js
|  |  ├── faqEvent.js
|  |  ├── footerOne.js
|  |  ├── header.js
|  |  ├── headerTwo.js
|  |  ├── heroImage.js
|  |  ├── heroSlider.js
|  |  ├── homeBlog.js
|  |  ├── homeContact.js
|  |  ├── iconBox.js
|  |  ├── imageGallery.js
|  |  ├── packageSection.js
|  |  ├── tabBox.js
|  |  ├── teamSlider.js
|  |  └── testimonialSlider.js
|  ├── TabBox.js
|  ├── TeamSlider.js
|  └── TestimonialSlider.js
├── contextProviders
|  └── clientContext.js
├── data
|  ├── 404
|  |  └── error.json
|  ├── about-us
|  |  ├── about-us.json
|  |  └── about-us2.json
|  ├── blog
|  |  ├── classic.json
|  |  ├── grid.json
|  |  ├── home-blog.json
|  |  └── recent-post.json
|  ├── coming-soon
|  |  └── coming-soon.json
|  ├── counter
|  |  └── number-counter.json
|  ├── course
|  |  ├── filter.json
|  |  ├── item.json
|  |  ├── popular.json
|  |  └── slider.json
|  ├── event
|  |  ├── details.json
|  |  └── events.json
|  ├── faq
|  |  └── faq.json
|  ├── faq-event
|  |  └── faq-event.json
|  ├── footer
|  |  ├── footer.json
|  |  └── footer2.json
|  ├── free-course
|  |  └── free-course.json
|  ├── gallery
|  |  ├── gallery-page.json
|  |  └── gallery.json
|  ├── help-area
|  |  └── help-area.json
|  ├── hero
|  |  ├── hero-image.json
|  |  └── hero-slider.json
|  ├── icon-box
|  |  └── icon-box.json
|  ├── instructor
|  |  ├── details.json
|  |  └── instructor.json
|  ├── service
|  |  └── service-box.json
|  ├── shop
|  |  ├── details.json
|  |  └── product.json
|  ├── team
|  |  └── team-slider.json
|  └── testimonial
|     └── testimonial-slider.json
├── helper
|  └── ScrollToTop.js
├── HomeOne.js
├── index.css
├── index.js
├── Loader.js
├── logo.svg
├── pages
|  ├── 404
|  |  ├── PageNotFound.js
|  |  └── styles
|  |     └── pageNotFound.js
|  ├── about
|  |  ├── About.js
|  |  └── styles
|  |     └── about.js
|  ├── achievements
|  |  ├── Achievements.js
|  |  └── styles
|  |     └── product.js
|  ├── alert
|  |  ├── Alert.js
|  |  └── styles
|  |     └── product.js
|  ├── batches
|  |  ├── Batches.js
|  |  └── styles
|  |     └── product.js
|  ├── blog
|  |  ├── BlogClassic.js
|  |  ├── BlogDetails.js
|  |  ├── BlogGrid.js
|  |  └── styles
|  |     ├── blog.js
|  |     ├── blogDetails.js
|  |     └── recentPost.js
|  ├── comingsoon
|  |  ├── ComingSoon.js
|  |  └── styles
|  |     └── comingSoon.js
|  ├── contact
|  |  ├── Contact.js
|  |  ├── GoogleMap.js
|  |  └── styles
|  |     └── contact.js
|  ├── courses
|  |  ├── components
|  |  |  ├── CourseItemsGrid.js
|  |  |  └── CourseItemsList.js
|  |  ├── CourseDetails.js
|  |  ├── CourseGrid.js
|  |  ├── CourseList.js
|  |  └── styles
|  |     └── course.js
|  ├── faq
|  |  ├── Faq.js
|  |  └── styles
|  |     └── faq.js
|  ├── forms
|  |  ├── admission.js
|  |  ├── career.js
|  |  ├── franchise.js
|  |  └── styles
|  |     └── forms.js
|  ├── gallery
|  |  ├── Gallery.js
|  |  └── styles
|  |     └── gallery.js
|  └── packages
|     ├── Packages.js
|     └── styles
|        └── product.js
├── reportWebVitals.js
├── serviceWorker.js
├── setupTests.js
├── stores
|  └── clientStore.js
└── utility.js
```
  - apis folder contains api.js where all the required api calling functions are written and whenever we need to make a call we will just import these functions in our files call them with appropriate arugments, most of the api functions just require hash id of the institutes. 







---
