//CONTACT_SECTION
const contact = document.getElementById("contact");
contact.style.display = "grid";
contact.style.justifyContent = "center";
contact.style.width = "100%";
contact.style.fontSize = "33px";
contact.style.fontWeight = "bold";
contact.style.placeItems = "center";

const whatsappNumber = document.createElement("a");
whatsappNumber.textContent = "Whatsapp(2348150672809)";
whatsappNumber.href = "https://wa.me/+2348150672809";
document.querySelector("ol").appendChild(whatsappNumber);
