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

function generate() {
    const zain = document.querySelectorAll(".input-val");
    //
    document.getElementById("pInformation").style.display = "none";
    document.getElementById("obj").style.display = "none";
    document.getElementById("edu").style.display = "none";
    document.getElementById("skill").style.display = "none";

    let inputValues = [];
    zain.forEach((input) => {
        inputValues.push(input.value);
    });

    document.write(`Name:${inputValues}`);
    
}

