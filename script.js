function objective() {
    document.getElementById("pInformation").style.display = "none";
    document.getElementById("obj").style.display = "";
    document.getElementById("edu").style.display = "none";
    document.getElementById("skill").style.display = "none";
}

function info() {
    document.getElementById("pInformation").style.display = "";
    document.getElementById("obj").style.display = "none";
    document.getElementById("edu").style.display = "none";
    document.getElementById("skill").style.display = "none";
}
function edu() {
    document.getElementById("pInformation").style.display = "none";
    document.getElementById("obj").style.display = "none";
    document.getElementById("edu").style.display = "";
    document.getElementById("skill").style.display = "none";
}
function skill() {
    document.getElementById("pInformation").style.display = "none";
    document.getElementById("obj").style.display = "none";
    document.getElementById("edu").style.display = "none";
    document.getElementById("skill").style.display = "";
}

//   function generate() {
//     const zain = document.querySelectorAll(".input-val");
//     //
//     document.getElementById("pInformation").style.display = "none";
//     document.getElementById("obj").style.display = "none";
//     document.getElementById("edu").style.display = "none";
//     document.getElementById("skill").style.display = "none";

//     let inputValues = [];
//     zain.forEach((input) => {
//       inputValues.push(input.value); // Collect the value
//     });

//     document.write(`Name:${inputValues}`);
//     window.location.href="generatecv.html";
//   }

function generate() {
    const inputs = document.querySelectorAll(".input-val");
    let resumeData = {};

    inputs.forEach((input) => {
        const label = input.previousElementSibling.innerText;
        resumeData[label] = input.value;
    });

    // Save data to local storage
    localStorage.setItem("resumeData", JSON.stringify(resumeData));

    // Redirect to the new page
    window.location.href = "generatecv.html";
}