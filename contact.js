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

const whatsappNumber = document.createElement("a");
whatsappNumber.textContent = "Number : Whatsapp(2348150672809)";
whatsappNumber.href = "https://wa.me/+2348150672809";
whatsappNumber.style.textDecoration = "none";
document.querySelector("ol").appendChild(whatsappNumber);

const email = document.createElement("a");
email.textContent = "Email : Matanmidupe004@gmail.com";
email.href = "https://matanmidupe004@gmail.com";
email.style.textDecoration = "none";
document.querySelector("ol").appendChild(email);

const address = document.createElement("span");
address.textContent =
  "address : No15a Jebba-Street, 123 East Street lagos, Nigeria";
address.style.textDecoration = "none";
document.querySelector("ol").appendChild(address);
