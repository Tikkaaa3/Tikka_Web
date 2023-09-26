// projects.js
export default function projects() {
  const projectsArray = [
    {
      project: "JavaScript Web-Site 1",
      src: "portfolio.mp4",
      imgSrc: "./portfolio.png",
    },
    {
      project: "JavaScript Web-Site 2",
      src: "portfolio.mp4",
      imgSrc: "./portfolio.png",
    },
    {
      project: "JavaScript Web-Site 3",
      src: "portfolio.mp4",
      imgSrc: "./portfolio.png",
    },
    // Add more projects as needed...
  ];

  let appContainer = document.getElementById("projectsList");

  projectsArray.forEach((project) => {
    let projectDiv = document.createElement("div");
    projectDiv.className =
      "card flex flex-col justify-center items-center transform overflow-hidden relative rounded-lg mx-4 my-4 shadow-md shadow-custom-red hover:shadow-custom-blue relative video-card";

    let videoOverlay = document.createElement("div");
    videoOverlay.className =
      "absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-opacity-50 backdrop-blur-5 rounded-lg video-overlay";

    let videoContainer = document.createElement("div");
    videoContainer.style.position = "relative";
    videoContainer.style.width = "100%";
    videoContainer.style.paddingBottom = "56.25%"; /* 16:9 aspect ratio for video */

    let video = document.createElement("video");
    video.preload = "none";
    video.playsInline = true;
    video.className = "absolute inset-0 w-full h-full";
    let source = document.createElement("source");
    source.src = project.src;
    source.type = "video/mp4";
    let projectHeader = document.createElement("h6");
    projectHeader.className = "text-xl flex font-semibold mt-4";
    projectHeader.innerHTML = project.project;

    video.addEventListener("canplay", function () {
      video.play();
    });

    video.appendChild(source);
    videoContainer.appendChild(video);
    projectDiv.appendChild(videoOverlay);
    projectDiv.appendChild(projectHeader);
    projectDiv.appendChild(videoContainer);

    // Create a container for the image
    let imgContainer = document.createElement("div");
    imgContainer.style.position = "absolute";
    imgContainer.style.top = "47%"; // Center vertically
    imgContainer.style.left = "0";
    imgContainer.style.width = "100%";
    imgContainer.style.transform = "translateY(-36%)"; // Center vertically

    let prevImg = document.createElement("img");
    prevImg.loading = "lazy";
    prevImg.style.width = "100%"; // Make the image responsive to its container
    prevImg.style.height = "auto"; // Allow the height to adjust proportionally
    prevImg.style.color = "transparent";
    prevImg.src = project.imgSrc;

    imgContainer.appendChild(prevImg);
    projectDiv.appendChild(imgContainer);
    appContainer.appendChild(projectDiv);
  });
}
