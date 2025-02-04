function showSection(sectionId) {
    const sections = document.querySelectorAll(".form-section");
    sections.forEach((section) => {
        if (section.id === sectionId) {
            section.style.display = "block"; // Show the selected section
        } else {
            section.style.display = "none"; // Hide all other sections
        }
    });
}

function generateResume() {
    const fullName = document.querySelector("#pInformation input[placeholder='Enter Full name']").value;
    const email = document.querySelector("#pInformation input[placeholder='Enter your Email']").value;
    const phone = document.querySelector("#pInformation input[placeholder='Enter full phone number']").value;
    const linkedIn = document.querySelector("#pInformation input[placeholder='Enter LinkedIn link']").value;
    const github = document.querySelector("#pInformation input[placeholder='Enter GitHub link']").value;
    const objective = document.querySelector("#obj textarea").value;
    const institution = document.querySelector("#edu input[placeholder='Enter institution name']").value;
    const degree = document.querySelector("#edu input[placeholder='Enter degree']").value;
    const graduationYear = document.querySelector("#edu input[placeholder='Enter year of graduation']").value;
    const skills = document.querySelector("#skill input[placeholder='Enter your skills']").value;
    
    // Create the resume content
    const resumeContent = `
        <div class="resume">
            <p><strong>FullName:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>LinkedIn:</strong> <a href="${linkedIn}" target="_blank">${linkedIn}</a></p>
            <p><strong>GitHub:</strong> <a href="${github}" target="_blank">${github}</a></p>
            <hr />
            <h2>Objective</h2>
            <p>${objective}</p>
            <hr />
            <h2>Education</h2>
            <p><strong>Institution:</strong> ${institution}</p>
            <p><strong>Degree:</strong> ${degree}</p>
            <p><strong>Year of Graduation:</strong> ${graduationYear}</p>
            <hr />
            <h2>Skills</h2>
            <p>${skills}</p>
        </div>
    `;

    // Hide all sections
    showSection(null);

    // Display the generated resume
    document.body.innerHTML = `
        <div class="container">
            <h1>Generated Resume</h1>
            ${resumeContent}
            <button class="btn" onclick="window.location.reload()">Edit Resume</button>
        </div>
    `;
}

// Initialize the first section
showSection("pInformation");


