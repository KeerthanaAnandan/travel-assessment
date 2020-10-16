let questions = [
  {
    id: 1,
    question: "1.Your luggage consists of",
    answer: "auditory",
    options: [
      "Accessories, iPhone, magazine",
      "A book, swimsuit, and sunglasses",
      "A pair of hiking boots, Jackets and backpack",
    ],
  },
  {
    id: 2,
    question: "After a long day of work, you usually:",
    answer: "visual",
    options: [
      "Cook dinner and watch your favourite movie",
      "Study a new language or watch a documentary",
      "Get dressed for your sports game or workout",
    ],
  },
  {
    id: 3,
    question: "On vacation, you are most likely to read",
    answer: "audi",
    options: [
      "A novel",
      "A book to prepare me for the trip ahead",
      "Travel Journeys of a Lifetime",
    ],
  },
  {
    id: 4,
    question:
      "You wake up one morning, pack a bag, and fly anywhere in the world, where do you go?",
    answer: "audi",
    options: [
      "Maui to take a refreshing stroll along the seaside streets of Lahaina and the stunning beaches of Kaanapli",
      "Alaska to take a glacier tour, enjoy nature and find mysterious petroglyphs",
      "Petra which is an entire city carved out of a stone canyon, built by an ancient Arab civilization.",
    ],
  },
  {
    id: 5,
    question:
      "You’re on vacation and it’s late. You still haven’t eaten dinner so you:",
    answer: "Central Processing Unit",
    options: [
      "Head back to your room and order room service",
      "Ask a local to suggest an authentic ethnic restaurant",
      "Find the busiest restaurant and take a seat at the bar",
    ],
  },
  {
    id: 6,
    question: "On vacation, you would rather:",
    answer: "audi",
    options: [
      "Enjoy an afternoon at the spa in the Bahamas",
      "Explore the cobblestoned streets of old villages in Prague",
      "Whitewater raft in Costa Rica",
    ],
  },
  {
    id: 7,
    question: "To enjoy the outdoors, you:",
    answer: "audi",
    options: [
      "Socialize in Central Park",
      "Enjoy a coffee on a patio in Venice",
      "Go skiing / snowboarding to Whistler",
    ],
  },
  {
    id: 8,
    question: "You’re on vacation. Where do you stay?",
    answer: "Central Processing Unit",
    options: [
      "At an all-inclusive resort",
      "I find a boutique hotel or local bed and breakfast",
      "Nowhere specific. I go with the flow",
    ],
  },
  {
    id: 9,
    question: "What transportation would you rather have in your vacation?",
    answer: "audi",
    options: [
      "Anything arranged by the hotel",
      "Local driver",
      "When I get there, I will see what I find",
    ],
  },
  {
    id: 10,
    question: "Where would you rather live?",
    answer: "Central Processing Unit",
    options: [
      "Nothing compares to my country",
      "Europe. The culture is my thing",
      "Anywhere exotic",
    ],
  },
];

let question_count = 0;
let onepoints = 0;
let twopoints = 0;
let teepoints = 0;
let Max_Questions = 10;

window.onload = function () {
  show(question_count);
  sessionStorage.clear();
};

function next() {
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  //if (user_answer == questions[question_count].answer) {
  if (
    user_answer === "Accessories, iPhone, magazine" ||
    user_answer === "Cook dinner and watch your favourite movie" ||
    user_answer === "A novel" ||
    user_answer ===
      "Maui to take a refreshing stroll along the seaside streets of Lahaina and the stunning beaches of Kaanapli" ||
    user_answer === "Head back to your room and order room service" ||
    user_answer === "Enjoy an afternoon at the spa in the Bahamas" ||
    user_answer === "At an all-inclusive resort" ||
    user_answer === "Socialize in Central Park" ||
    user_answer === "Anything arranged by the hotel" ||
    user_answer === "Nothing compares to my country"
  ) {
    onepoints += 1;
  } else if (
    user_answer === "A book, swimsuit, and sunglasses" ||
    user_answer === "Study a new language or watch a documentary" ||
    user_answer === "A book to prepare me for the trip ahead" ||
    user_answer ===
      "Alaska to take a glacier tour, enjoy nature and find mysterious petroglyphs" ||
    user_answer === "Ask a local to suggest an authentic ethnic restaurant" ||
    user_answer ===
      "Explore the cobblestoned streets of old villages in Prague" ||
    user_answer === "Enjoy a coffee on a patio in Venice" ||
    user_answer === "I find a boutique hotel or local bed and breakfast" ||
    user_answer === "Local driver" ||
    user_answer === "Europe. The culture is my thing"
  ) {
    twopoints += 1;
  } else if (
    user_answer === "A pair of hiking boots, Jackets and backpack" ||
    user_answer === "Get dressed for your sports game or workout" ||
    user_answer === "Travel Journeys of a Lifetime" ||
    user_answer ===
      "Petra which is an entire city carved out of a stone canyon, built by an ancient Arab civilization." ||
    user_answer === "Find the busiest restaurant and take a seat at the bar" ||
    user_answer === "Whitewater raft in Costa Rica" ||
    user_answer === "Go skiing / snowboarding to Whistler" ||
    user_answer === "Nowhere specific. I go with the flow" ||
    user_answer === "When I get there, I will see what I find" ||
    user_answer === "Anywhere exotic"
  ) {
    teepoints += 1;
  }
  sessionStorage.setItem("onepoints", onepoints);
  sessionStorage.setItem("twopoints", twopoints);
  sessionStorage.setItem("teepoints", teepoints);

  question_count++;
  show(question_count);
  toggleActive();
  //Update the progress Bar

  const progressBarFull = document.getElementById("progressBarFull");

  progressBarFull.style.width = ` ${(question_count / Max_Questions) * 100}%`;
}

function show(count) {
  //progress text
  const progressText = document.getElementById("progressText");

  progressText.innerText = `Question ${count + 1}/${Max_Questions}`;

  let question = document.getElementById("questions");
  let [first, second, third] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
let usertimehide = document.querySelector(".quiz_timer");
usertimehide.style.display = "none";
