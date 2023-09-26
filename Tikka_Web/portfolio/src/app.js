import aboutMe from './components/aboutMe.js';
import contact from './components/contact.js';
import main from './components/main.js';
import navbar from './components/navbar.js';
import pdf from './components/pdf.js';
import phoneNavbar from './components/phoneNavbar.js';
import projects from './components/projects.js';
import rectangle from './components/rectangle.js';
import skills from './components/skills.js';
import aboutButtons from './utils/aboutMeButtons.js';
import cvUtil from './utils/cvUtils.js';
import fancy from './utils/fancy.js';
import { setupScrollToTopButton } from './utils/scrollUtils.js';
import sendEmail from './utils/sendEmail.js';
import video from './utils/video.js';


export default function app() {
  
  setupScrollToTopButton();
  navbar();
  main();
  pdf();
  rectangle();
  aboutMe();
  aboutButtons();
  skills();
  projects();
  contact();
  phoneNavbar();
  video();
  sendEmail();
  fancy();
  let cvButton = document.getElementById("cvButton");
  cvButton.addEventListener("click", cvUtil);
}


window.addEventListener("load", app);
