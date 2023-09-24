import aboutMe from './components/aboutMe.js';
import main from './components/main.js';
import navbar from './components/navbar.js';
import pdf from './components/pdf.js';
import rectangle from './components/rectangle.js';
import { setupScrollToTopButton } from './scrollUtils.js';


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
}


window.addEventListener("load", app);