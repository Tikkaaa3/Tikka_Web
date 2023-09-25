export default function aboutButtons() {
  let edButton = document.getElementById("educationButton");
  let certButton = document.getElementById("certificateButton");
  let edDiv = document.getElementById("universitiesDiv");
  let certDiv = document.getElementById("certificatesDiv");

  edButton.classList.add("border-b-4");
  
  edButton.addEventListener("click", () => {
    certDiv.hidden = true;
    edDiv.hidden = false;

    // Toggle the class for educationButton
    edButton.classList.add("border-b-4");
    certButton.classList.remove("border-b-4");
  });

  certButton.addEventListener("click", () => {
    edDiv.hidden = true;
    certDiv.hidden = false;

    // Toggle the class for certificateButton
    certButton.classList.add("border-b-4");
    edButton.classList.remove("border-b-4");
  });
}
