export default function contact () {
  const icons = [
    {
      icon:"/github.svg",
      href:"https://github.com/Tikkaaa3"
    },
    {
      icon:"/linkedin.svg",
      href:"https://www.linkedin.com/in/emre-t-kaptan/"
    },
  ];

  let appContainer = document.getElementById("contact");

  let contactParagraph = document.createElement("div");
  contactParagraph.className = "flex-auto w-1/3"
  
  let contactContainer = document.createElement("div");     
  contactContainer.className = "items-center flex flex-col"

  contactContainer.innerHTML += `<h1 class="w-10/12 xs:w-2/3 text-xl xs:text-2xl mb-6 text-white font-bold">Let's Connect</h1>
  <p class="w-10/12 xs:w-2/3 text-gray-300 text-sm xs:text-lg ">I am currently actively seeking new opportunities.
    If you have any
    questions or would like to reach out, I'll do my utmost to respond promptly!</p>`

  let iconsContainer = document.createElement("div");
  iconsContainer.className = "flex flex-row w-10/12 xs:w-2/3 mt-2 xs:mt-4";

  icons.forEach(icon => {
    let iconButton = document.createElement("a");
    iconButton.href = icon.href;
    iconButton.target = "_blank";
    iconButton.className = "mx-2";
    let iconImg = document.createElement("img");
    iconImg.className = "w-10 h-10 xs:w-16 xs:h-16 p-2 rounded-lg shadow-md  shadow-custom-red hover:shadow-custom-blue"   
    iconImg.src = icon.icon;
    iconButton.appendChild(iconImg);
    iconsContainer.appendChild(iconButton);
  });
  contactContainer.appendChild(iconsContainer);
  contactParagraph.appendChild(contactContainer);

  let contactForm = document.createElement("div");
  contactForm.className = "flex-auto w-2/3";
  contactForm.innerHTML = `<form action="" class="flex flex-col items-center ">
  <div class="w-9/12 xs:w-7/12">
    <h1 class="mb-2 font-bold">Your Mail</h1>
    <input type="text" placeholder="tikkaaa3@gmail.com"
      class="caret-custom-blue mb-2 rounded-md bg-transparent border-2 border-black px-4 py-2.5 w-full">
  </div>
  <div class="w-9/12 xs:w-7/12 my-4">
    <h1 class="mb-2 font-bold">Subject</h1>
    <input type="text" placeholder="Just wanted to say hi"
      class="mb-2 rounded-md bg-transparent border-2 border-black px-4 py-2.5 w-full">
  </div>
  <div class="w-9/12 xs:w-7/12">
    <h1 class="mb-2 font-bold">Message</h1>
    <input type="text" placeholder="Let's talk about..."
      class="mb-2 rounded-md bg-transparent border-2 border-black px-4 py-2.5 w-full">
  </div>
  <button id="custom-button" type="button"
    class="transition ease-in-out hover:-translate-y-1 w-9/12 xs:w-7/12 py-2.5 my-3 font-bold text-white p-2 rounded-md bg-gradient-to-r via-custom-light-red from-custom-dark-red to-custom-red hover:from-custom-blue hover:to-black">Send
    Message</button>
</form>`;

appContainer.appendChild(contactParagraph);
appContainer.appendChild(contactForm);

}