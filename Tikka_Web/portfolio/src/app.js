import aboutMe from './components/aboutMe.js';
import contact from './components/contact.js';
import main from './components/main.js';
import navbar from './components/navbar.js';
import pdf from './components/pdf.js';
import phoneNavbar from './components/phoneNavbar.js';
import projects from './components/projects.js';
import rectangle from './components/rectangle.js';
import skills from './components/skills.js';
import cvUtil from './utils/cvUtils.js';
import { setupScrollToTopButton } from './utils/scrollUtils.js';


export default function app() {
  
  setupScrollToTopButton();
  navbar();
  main();
  pdf();
  rectangle();
  aboutMe();
  skills();
  projects();
  contact();
  phoneNavbar();
  let cvButton = document.getElementById("cvButton");
  cvButton.addEventListener("click", cvUtil);
}


window.addEventListener("load", app);
