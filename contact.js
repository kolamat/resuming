//CONTACT_SECTION

//CONTACT_BODY_SECTION
const body = document.querySelector("body");
body.style.overflow = "none";
body.style.background = "#d9d9d9";

// THE HEADING
const h1 = document.querySelector("h1");
h1.textContent = "My Contacts";
h1.style.display = "flex";

// THE MAIN CONTAINER
const contact = document.getElementById("contact");
contact.style.display = "grid";
contact.style.justifyContent = "center";
contact.style.width = "100%";
contact.style.fontSize = "33px";
contact.style.fontWeight = "bold";
contact.style.placeItems = "center";

//THE INFO CONTAINER
const orderedList = document.querySelector("ol");
orderedList.style.display = "grid";
orderedList.style.margin = "0px";
orderedList.style.padding = "0px";

// WHATSAPP_NUMBER
const whatsappNumber = document.createElement("a");
whatsappNumber.id = "mobile";
whatsappNumber.textContent = "Number : Whatsapp(2348150672809) `🔗`";
whatsappNumber.href = "https://wa.me/+2348150672809";
whatsappNumber.style.textDecoration = "none";
whatsappNumber.style.padding = "6px";
whatsappNumber.style.borderRadius = "50px 50px 5px 5px ";
whatsappNumber.style.borderBottom = "5px solid #000000";
document.querySelector("ol").appendChild(whatsappNumber);

// GMAIL
const email = document.createElement("a");
email.id = "mail";
email.textContent = "Email : Matanmidupe004@gmail.com `🔗`";
email.href = "https://matanmidupe004@gmail.com";
email.style.borderRadius = "24px 10px 10px 24px";
email.style.padding = "6px";
email.style.textDecoration = "none";
email.style.borderRadius = "50px 50px 5px 5px ";
email.style.borderBottom = "5px solid #000000";
document.querySelector("ol").appendChild(email);

//OUTLOOK_MAIL
const outLook = document.createElement("a");
outLook.id = "outlook";
outLook.textContent = "OutLook : kolade2001@oulook.com `🔗`";
outLook.href = "https://kolade2001@oulook.com";
outLook.style.borderRadius = "24px 10px 10px 24px";
outLook.style.padding = "6px";
outLook.style.textDecoration = "none";
outLook.style.borderRadius = "50px 50px 5px 5px ";
outLook.style.borderBottom = "5px solid #000000";
document.querySelector("ol").appendChild(outLook);

// ADDRESS
const address = document.createElement("span");
address.textContent =
  "Address : No15a Jebba-Street, 123 East Street lagos, Nigeria `🔗`";
address.id = "location";
address.style.textDecoration = "none";
address.style.padding = "6px";
outLook.style.borderBottom = "5px solid #000000";
address.style.borderRadius = "24px 10px 25px 24px";
document.querySelector("ol").appendChild(address);
