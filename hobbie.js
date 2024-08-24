//HOBBIES_SECTION
const h1 = document.createElement("h1");
h1.textContent = "My Hobbies";
h1.style.display = "flex";
h1.style.margin = "20.44px";
document.getElementById("hobbies").appendChild(h1);

const hobbies = document.getElementById("hobbies");
hobbies.style.display = "grid";
hobbies.style.marginLeft = "auto";
hobbies.style.marginRight = "auto";
hobbies.style.width = "100%";
hobbies.style.fontSize = "40px";
hobbies.style.fontWeight = "normal";
hobbies.style.placeItems = "center";

const orderedLst = document.createElement("ol");
orderedLst.id = "hobbiesItems";
orderedLst.style.margin = "16px 0px";
document.getElementById("hobbies").appendChild(orderedLst);

const list1 = document.createElement("li");
list1.textContent = "I love Playing Video Games 🎮.";
document.getElementById("hobbiesItems").appendChild(list1);
const list2 = document.createElement("li");
list2.textContent = "I love reading 📚.";
document.getElementById("hobbiesItems").appendChild(list2);
const list3 = document.createElement("li");
list3.textContent = "I love listening to Advices 💬, and";
document.getElementById("hobbiesItems").appendChild(list3);
const list4 = document.createElement("li");
list4.textContent = "I love listening to Musics🎶.";
document.getElementById("hobbiesItems").appendChild(list4);
