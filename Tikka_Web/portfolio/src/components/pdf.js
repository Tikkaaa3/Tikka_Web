export default function pdf () {
  const appContainer = document.getElementById("pdf");
  
  appContainer.innerHTML += `    <div class="flex w-1/12 xs:w-2/12 2xl:w-1/4"></div>
  <div class="flex h-120 md:h-800 w-10/12 xs:w-8/12 2xl:w-2/4"><embed src="./Emre_Tolga_Kaptan_Resume.pdf"
      type="application/pdf" width="%100" height="%100" class="w-full"></div>
  <div class="flex w-1/12 xs:w-2/12 2xl:w-1/4"></div>` ;
}