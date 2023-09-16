import viteLogo from '/vite.svg'
/* import { setupCounter } from '.counter.js' */


export default function main ()  {
  const appContainer = document.getElementById("app");
  
  const mainHTML = `
  <div>
  </div>
  `;
  
  appContainer.innerHTML += mainHTML;

  
} 


window.addEventListener("load", main);