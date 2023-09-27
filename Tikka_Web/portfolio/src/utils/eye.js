import { projectsArray } from "../../data/projectsArray";
import { skillsArray } from "../../data/skillsArray";

export default function eye() {
  let i = 0;
  const seeButton = document.getElementsByTagName("img");
  const skillElements = {};

  skillsArray.forEach((skill) => {
    const element = document.getElementById(skill.skill);
    if (element) {
      skillElements[skill.skill] = element;
    }
  });

  for (let i = 0; i < seeButton.length; i++) {
    if (seeButton[i].id === "eyeButton") {
      console.log(seeButton[i]);
      seeButton[i].addEventListener("click", () => {

        let buttonProject = seeButton[i].alt;

        projectsArray.forEach((project) => {
          if (buttonProject === project.project) {
            let projectSkills = project.skills
            projectSkills.forEach((skill) => {
              console.log(skillElements[skill]);
              skillElements[skill].className = "rounded-lg p-6 shadow-lg shadow-green-500 hover:shadow-custom-blue";
              setTimeout(() => {skillElements[skill].className = "rounded-lg p-6 shadow-md shadow-custom-red hover:shadow-custom-blue"}, 5000)
            })

          }
        })
      })
    }

  }



}