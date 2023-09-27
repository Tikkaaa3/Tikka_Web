import { projectsArray } from "../../data/projectsArray";

export default function projects() {
  

  let appContainer = document.getElementById("projectsList");

  projectsArray.forEach((project) => {
    let projectDiv = document.createElement("div");
    projectDiv.className =
      "card flex flex-col relative rounded-lg mx-4 my-4 shadow-md shadow-custom-red hover:shadow-custom-blue relative video-card";

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

    // Button container at the bottom-right corner
    let buttonContainer = document.createElement("div");
    buttonContainer.className =
      "flex flex-row absolute bottom-4 right-4 space-x-2";

    // Button 1
    let button1 = document.createElement("a");
    button1.href = project.projectSrc;
    button1.target = "_blank";
    button1.className =
      "p-2 rounded-full";
    let button1Img = document.createElement("img");
    button1Img.src = "/code.png";
    button1Img.alt = "code 1";
    button1Img.className = "w-6 h-6 xs:w-12 xs:h-12";
    button1.appendChild(button1Img);

    // Button 2
    let button2 = document.createElement("a");
    button2.id = "eyeButton";
    button2.href = "#Skills";
    button2.className =
      "p-2  rounded-full";
    let button2Img = document.createElement("img");
    button2Img.src = "/eye.png";
    button2Img.id = "eyeButton";
    button2Img.alt = project.project;
    button2Img.className = "w-6 h-6 xs:w-12 xs:h-12 hover:cursor-pointer";
    button2.appendChild(button2Img);

    buttonContainer.appendChild(button1);
    buttonContainer.appendChild(button2);
    projectDiv.appendChild(buttonContainer);

    appContainer.appendChild(projectDiv);
  });
}
