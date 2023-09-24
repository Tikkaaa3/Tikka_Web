export default function aboutMe() {
  const universities = ["Uniwersytet WSB Merito Wrocław", "Wrocław University of Science and Technology"];
  const certificates = [
    {
      title: "Introduction to Cloud Computing",
      url:"https://coursera.org/verify/2HTCV7PBQEHN"
    },
    {
      title: "Introduction to Web Development with HTML, CSS, JavaScript",
      url:"https://www.coursera.org/account/accomplishments/certificate/6VF5GRST7STX"
    },
    {
      title: "Getting Started with Git and GitHub",
      url:"https://www.coursera.org/account/accomplishments/certificate/N2U2HGZW3VL5"
    },
    {
      title: "Developing Front-End Apps with React",
      url:"https://coursera.org/verify/3F2JFFS9PJZZ"
    },
    {
      title: "Developing Back-End Apps with Node.js and Express",
      url:"https://coursera.org/verify/F49F7Y298A98"
    },
    {
      title: "Python for Data Science, AI & Development",
      url:"https://coursera.org/verify/NJKZL2KPZAPA"
    },
    {
      title: "Python Project for AI & Application Development",
      url:"https://coursera.org/verify/VS2D4YV36BCX"
    },
    {
      title: "Developing Applications with SQL, Databases, and Django",
      url:"https://coursera.org/verify/BBUJYQ2MZPWC"
    },
    {
      title: "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
      url:"https://coursera.org/verify/XM2NB4E9JAPN"
    },
    {
      title: "Application Development using Microservices and Serverless",
      url:"https://coursera.org/verify/AHUWCGMVZM3W"
    },
    {
      title: "Full Stack Cloud Development Capstone Project",
      url:"https://coursera.org/verify/FKHEPLR8FN3M"
    },
    {
      title: "Full Stack Software Developer Assessment",
      url:"https://coursera.org/verify/UH934B55V3Q9"
    },
    {
      title: "IBM Full Stack Software Developer",
      url:"https://coursera.org/verify/professional-cert/ZN38VK3BBNP2"
    }
  ];

  const aboutParagraph = `I am a motivated university student pursuing an IT degree with a
  working knowledge in programming languages and web
  development technologies. I have experience working with HTML,
  CSS, JavaScript, React.js, Node.js, Python, Django, Flask, and other
  frameworks and libraries. I have also worked with Git and GitHub
  for version control and collaborative software development,
  ensuring efficient teamwork and streamlined code management.
  Moreover, I am familiar with cloud computing concepts, such as
  SaaS, PaaS, IaaS, Hybrid Cloud, and Cloud Native applications,
  demonstrating an awareness of modern infrastructure and
  adaptability to emerging technologies.`;

  const appContainer = document.getElementById("aboutMe");

  // Create a div for the list of universities and certificates
  const universitiesDiv = document.createElement("div");
  universitiesDiv.className = "py-4";

  const certificatesDiv = document.createElement("div");
  certificatesDiv.className = "py-4";

  // Create an unordered list element
  const universitiesList = document.createElement("ul");
  universitiesList.className = "list-disc list-inside";

  const certificatesList = document.createElement("ul");
  certificatesList.className = "list-disc list-inside";

  // Loop through the education array and create list items for each university
  universities.forEach((university) => {
    const listItem = document.createElement("li");
    listItem.textContent = university;
    universitiesList.appendChild(listItem);
  });

  certificates.forEach(({title, url}) => {
    const certificateLink = document.createElement("a");

    certificateLink.href = url;
    certificateLink.target = "_blank";
    const listItem = document.createElement("li");
    listItem.textContent = title;
    listItem.className = "hover:font-bold";
    certificateLink.appendChild(listItem);
    certificatesList.appendChild(certificateLink);
  });

  // Append the list to the universities div
  universitiesDiv.appendChild(universitiesList);
  certificatesDiv.appendChild(certificatesList);

  const education = universitiesDiv.innerHTML;
  const certification = certificatesDiv.innerHTML;

  appContainer.innerHTML += `
  <div class="mb-4">
  <div class="w-full h-full lg:w-96 lg:h-96 2xl:w-120 2xl:h-120 overflow-hidden">
    <img src="/desktop.jpg" alt="JavaScript Logo" class="object-cover w-full h-full" />
  </div>
</div>

<div class="lg:ml-24">
  <h1 class="text-4xl mb-6 text-white font-bold">About Me</h1>
  <p class="text-white xs:text-lg 2xl:text-xl">${aboutParagraph}</p>
  <button
    class="pt-4 pl-2 pb-2 pr-2 text-xl font-bold hover:border-b-4 border-custom-light-red text-white">Education</button>
  <button
    class="pt-4 pl-2 pb-2 pr-2 text-xl font-bold hover:border-b-4 border-custom-light-red text-white">Certification</button>
  ${education}  ${certification}
</div>
  `
}