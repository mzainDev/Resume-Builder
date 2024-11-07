function showForm(formId) {
  const forms = document.querySelectorAll(".form-section");
  forms.forEach((form) => (form.style.display = "none"));
  document.getElementById(formId).style.display = "block";
}

function saveData(type) {
  let data = {};
  switch (type) {
    case "personal":
      data = {
        fullName: document.getElementById("fullName").value,
        contact: document.getElementById("contact").value,
        address: document.getElementById("address").value,  
      };
      localStorage.setItem("personal", JSON.stringify(data));
      break;

      case "objective":
      data = { objective: document.getElementById("objective").value };
      localStorage.setItem("objective", JSON.stringify(data));
      break;
    case "education":
      data = {
        degree: document.getElementById("degree").value,
        institution: document.getElementById("institution").value,
        years: document.getElementById("years").value,
      };
      localStorage.setItem("education", JSON.stringify(data));
      break;
    case "skills":
      data = { skills: document.getElementById("skills").value.split(",") };
      localStorage.setItem("skills", JSON.stringify(data));
      break;
  }
  alert(`${type} information saved!`);
}

function generateResume() {
  const personal = JSON.parse(localStorage.getItem("personal")) || {};
  const objective = JSON.parse(localStorage.getItem("objective")) || {};
  const education = JSON.parse(localStorage.getItem("education")) || {};
  const skills = JSON.parse(localStorage.getItem("skills")) || {};

  const resume = `
        <h2>${personal.fullName || ""}</h2>
        <p><strong>Contact:</strong> ${personal.contact || ""}</p>
        <p><strong>Address:</strong> ${personal.address || ""}</p>
        <h3>Objective</h3>
        <p>${objective.objective || ""}</p>
        <h3>Education</h3>
        <p><strong>Degree:</strong> ${education.degree || ""}</p>
        <p><strong>Institution:</strong> ${education.institution || ""}</p>
        <p><strong>Years Attended:</strong> ${education.years || ""}</p>
        <h3>Skills</h3>
        <ul>${
          skills.skills
            ? skills.skills.map((skill) => `<li>${skill.trim()}</li>`).join("")
            : ""
        }</ul>
    `;
  document.getElementById("resumeOutput").innerHTML = resume;
}

