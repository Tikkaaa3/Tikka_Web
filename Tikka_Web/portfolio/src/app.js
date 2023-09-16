import viteLogo from '/vite.svg'
/* import { setupCounter } from '.counter.js' */


export default function main ()  {
  const appContainer = document.getElementById("app");
  
  const mainHTML = `
  <div>
  <div id="about" class="flex flex-row justify-between items-center">
    <div class="pl-48">
      <h1 class="text-7xl font-bold my-8">Hello, I am</h1>
      <h1 class="text-7xl text-white font-bold my-8">Software Developer</h1>
      <p class="text-custom-white">Talks about #python, #webdeveloper, #cloudcomputing, #softwaredeveloper, and #fullstackdeveloper</p>
      <button id="custom-button">Show CV</button>
      <button id="custom-button">Download CV</button>
    </div>
  
    <div class="mx-2 pr-48">
      <div class="w-96 h-96 rounded-full overflow-hidden">
        <img src="/javascript.svg" alt="JavaScript Logo" class="object-cover w-full h-full" />
      </div>
    </div>
  </div>
  <!-- Space -->
<div class="py-20"></div>
  </div>
  `;
  
  appContainer.innerHTML += mainHTML;

  
} 


window.addEventListener("load", main);