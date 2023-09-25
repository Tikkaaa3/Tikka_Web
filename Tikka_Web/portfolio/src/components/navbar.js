export default function navbar() {
  const navItems = ["Tikka", "About", "Skills", "Projects", "Contact"];
  let navbar = "";

  const appContainerL = document.getElementById("navbarL");
  const appContainerR = document.getElementById("navbarR");

  for (let i = 0; i < navItems.length; i++) {
    navbar = navItems[i];
    if (i == 0) {
      appContainerL.innerHTML += `<div>
    <a href="#${navbar}">
      <h1 class="cursor-pointer text-4xl font-bold relative">
        <span class="underline-animation">${navbar}</span>
      </h1>
    </a>
  </div>`;
    } else {
      appContainerR.innerHTML += `
  <div class="mx-2">
  <a href="#${navbar}">
    <h1 class="cursor-pointer relative">
      <span class="underline-animation">${navbar}</span>
    </h1>
  </a>
</div>
  `;
    }
  }
}
