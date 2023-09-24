export default function main() {

  const headWriting = "Talks about #python, #webdeveloper, #cloudcomputing, #softwaredeveloper, and #fullstackdeveloper";
  const job = "Software Developer";

  const appContainer = document.getElementById("main")

  appContainer.innerHTML += `
  <div class="flex flex-col items-center custom-sm:flex-row justify-between custom-sm:items-stretch">
    <div class="custom-sm:pl-48 order-2 custom-sm:order-1">
      <h1 class="text-6xl 2xl:text-8xl font-bold my-8 bg-gradient-to-br from-custom-light-red via-black to-custom-red text-transparent bg-clip-text">Hello, I am</h1>
      <h1 class="text-6xl 2xl:text-8xl text-white font-bold my-8 cursor-pointer"> ${job} </h1>
      <p class="text-custom-white text-xl 2xl:text-2xl"> ${headWriting} </p>
      <button id="custom-button" class="pt-4">Show CV</button>
      <a href="./Emre_Tolga_Kaptan_Resume.pdf" download="Your_PDF_File_Name.pdf">
        <button id="custom-button" class="pt-4">Download CV</button>
      </a>
  </div>

  <div class="mx-2 custom-sm:pr-48 order-1 custom-sm:order-2 items-center">
    <div class="w-64 h-64 lg:w-72 lg:h-72 2xl:w-96 2xl:h-96 rounded-full overflow-hidden">
      <img src="/char.jpg" alt="Avatar Logo" class="object-cover w-full h-full" />
    </div>
  </div>
</div> `
}



