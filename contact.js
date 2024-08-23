//CONTACT_SECTION
const h1 = document.querySelector("h1");
h1.textContent = "My Contacts";

const contact = document.getElementById("contact");
contact.style.display = "grid";
contact.style.justifyContent = "center";
contact.style.width = "100%";
contact.style.fontSize = "33px";
contact.style.fontWeight = "bold";
contact.style.placeItems = "center";

const orderedList = document.querySelector("ol");
// orderedList.style.gap = "10px";
orderedList.style.display = "grid";
orderedList.style.margin = "0px";
orderedList.style.padding = "0px";

const whatsappNumber = document.createElement("a");
whatsappNumber.id = "mobile";
whatsappNumber.textContent = "Number : Whatsapp(2348150672809) `🔗`";
whatsappNumber.href = "https://wa.me/+2348150672809";
whatsappNumber.style.textDecoration = "none";
whatsappNumber.style.padding = "6px";
whatsappNumber.style.border = "3px solid #a6cee5";
whatsappNumber.style.borderRadius = "24px 50px 10px 24px";
document.querySelector("ol").appendChild(whatsappNumber);

const hr = document.createElement("hr");
hr.style.background = "#b06969";
hr.style.width = "100%";
hr.style.margin = "15px 0px 0px 0px";
hr.style.height = "6px";
document.getElementById("mobile").appendChild(hr);

const email = document.createElement("a");
email.id = "mail";
email.textContent = "Email : Matanmidupe004@gmail.com `🔗`";
email.href = "https://matanmidupe004@gmail.com";
email.style.border = "3px solid #a6cee5";
email.style.borderRadius = "24px 10px 10px 24px";
email.style.padding = "6px";
email.style.textDecoration = "none";
document.querySelector("ol").appendChild(email);

const hrMiddle = document.createElement("hr");
hrMiddle.style.background = "#b06969";
hrMiddle.style.width = "100%";
hrMiddle.style.margin = "15px 0px 0px 0px";
hrMiddle.style.height = "6px";
document.getElementById("mail").appendChild(hrMiddle);

const address = document.createElement("span");
address.textContent =
  "Address : No15a Jebba-Street, 123 East Street lagos, Nigeria `🔗`";
address.id = "location";
address.style.textDecoration = "none";
address.style.padding = "6px";
address.style.border = "3px solid #a6cee5";
address.style.borderRadius = "24px 10px 25px 24px";
document.querySelector("ol").appendChild(address);

const hrBottom = document.createElement("hr");
hrBottom.style.background = "#b06969";
hrBottom.style.margin = "15px 0px 0px 0px";
hrBottom.style.width = "100%";
hrBottom.style.height = "6px";
document.getElementById("location").appendChild(hrBottom);
