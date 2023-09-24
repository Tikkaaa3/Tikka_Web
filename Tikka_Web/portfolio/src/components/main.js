export default function main() {

  const headWriting = "Talks about #python, #webdeveloper, #cloudcomputing, #softwaredeveloper, and #fullstackdeveloper";
  const job = "Software Developer";

  const appContainer = document.getElementById("main")

  appContainer.innerHTML += `
  <div class="flex flex-col items-center custom-sm:flex-row justify-between custom-sm:items-stretch">
    <div class="custom-sm:pl-48 order-2 custom-sm:order-1">
      <h1 class="text-6xl 2xl:text-8xl font-bold my-8 bg-gradient-to-br from-custom-dark-red via-custom-light-red to-custom-red to-65% text-transparent bg-clip-text">Hello, I am</h1>
      <h1 class="text-6xl 2xl:text-8xl text-white font-bold my-8 cursor-pointer"> ${job} </h1>
      <p class="text-custom-white text-xl 2xl:text-2xl"> ${headWriting} </p>
      <button id = "cvButton" type="button" class="py-3 px-4 mt-12 mb-36 xs:my-12 mx-1 transition ease-in-out hover:-translate-y-1 text-white p-2 rounded-md bg-gradient-to-r via-custom-light-red from-custom-dark-red to-custom-red hover:from-custom-blue hover:to-black">Show CV</button>
    <a href="./Emre_Tolga_Kaptan_Resume.pdf" download="Emre_Tolga_Kaptan_Resume.pdf">
    <button class="transition ease-in-out hover:-translate-y-1 bg-gradient-to-r from-custom-dark-red via-custom-light-red to-custom-red hover:from-custom-blue hover:to-black text-white rounded-md p-1">
      <span class="flex w-full bg-gradient-to-br from-custom-black to-black to-%60 text-white rounded p-2">
      Download CV
         </span>
    </button>
  </a>
  </div>

  <div class="mx-2 custom-sm:pr-48 order-1 custom-sm:order-2 items-center">
    <div class="w-64 h-64 lg:w-72 lg:h-72 2xl:w-96 2xl:h-96 rounded-full overflow-hidden">
      <img src="/char.jpg" alt="Avatar Logo" class="object-cover w-full h-full" />
    </div>
  </div>
</div> `
}



