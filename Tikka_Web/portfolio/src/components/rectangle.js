export default function rectangle () {
  const appContainer = document.getElementById("rectangle1")
  const objects = [
    {
      title:"Projects",
      number:"3"
    },
    {
      title:"Users",
      number:"3"
    },
    {
      title:"Certificates",
      number:"13"
    },
    {
      title:"Years",
      number:"1+"
    }
  ];

  for (let i = 0; i < objects.length; i++) {
    let {title, number} = objects[i];
    
    appContainer.innerHTML += 
     `<div class="flex flex-col items-center">
        <h1 class="text-2xl md:text-4xl font-bold">${number}</h1>
        <h1 class="text-sm xs:text-md md:text-xl">${title}</h1>
      </div>`
  }

}






