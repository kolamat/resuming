//HOBBIES_SECTION
const h1 = document.createElement("h1");
h1.textContent = "My Hobbies";
h1.style.display = "flex";
h1.style.margin = "20.44px";
document.getElementById("hobbies").appendChild(h1);

const hobbies = document.getElementById("hobbies");
hobbies.style.display = "grid";
hobbies.style.width = "100%";
hobbies.style.fontSize = "40px";
hobbies.style.fontWeight = "normal";
hobbies.style.placeItems = "center";

const orderedLst = document.createElement("ol");
orderedLst.id = "hobbiesItems";
orderedLst.style.margin = "16px 0px";
document.getElementById("hobbies").appendChild(orderedLst);

const list1 = document.createElement("li");
list1.id = "list1";
list1.textContent = "I love Playing Video Games 🎮.";
document.getElementById("hobbiesItems").appendChild(list1);

const hr1 = document.createElement("hr");
hr1.style.background = "#b06969";
hr1.style.width = "100%";
hr1.style.margin = "15px 0px 0px 0px";
hr1.style.height = "6px";
document.getElementById("list1").appendChild(hr1);

const list2 = document.createElement("li");
list2.id = "list2";
list2.textContent = "I love reading 📚.";
document.getElementById("hobbiesItems").appendChild(list2);

const hr2 = document.createElement("hr");
hr2.style.background = "#b06969";
hr2.style.width = "100%";
hr2.style.margin = "15px 0px 0px 0px";
hr2.style.height = "6px";
document.getElementById("list2").appendChild(hr2);

const list3 = document.createElement("li");
list3.textContent = "I love listening to Musics🎶.";
document.getElementById("hobbiesItems").appendChild(list3);

const hr3 = document.createElement("hr");
list3.id = "list3";
hr3.style.background = "#b06969";
hr3.style.width = "100%";
hr3.style.margin = "15px 0px 0px 0px";
hr3.style.height = "6px";
document.getElementById("list3").appendChild(hr3);

const list4 = document.createElement("li");
list4.textContent = "I love listening to Advices 💬, and";
document.getElementById("hobbiesItems").appendChild(list4);

const hr4 = document.createElement("hr");
list4.id = "list4";
hr4.style.background = "#b06969";
hr4.style.width = "100%";
hr4.style.margin = "15px 0px 0px 0px";
hr4.style.height = "6px";
document.getElementById("list4").appendChild(hr4);

const list5 = document.createElement("li");
list5.textContent = "And most importantly, I love writing CODES 💻👨🏼‍💻";
document.getElementById("hobbiesItems").appendChild(list5);
