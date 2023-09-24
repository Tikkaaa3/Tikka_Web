export default function projects() {
  const projectsArray = [
    {
      project: "JavaScript Web-Site",
      src: "portfolio.mp4"
    },
    {
      project: "JavaScript Web-Site",
      src: "portfolio.mp4"
    },
    {
      project: "JavaScript Web-Site",
      src: "portfolio.mp4"
    },
  ];

  let appContainer = document.getElementById("projectsList");

  const projectsDiv = document.createElement("div");
  projectsDiv.className = "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 mx-10 gap-6";

  projectsArray.forEach((project) => {
    let projectDiv = document.createElement("div");
    projectDiv.className = "rounded-lg mx-4 p-6 w-72 xs:w-120 lg:w-96 custom-sm:w-120 my-4 shadow-md shadow-custom-red hover:shadow-custom-blue relative";
    let video = document.createElement("video");
    video.style.width = "100%"; // Set the width to 100%
    video.height = "240";
    video.muted = true; // Mute the video
    video.autoplay = true; // Start playing automatically
    video.loop = true; // Loop the video
    let source = document.createElement("source");
    source.src = project.src;
    source.type = "video/mp4";
    let projectHeader = document.createElement("h6");
    projectHeader.className = "text-xl flex font-semibold mt-4";
    projectHeader.innerHTML = project.project;

    // Listen for the "canplay" event to ensure the video is ready to play
    video.addEventListener("canplay", function() {
      video.play();
    });

    video.appendChild(source);
    projectDiv.appendChild(video);
    projectDiv.appendChild(projectHeader);

    projectDiv.innerHTML += `<div
    class="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-opacity-50 backdrop-blur-5 rounded-lg">
    <img src="eye.png" alt="eye Icon"
      class="hover:cursor-pointer icon w-16 h-16 text-custom-light-red hover:text-custom-dark-red mx-2" />
    <img src="code.png" alt="code Icon"
      class="hover:cursor-pointer icon w-16 h-16 text-custom-light-red hover:text-custom-dark-red mx-2" />
  </div>`;

    projectsDiv.appendChild(projectDiv);
  });
  
  appContainer.appendChild(projectsDiv);

}
