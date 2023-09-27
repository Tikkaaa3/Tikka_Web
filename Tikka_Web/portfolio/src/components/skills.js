import { skillsArray } from "../../data/skillsArray";

export default function skills() {

  let appContainer = document.getElementById("skillsList");

  const skillsDiv = document.createElement("div");
  skillsDiv.className = "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10 max-w-screen-xl mx-auto";

  skillsArray.forEach((skill) => {
    let skillDiv = document.createElement("div");
    skillDiv.id = skill.skill;
    skillDiv.className = "rounded-lg p-6 shadow-md shadow-custom-red hover:shadow-custom-blue";
    let skillImg = document.createElement("img");
    skillImg.src = skill.src; // Access src directly from the skill object
    skillImg.alt = skill.skill; // Access skill name directly from the skill object
    skillImg.className = "mx-auto h-16";
    let skillHeader = document.createElement("h6");
    skillHeader.className = "text-xl flex justify-center font-semibold mt-4";
    skillHeader.innerHTML = skill.skill; // Access skill name directly from the skill object
    skillDiv.appendChild(skillImg);
    skillDiv.appendChild(skillHeader);
    skillsDiv.appendChild(skillDiv);
    appContainer.appendChild(skillsDiv); // Use appendChild to add the skillDiv to the appContainer
  });
}
