import emailjs from '@emailjs/browser';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"


export default function sendEmail() {

  const btn = document.getElementById('custom-button');

  const form = document.getElementById('form')

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const serviceID = "service_gya00rk"
    const templateID = "template_jsghwh7"
    const publicKey = "FieHjrgdfAcLz24i9"


    emailjs.sendForm(serviceID, templateID, this, publicKey)
      .then(() => {
        btn.value = 'Send Email';

        Toastify({
          text: "Thank you for your message! I will get back to you as soon as possible.",
          duration: 5000,
          newWindow: true,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "center", // `left`, `center` or `right`
          stopOnFocus: false, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #3b82f6, #000)",
          },
          onClick: function () { } // Callback after click
        }).showToast();

        form.reset();
      }, (err) => {
        Toastify({
          text: JSON.stringify(err.text),
          duration: 5000,
          newWindow: true,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "center", // `left`, `center` or `right`
          stopOnFocus: false, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #950740, #000)",
          },
          onClick: function () { } // Callback after click
        }).showToast();

        form.reset();

      });
  });
}