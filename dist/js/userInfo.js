let user_onepoints = sessionStorage.getItem("onepoints");
let user_twopoints = sessionStorage.getItem("twopoints");
let user_teepoints = sessionStorage.getItem("teepoints");

let points = document.querySelector("span.points");
let msg = document.querySelector(".msghere").innerHTML;

if (user_onepoints > user_twopoints && user_onepoints > user_teepoints) {
  console.log("traditional");
  points.innerHTML = "Traditional";
  document.querySelector(".msghere").innerHTML =
    "You are usually looking to unwind, disengage and you are not interested so much in local flavour or local customs and the culture. You love to simply sit on the beach and relax, read a book, play golf or just rest. You are not opposed to foreign locations but you are not interested in being immersed deeply in a new culture.You may just want to recharge your batteries before coming back home to your daily routine.";
}
if (user_twopoints > user_onepoints && user_twopoints > user_teepoints) {
  console.log("sec");
  points.innerHTML = "The Cultural Traveler";
  document.querySelector(".msghere").innerHTML =
    "You are looking for meaning within other cultures. Inquisitive and inquiring, you get beneath the exterior of strange new worlds and seek to get the most learning experience out of a destination as possible. You are willing to risk in order to gain experience, you will have deep desires to engage a different culture and find deeper meaning within it. You love to be in the outdoors and connect with nature and learn as much as you can from your travels.";
}
if (user_teepoints > user_twopoints && user_teepoints > user_onepoints) {
  console.log("thee");
  points.innerHTML = "The Experimental Adventurer";
  document.querySelector(".msghere").innerHTML =
    "You are not only willing to try new things but almost actively seeks them. You are looking for meaning outside your present existence and are willing to try every destination rather than not travel at all. You find meaning in a new culture and keep looking even deeper in order to engage in it long term . You are always thinking about travelling , may be back home pining for that favourite city or country, favourite beach or mountain trip and actively saves for another trip to the same spot or even a new destination as an experiment. You love to try new things, new foods , new places , new activities, you are all inn.";
}

sessionStorage.clear();
