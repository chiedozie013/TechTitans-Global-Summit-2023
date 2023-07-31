const btn = document.querySelector(".hamburger");
const showHamburger = document.querySelector(".showHamburger");
const menuLinks = document.querySelectorAll(".menu-links");
const closeBtn = document.querySelector(".close-cross");
// Speakers
const speakers = document.querySelector(".speakers");
const more = document.querySelector(".more-btn");
const less = document.querySelector(".less-btn");

// Mobile Menu
function openButton() {
  showHamburger.classList.add("show-showHamburger");
}

btn.addEventListener("click", openButton);

function closeButton() {
  showHamburger.classList.remove("show-showHamburger");
}

closeBtn.addEventListener("click", closeButton);

menuLinks.forEach((link) =>
  link.addEventListener("click", () => {
    showHamburger.classList.remove("show-showHamburger");
  })
);

const mainSpeakers = [
  {
    id: 1,
    img: "./assets/images/speaker-1.png",
    name: "Yochai Benkler",
    specialization: "Spanning Artificial Intelligence",
    description:
      "Benkler is a spanning artificial intelligence specialist with over 23years of experience in the UK.",
  },
  {
    id: 2,
    img: "./assets/images/speaker-2.png",
    name: "Ayo Ogunbade",
    specialization: "Blockchain specialist and CEO dubigs",
    description:
      "Ogunbade is a blockchain specialist with over 10years of experience in the Africa.",
  },
  {
    id: 3,
    img: "./assets/images/speaker-3.png",
    name: "Anita Bricks",
    specialization: "Data Scientist and MD Swiss Bank",
    description:
      "Bricks is a data scientist with over 13years of experience in the bank spector.",
  },
  {
    id: 4,
    img: "./assets/images/speaker-4.png",
    name: "Fedalis Ayuw",
    specialization: "Artificial Intelligence",
    description:
      "Ayuw is a artificial intelligence specialist with over 15years of experience in Ghana and CEO of DGT Africa.",
  },
  {
    id: 5,
    img: "./assets/images/speaker-5.png",
    name: "Chiwendu Bankole",
    specialization: "Product Designer",
    description:
      "Bankole is a product designer with over 16years of experience in the UK and Nigeria. She's the pioneer of TT Nigeria",
  },
  {
    id: 6,
    img: "./assets/images/speaker-6.png",
    name: "Yusef Rahman",
    specialization: "Robotics",
    description:
      "Rahman is a robotics specialist with over 20years of experience in the US and beyond.",
  },
];

const speaker = function () {
  for (let index = 0; index < mainSpeakers.length; index += 1) {
    speakers.innerHTML += `
          <div class="speaker-details speaker-details-display">
              <img
                src="${mainSpeakers[index].img}"
                alt="speaker ${mainSpeakers[index].id}"
                class="speaker-img"
              />
              <div class="speaker-intro">
                <h3 class="speaker-name">${mainSpeakers[index].name}</h3>
                <h4 class="speaker-specia">
                 ${mainSpeakers[index].specialization}
                </h4>
                <div class="underline"></div>
                <p class="speaker-des">
                 ${mainSpeakers[index].description}
                </p>
              </div>
            </div>
            `;
  }
};

window.addEventListener("load", speaker);

// More button
let currentItems = 2;

more.addEventListener("click", () => {
  const moreSpeakers = [...document.querySelectorAll(".speaker-details")];

  for (let index = currentItems; index < moreSpeakers.length; index += 1) {
    moreSpeakers[index].style.display = "flex";
  }

  currentItems += 4;

  if (currentItems >= moreSpeakers.length) {
    more.style.display = "none";
    less.classList.remove("hidden");
  }
});

// Less button
less.addEventListener("click", () => {
  const moreSpeakers = [...document.querySelectorAll(".speaker-details")];

  for (let index = 2; index < moreSpeakers.length; index += 1) {
    moreSpeakers[index].style.display = "none";
  }

  currentItems -= 4;

  if (currentItems <= 2) {
    more.style.display = "flex";
    less.classList.add("hidden");
  }
});
