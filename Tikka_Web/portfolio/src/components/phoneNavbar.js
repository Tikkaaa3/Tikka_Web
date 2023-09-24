export default function phoneNavbar() {
  const navItems = ["Tikka", "About", "Skills", "Projects", "Contact"];
  let navbar = "";

  const appContainerL = document.getElementById("phoneNavbarL");
  const appContainerR = document.getElementById("phoneNavbarR");

  for (let i = 0; i < navItems.length; i++) {
    navbar = navItems[i]
    if (i == 0) {
      appContainerL.innerHTML += `<div>
    <a href="#${navbar}">
      <h1 class="cursor-pointer hover:underline">
        ${navbar}
      </h1>
    </a>
  </div>`
    } else {
      appContainerR.innerHTML += `
  <div class="mx-2">
  <a href="#${navbar}">
    <h1 class="cursor-pointer hover:underline">
      ${navbar}
    </h1>
  </a>
</div>
  `
    }

  }
}