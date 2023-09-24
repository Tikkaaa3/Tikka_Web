export default function cvUtil () {
  let cvButton = document.getElementById("cvButton");
  let buttonHtml = cvButton.innerHTML;
  let myCv = document.getElementById("pdf");
  if (buttonHtml === `Show CV`) {
    buttonHtml = "Hide CV";
    myCv.classList.remove("hidden");
  } else {
    buttonHtml = "Show CV";
    myCv.classList.add("hidden");
  }
  cvButton.innerHTML = buttonHtml;
}