const span1 = document.getElementById("span1");
span1.style.display = "flex";
span1.style.alignItems = "center";
span1.style.margin = "10px 0px";
span1.style.justifyContent = "space-between";

const span2 = document.getElementById("span2");
span2.style.display = "flex";
span2.style.alignItems = "center";
span2.style.margin = "10px 0px";
span2.style.justifyContent = "space-between";

const primary = document.createElement("li");
primary.textContent = "Ago-Egba Nursery and Primary School";
document.getElementById("educations").appendChild(primary);

const juniorSecondary = document.createElement("li");
juniorSecondary.textContent = "Denton Junior Grammar School";
document.getElementById("educations").appendChild(juniorSecondary);

const seniorSecondary = document.createElement("li");
seniorSecondary.textContent = "Lagos-City Senior Secondary School";
document.getElementById("educations").appendChild(seniorSecondary);

const higherEduation = document.createElement("li");
higherEduation.textContent =
  "Ordinary national diplomal (OND) 1, computer Engineer - Yaba College of Technology (2023-2025)";
document.getElementById("educations").appendChild(higherEduation);
