import aboutMe from './components/aboutMe.js';
import main from './components/main.js';
import navbar from './components/navbar.js';
import pdf from './components/pdf.js';
import projects from './components/projects.js';
import rectangle from './components/rectangle.js';
import skills from './components/skills.js';
import cvUtil from './utils/cvUtils.js';
import { setupScrollToTopButton } from './utils/scrollUtils.js';


export default function app() {
  const appContainer = document.getElementById("app");
  const mainHTML = `
  <div>
  </div>
  `;
  
  appContainer.innerHTML += mainHTML;
  setupScrollToTopButton();
  navbar();
  main();
  pdf();
  rectangle();
  aboutMe();
  skills();
  projects();
  let cvButton = document.getElementById("cvButton");
  cvButton.addEventListener("click", cvUtil);
}


window.addEventListener("load", app);

