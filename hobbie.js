// HOBBIES_BODY_SECTION
const body = document.querySelector("body");
body.style.overflow = "none";
body.style.background = "#d9d9d9";

//HOBBIES_SECTION
const h1 = document.createElement("h1");
h1.textContent = "My Hobbies";
h1.style.display = "grid";
h1.style.margin = "20.44px";
document.getElementById("hobbies").appendChild(h1);

const h1Line = document.createElement("hr");
h1Line.style.background = "#557d94";
h1Line.style.width = "100%";
h1Line.style.margin = "0px 0px 0px 0px";
h1Line.style.height = "4px";
document.querySelector("h1").appendChild(h1Line);

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
hr1.style.margin = "0px 0px 10px 0px";
hr1.style.height = "5px";
document.getElementById("list1").appendChild(hr1);

const list2 = document.createElement("li");
list2.id = "list2";
list2.textContent = "I love reading 📚.";
document.getElementById("hobbiesItems").appendChild(list2);

const hr2 = document.createElement("hr");
hr2.style.background = "#b06969";
hr2.style.width = "100%";
hr2.style.margin = "0px 0px 10px 0px";
hr2.style.height = "5px";
document.getElementById("list2").appendChild(hr2);

const list3 = document.createElement("li");
list3.textContent = "I love listening to Musics🎶.";
document.getElementById("hobbiesItems").appendChild(list3);

const hr3 = document.createElement("hr");
list3.id = "list3";
hr3.style.background = "#b06969";
hr3.style.width = "100%";
hr3.style.margin = "0px 0px 10px 0px";
hr3.style.height = "5px";
document.getElementById("list3").appendChild(hr3);

const list4 = document.createElement("li");
list4.textContent = "I love listening to Advices 💬, and";
document.getElementById("hobbiesItems").appendChild(list4);

const hr4 = document.createElement("hr");
list4.id = "list4";
hr4.style.background = "#b06969";
hr4.style.width = "100%";
hr4.style.margin = "0px 0px 10px 0px";
hr4.style.height = "5px";
document.getElementById("list4").appendChild(hr4);

const list5 = document.createElement("li");
list5.textContent = "And most importantly, I love writing CODES 💻👨🏼‍💻";
document.getElementById("hobbiesItems").appendChild(list5);
