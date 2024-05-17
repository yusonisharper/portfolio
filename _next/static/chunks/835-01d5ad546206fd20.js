"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[835],{25542:function(e,i,t){var o=t(85893),n=(t(67294),t(82010)),a=t(69954);i.Z=function(e){var i=e.children,t=e.type,r=e.onClick,s=e.classes,c=(0,n.F)().theme;return"primary"===t?(0,o.jsx)("button",{onClick:r,type:"button",className:"text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg ".concat("dark"===c?"bg-white text-black":"bg-black text-white","  transition-all duration-300 ease-out first:ml-0 hover:scale-105 active:scale-100 link ").concat(a.showCursor&&"cursor-none","  ").concat(s),children:i}):(0,o.jsx)("button",{onClick:r,type:"button",className:"text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 ".concat("dark"===c?"hover:bg-slate-600 text-white":"hover:bg-slate-100"," hover:scale-105 active:scale-100  tablet:first:ml-0  ").concat(a.showCursor&&"cursor-none"," ").concat(s," link"),children:i})}},29617:function(e,i,t){var o=t(85893),n=t(67294),a=t(93462),r=(t(40358),t(82010));i.Z=function(){var e=(0,r.F)(),i=(0,n.useState)(),t=i[0],s=i[1];return(0,n.useEffect)((function(){s(!0)}),[]),(0,o.jsx)(o.Fragment,{children:t&&(0,o.jsx)(a.Z,{targets:[".link"],customClass:"custom-cursor",dimensions:30,fill:"dark"===e.theme?"#fff":"light"===e.theme?"#000":void 0,smoothness:{movement:.2,scale:.1,opacity:.2},targetOpacity:.5,targetScale:2})})}},42665:function(e,i,t){var o=t(85893),n=t(2271),a=t(82010),r=t(11163),s=t(67294),c=t(25542),l=t(69954);i.Z=function(e){var i=e.handleHomeScroll,t=e.handleWorkScroll,d=e.handleSkillScroll,m=e.handleExpScroll,p=e.handleEduScroll,g=e.handleAboutScroll,u=e.isBlog,h=(0,r.useRouter)(),f=(0,a.F)(),k=f.theme,v=f.setTheme,y=(0,s.useState)(!1),b=y[0],w=y[1],S=l.name,x=l.showBlog,j=l.showResume,C=(0,r.useRouter)().basePath;return(0,s.useEffect)((function(){w(!0)}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.J,{className:"block tablet:hidden mt-5",children:function(e){var i=e.open;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"flex items-center justify-between p-2 laptop:p-0",children:[(0,o.jsx)("h1",{onClick:function(){return h.push("/")},className:"font-medium p-2 laptop:p-0 link",children:S}),(0,o.jsxs)("div",{className:"flex items-center",children:[l.darkMode&&(0,o.jsx)(c.Z,{onClick:function(){return v("dark"===k?"light":"dark")},children:(0,o.jsx)("img",{className:"h-6",src:"".concat(C,"/images/").concat("dark"===k?"moon.svg":"sun.svg")})}),(0,o.jsx)(n.J.Button,{children:(0,o.jsx)("img",{className:"h-5",src:"".concat(C,"/images/").concat(i?"light"===k?"cancel.svg":"cancel-white.svg":"dark"===k?"menu-white.svg":"menu.svg")})})]})]}),(0,o.jsx)(n.J.Panel,{className:"absolute right-0 z-10 w-11/12 p-4 ".concat("dark"===k?"bg-slate-800":"bg-white"," shadow-md rounded-md")})]})}}),(0,o.jsxs)("div",{className:"mt-10 hidden flex-row items-center justify-between sticky ".concat("light"===k&&"bg-white"," dark:text-white top-0 z-10 tablet:flex"),children:[(0,o.jsx)("h1",{onClick:function(){return h.push("/")},className:"font-medium cursor-pointer mob:p-2 laptop:p-0",children:S}),u?(0,o.jsxs)("div",{className:"flex",children:[(0,o.jsx)(c.Z,{onClick:function(){return h.push("/")},children:"Home"}),x&&(0,o.jsx)(c.Z,{onClick:function(){return h.push("/blog")},children:"Blog"}),j&&(0,o.jsx)(c.Z,{onClick:function(){return h.push("/resume")},classes:"first:ml-1",children:"Resume"}),(0,o.jsx)(c.Z,{onClick:function(){return window.open("mailto:hello@chetanverma.com")},children:"Contact"}),b&&k&&l.darkMode&&(0,o.jsx)(c.Z,{onClick:function(){return v("dark"===k?"light":"dark")},children:(0,o.jsx)("img",{className:"h-6",src:"".concat(C,"/images/").concat("dark"===k?"moon.svg":"sun.svg")})})]}):(0,o.jsxs)("div",{className:"flex",children:[(0,o.jsx)(c.Z,{onClick:i,children:"Home"}),(0,o.jsx)(c.Z,{onClick:t,children:"Project"}),(0,o.jsx)(c.Z,{onClick:d,children:"Skill"}),(0,o.jsx)(c.Z,{onClick:m,children:"Experience"}),(0,o.jsx)(c.Z,{onClick:p,children:"Education"}),(0,o.jsx)(c.Z,{onClick:g,children:"About"}),x&&(0,o.jsx)(c.Z,{onClick:function(){return h.push("/blog")},children:"Blog"}),j&&(0,o.jsx)(c.Z,{onClick:function(){return h.push("/resume")},classes:"first:ml-1",children:"Resume"}),(0,o.jsx)(c.Z,{onClick:function(){return window.open("mailto:hello@chetanverma.com")},children:"Contact"}),b&&k&&l.darkMode&&(0,o.jsx)(c.Z,{onClick:function(){return v("dark"===k?"light":"dark")},children:(0,o.jsx)("img",{className:"h-6",src:"".concat(C,"/images/").concat("dark"===k?"moon.svg":"sun.svg")})})]})]})]})}},69954:function(e){e.exports=JSON.parse('{"name":"Yusheng Wang | \u738b\u88d5\u5723","headerTaglineOne":"Hello \ud83d\udc4b","headerTaglineTwo":"I\'m Yusheng - passionate","headerTaglineThree":"software developer","headerTaglineFour":"making mobile App","showCursor":false,"showBlog":false,"darkMode":true,"showResume":false,"socials":[{"id":"1","title":"Github","link":"https://github.com/yusonisharper"},{"id":"2","title":"LinkedIn","link":"https://www.linkedin.com/in/yusheng-wang-b20974299/"},{"id":"3","title":"Personal Server","link":"http://erp.yushengstudio.net/"},{"id":"4","title":"Email","link":"mailto:yushengw720@gmail.com"}],"projects":[{"id":"1","title":"Real Estate","description":"A Python and XML-based Odoo module for real estate sales tracking, enhancing online visibility and sales process efficiency","tool":[{"id":"1","name":"Odoo","imageSrc":""},{"id":"2","name":"Python","imageSrc":""},{"id":"3","name":"XML","imageSrc":""}],"imageSrc":"/project1.png","url":"https://github.com/yusonisharper/odoo"},{"id":"2","title":"Odoo mobile","description":"Developed by Flutter framework and Dart language to create a high-performance, cross-platform mobile app for Odoo, focusing on user experience and efficiency improvements.","tool":[{"id":"1","name":"Flutter","imageSrc":""},{"id":"2","name":"Dart","imageSrc":""}],"imageSrc":"/project2.png","url":"https://github.com/yusonisharper/odoo-mobile"},{"id":"3","title":"Suspects Vehicle Locator","description":"An edge computing solution for vehicle identification and tracking, facilitating real-time police department notifications for suspect vehicles","tool":[{"id":"1","name":"Python","imageSrc":""},{"id":"2","name":"Jetson Nano","imageSrc":""},{"id":"3","name":"Odoo","imageSrc":""}],"imageSrc":"/project3.png","url":"https://github.com/yusonisharper/suspects-vehicle-locate"},{"id":"4","title":"Rouguelite RPG Game","description":"A text-based game that allows user to interact with the console and play.","tool":[{"id":"1","name":"C++","imageSrc":""}],"imageSrc":"/project4.png","url":"https://github.com/yusonisharper/textbase-Rouguelite-RPG"}],"skills":[{"id":"1","title":"C","proficiency":"4","imageSrc":"https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg"},{"id":"2","title":"C++","proficiency":"4.5","imageSrc":"https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"},{"id":"3","title":"Python","proficiency":"4","imageSrc":"https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"},{"id":"4","title":"Dart","proficiency":"4.5","imageSrc":"https://upload.wikimedia.org/wikipedia/commons/c/c6/Dart_logo.png"},{"id":"5","title":"Javascript","proficiency":"4.5","imageSrc":"https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"},{"id":"6","title":"HTML5","proficiency":"4","imageSrc":"https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"},{"id":"7","title":"CSS3","proficiency":"4","imageSrc":"https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"},{"id":"8","title":"Java","proficiency":"3.5","imageSrc":"https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg"},{"id":"9","title":"SQL","proficiency":"3","imageSrc":"https://upload.wikimedia.org/wikipedia/commons/d/d7/Sql_data_base_with_logo.svg"},{"id":"10","title":"Odoo","proficiency":"4","imageSrc":"https://upload.wikimedia.org/wikipedia/commons/4/4d/Odoo_logo_rgb.svg"},{"id":"11","title":"Flutter","proficiency":"4","imageSrc":"https://upload.wikimedia.org/wikipedia/commons/7/79/Flutter_logo.svg"},{"id":"12","title":"Django","proficiency":"3","imageSrc":"https://static.djangoproject.com/img/logos/django-logo-negative.1d528e2cb5fb.png"},{"id":"13","title":"Node.js","proficiency":"3","imageSrc":"https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"},{"id":"14","title":"React.js","proficiency":"4","imageSrc":"https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"},{"id":"15","title":"PostgreSQL","proficiency":"3","imageSrc":"https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"},{"id":"16","title":"Git","proficiency":"3","imageSrc":"https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg"},{"id":"17","title":"Docker","proficiency":"2.5","imageSrc":"https://upload.wikimedia.org/wikipedia/commons/a/a7/Docker-svgrepo-com.svg"},{"id":"17","title":"Blender 3D","proficiency":"4","imageSrc":"https://upload.wikimedia.org/wikipedia/commons/0/0c/Blender_logo_no_text.svg"},{"id":"18","title":"Unity","proficiency":"2","imageSrc":"https://upload.wikimedia.org/wikipedia/commons/1/19/Unity_Technologies_logo.svg"},{"id":"19","title":"Unreal Engine","proficiency":"2","imageSrc":"https://upload.wikimedia.org/wikipedia/commons/d/da/Unreal_Engine_Logo.svg"}],"experiences":[{"dates":"March 2021 - Present","type":"Part Time","position":"Warehouse and Technical Support Specialist at Subrtex","bullets":"Enhanced warehouse operations efficiency by coaching staff on process adherence, reducing error rates by 60% ; Fostered team motivation and communication, ensuring complete tasks on time"},{"dates":" December 2018 \u2013 March 2021","type":"Part Time","position":"Warehouse Manager at Subrtex","bullets":"Expertly skilled in navigating diverse Warehouse Management Systems (WMS), coupled with an in-depth comprehension of the comprehensive logic underpinning all aspects of warehouse back-end operations ; Spearheaded the integration of Odoo WMS, optimizing inventory management and boosting productivity by 20% ; Proposed and implemented over 100 Odoo system and mobile client enhancements in collaboration with developers, increasing productivity by 50% ; Developed semi-automated payroll forms, streamlining salary calculations and boosting efficiency by 90% ; Improved customer satisfaction by 25% through effective workload management and prioritization between Outbound and Inbound"}],"educations":[{"universityName":"University of California, Riverside","universityDate":"September 2022 \u2013 June 2024","universityPara":"Bachelor\u2019s Degree in Computer Science; GPA: 3.86/4.00"},{"universityName":"Mt. San Antonio College","universityDate":"September 2020 \u2013 June 2022","universityPara":"Minor Degree in Computer Science; GPA: 3.83/4.00"}],"aboutpara":"Hello! I am Yusheng Wang, a passionate computer science professional based in California, USA, completing my Bachelor\u2019s Degree in Computer Science at the University of California, Riverside. I have a strong foundation in programming languages such as C/C++, Python, Dart, JavaScript, and more, along with expertise in technologies like Odoo, Flutter, Django, Node.js, and React.js. My professional experience at Subrtex involved optimizing warehouse operations and integrating Odoo WMS to boost productivity. I have successfully developed projects including a Python and XML-based Odoo module for real estate sales tracking and a high-performance mobile app for Odoo using Flutter and Dart. I am eager to leverage my skills to create efficient and user-friendly solutions. Feel free to checkout my resume:","resume":{"tagline":"\ud83d\udc4b  I\'m a software engineer, product designer.","description":"I have delivered world-class user experiences to millions of people. Well-versed with React, Javascript, and most of the Web frameworks.","experiences":[{"id":"1","dates":"March 2022 - Present","type":"Full Time","position":"Frontend Engineer at X","bullets":"Bullet One, Bullet Two"},{"id":"d495c23b-4f65-479a-9b8a-cfbc1c089725","dates":"July 2020 - March 2022","type":"Full Time","position":"Frontend Engineer at X","bullets":"Worked on the frontend of a React application, Worked on the frontend of a React application"}],"education":{"universityName":"University X","universityDate":"2016-2020","universityPara":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"},"languages":["Javascript","HTML5","CSS","Python","Go"],"frameworks":["React","Typescript","NodeJs"],"others":["Figma","AdobeXD","AWS"]},"services":[{"id":"1","title":"Art Direction","description":"We help with the creation and development of online advertising ideas, with particular focus on their visual appearance."},{"id":"2","title":"Branding","description":"We design key brand elements such as the logo, color scheme, typography, and other design components that makes your brand stand out from competitors."},{"id":"3","title":"Web Design","description":"We build and optimize your online presence.  Website is the digital entry point into your business and a powerful revenue channel."},{"id":"4","title":"3D Design","description":"We combine creative design and technical skills to build striking 3D visualisations that bring your project to life."}]}')}}]);