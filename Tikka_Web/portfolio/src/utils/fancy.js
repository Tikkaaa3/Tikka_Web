export default function fancy() {
  function animateText() {
    const text = document.querySelector(".fancy-text");
    const strText = text.textContent;
    const splitText = strText.split("");
    text.textContent = "";
  
    for (let i = 0; i < splitText.length; i++) {
      text.innerHTML += "<span class='fancy-char'>" + splitText[i] + "</span>";
    }
  
    let char = 0;
    let timer = setInterval(onTick, 50);
  
    function onTick() {
      const span = text.querySelectorAll('.fancy-char')[char];
      span.classList.add('fade');
      char++;
      if (char === splitText.length) {
        complete();
        return;
      }
    }
  
    function complete() {
      clearInterval(timer);
      timer = null;
    }
  }
  
  // Call the animateText function every 5 seconds
  setInterval(animateText, 5000);
  
  // Initial animation
  animateText();
  
}