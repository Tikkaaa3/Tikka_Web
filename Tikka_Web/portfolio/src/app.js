import { setupScrollToTopButton } from './scrollUtils.js';


export default function main ()  {
  const appContainer = document.getElementById("app");
  
  const mainHTML = `
  <div>
  </div>
  `;
  
  appContainer.innerHTML += mainHTML;
  setupScrollToTopButton();
  
} 


window.addEventListener("load", main);