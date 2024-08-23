//CONTACT_SECTION
const contact = document.getElementById("contact");
contact.style.display = "grid";
contact.style.justifyContent = "center";
contact.style.width = "100%";
contact.style.fontSize = "33px";
contact.style.fontWeight = "bold";
contact.style.placeItems = "center";

const orderedList = document.querySelector("ol");
orderedList.style.gap = "10px";
orderedList.style.display = "grid";
orderedList.style.padding = "0px";

const whatsappNumber = document.createElement("a");
whatsappNumber.textContent = "Number : Whatsapp(2348150672809)";
whatsappNumber.href = "https://wa.me/+2348150672809";
whatsappNumber.style.textDecoration = "none";
document.querySelector("ol").appendChild(whatsappNumber);

const hr = document.createElement("hr");
hr.style.background = "#b06969";
hr.style.width = "100%";
hr.style.margin = "15px";
hr.style.height = "10px";
document.querySelector("ol").appendChild(hr);

const email = document.createElement("a");
email.textContent = "Email : Matanmidupe004@gmail.com";
email.href = "https://matanmidupe004@gmail.com";
email.style.textDecoration = "none";
document.querySelector("ol").appendChild(email);

const hrMiddle = document.createElement("hr");
hrMiddle.style.background = "#b06969";
hrMiddle.style.width = "100%";
hrMiddle.style.margin = "15px";
hrMiddle.style.height = "10px";
document.querySelector("ol").appendChild(hrMiddle);

const address = document.createElement("span");
address.textContent =
  "address : No15a Jebba-Street, 123 East Street lagos, Nigeria";
address.style.textDecoration = "none";
document.querySelector("ol").appendChild(address);

const hrBottom = document.createElement("hr");
hrBottom.style.background = "#b06969";
hrBottom.style.margin = "15px";
hrBottom.style.width = "100%";
hrBottom.style.height = "10px";
document.querySelector("ol").appendChild(hrBottom);
