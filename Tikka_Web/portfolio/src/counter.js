export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}



/* const mainHTML = `
  <div>
  <a href="https://vitejs.dev" target="_blank">
  <img src="${viteLogo}" class="logo" alt="Vite logo" />
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
  <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
  </a>
  <h1>Hello Vite!</h1>
  <div class="card">
    <button id="counter" type="button"></button>
    </div>
  <p class="read-the-docs">
  Click on the Vite logo to learn more
  </p>
  </div>
  `; */

/*   setupCounter(document.querySelector('#counter')) */