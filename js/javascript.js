document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll(".nav-link");

  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      var targetId = this.getAttribute("href").substring(1);
      var targetElement = document.getElementById(targetId);

      var offset = targetElement.offsetTop;
      var windowHeight = window.innerHeight;
      var scrollPosition = offset - windowHeight / 2 + 250;

      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    });
  });
});

let btn_show = document.getElementById("btn-show");
let img_container = document.querySelector(".img-container");
let btn_contai = document.querySelector(".btn-contai");

btn_show.onclick = function () {
  btn_show.classList.remove("flex");
  btn_show.classList.add("hidden");
  btn_contai.classList.add("hidden");
  img_container.innerHTML += "<img src='./image/102825526_o.jpeg' alt=''>";
  img_container.innerHTML += "<img src='./image/102825526_o.jpeg' alt=''>";
  img_container.innerHTML += "<img src='./image/102825526_o.jpeg' alt=''>";
  img_container.innerHTML += "<img src='./image/102825526_o.jpeg' alt=''>";
};
let INFORMATION = document.getElementById("INFORMATION");
let localisation = document.getElementById("localisation");
let tout_information = document.querySelector(".tout-information");
let tout_localisation = document.querySelector(".tout-localisation");

INFORMATION.onclick = function () {
  INFORMATION.classList.add("appuyer");
  INFORMATION.classList.remove("bg");
  localisation.classList.remove("appuyer");
  localisation.classList.add("bg");
  tout_information.classList.add("block");
  tout_information.classList.remove("hidden");
  tout_localisation.classList.remove("block");
  tout_localisation.classList.add("hidden");
};
localisation.onclick = function () {
  localisation.classList.add("appuyer");
  localisation.classList.remove("bg");
  INFORMATION.classList.remove("appuyer");
  INFORMATION.classList.add("bg");
  tout_localisation.classList.add("block");
  tout_localisation.classList.remove("hidden");
  tout_information.classList.remove("block");
  tout_information.classList.add("hidden");
};

let Open = document.getElementById("Open");
let Close = document.getElementById("Close");
let cont_nav = document.querySelector(".cont-nav");

Close.onclick = function () {
  cont_nav.classList.add("hidden");
  cont_nav.classList.remove("flex");
  Open.classList.remove("hidden");
};
Open.onclick = function () {
  cont_nav.classList.remove("hidden");
  cont_nav.classList.add("flex");
  Open.classList.remove("hidden");
};

window.addEventListener("load", verifyWidth);
window.addEventListener("resize", verifyWidth);

function verifyWidth() {
  if (innerWidth > 635) {
    Open.classList.add("hidden");
    cont_nav.classList.add("flex");
    Close.classList.add("hidden");
  } else {
    Close.classList.remove("hidden");
    cont_nav.classList.remove("flex");
    Open.classList.remove("hidden");
  }
}

let Agriculture = document.getElementById("Agriculture");
let Pêche = document.getElementById("Pêche");
let Tourisme = document.getElementById("Tourisme");
let Industrie = document.getElementById("Industrie");
let Artisanat = document.getElementById("Artisanat");
let Culture = document.getElementById("Culture");

let cont_Agriculture = document.querySelector(".cont-Agriculture");
let cont_Pêche = document.querySelector(".cont-Pêche");
let cont_Tourisme = document.querySelector(".cont-Tourisme");
let cont_Industrie = document.querySelector(".cont-Industrie");
let cont_Artisanat = document.querySelector(".cont-Artisanat");
let cont_culture = document.querySelector(".cont-culture");

Agriculture.addEventListener("click", function () {
  Agriculture.classList.add("bg2");
  Agriculture.classList.remove("bg");
  Pêche.classList.add("bg");
  Pêche.classList.remove("bg2");
  Tourisme.classList.add("bg");
  Tourisme.classList.remove("bg2");
  Industrie.classList.add("bg");
  Industrie.classList.remove("bg2");
  Artisanat.classList.add("bg");
  Artisanat.classList.remove("bg2");
  Culture.classList.add("bg");
  Culture.classList.remove("bg2");
  ////////
  cont_Agriculture.classList.add("flex");
  cont_Agriculture.classList.remove("hidden");
  cont_Pêche.classList.add("hidden");
  cont_Pêche.classList.remove("flex");
  cont_Tourisme.classList.add("hidden");
  cont_Tourisme.classList.remove("flex");
  cont_Industrie.classList.remove("flex");
  cont_Industrie.classList.add("hidden");
  cont_Artisanat.classList.remove("flex");
  cont_Artisanat.classList.add("hidden");
  cont_culture.classList.add("hidden");
});

Pêche.addEventListener("click", function () {
  Pêche.classList.add("bg2");
  Pêche.classList.remove("bg");
  Agriculture.classList.add("bg");
  Agriculture.classList.remove("bg2");
  Tourisme.classList.add("bg");
  Tourisme.classList.remove("bg2");
  Industrie.classList.add("bg");
  Industrie.classList.remove("bg2");
  Artisanat.classList.add("bg");
  Artisanat.classList.remove("bg2");
  Culture.classList.add("bg");
  Culture.classList.remove("bg2");
  ////////
  cont_Agriculture.classList.remove("flex");
  cont_Agriculture.classList.add("hidden");
  cont_Pêche.classList.remove("hidden");
  cont_Pêche.classList.add("flex");
  cont_Tourisme.classList.add("hidden");
  cont_Tourisme.classList.remove("flex");
  cont_Industrie.classList.remove("flex");
  cont_Industrie.classList.add("hidden");
  cont_Artisanat.classList.remove("flex");
  cont_Artisanat.classList.add("hidden");
  cont_culture.classList.add("hidden");
});

Tourisme.addEventListener("click", function () {
  Tourisme.classList.add("bg2");
  Tourisme.classList.remove("bg");
  Pêche.classList.add("bg");
  Pêche.classList.remove("bg2");
  Agriculture.classList.add("bg");
  Agriculture.classList.remove("bg2");
  Industrie.classList.add("bg");
  Industrie.classList.remove("bg2");
  Artisanat.classList.add("bg");
  Artisanat.classList.remove("bg2");
  Culture.classList.add("bg");
  Culture.classList.remove("bg2");
  ////////
  cont_Tourisme.classList.add("flex");
  cont_Tourisme.classList.remove("hidden");
  cont_Pêche.classList.add("hidden");
  cont_Pêche.classList.remove("flex");
  cont_Agriculture.classList.add("hidden");
  cont_Agriculture.classList.remove("flex");
  cont_Industrie.classList.remove("flex");
  cont_Industrie.classList.add("hidden");
  cont_Artisanat.classList.remove("flex");
  cont_Artisanat.classList.add("hidden");
  cont_culture.classList.add("hidden");
});

Industrie.addEventListener("click", function () {
  Industrie.classList.add("bg2");
  Industrie.classList.remove("bg");
  Pêche.classList.add("bg");
  Pêche.classList.remove("bg2");
  Tourisme.classList.add("bg");
  Tourisme.classList.remove("bg2");
  Agriculture.classList.add("bg");
  Agriculture.classList.remove("bg2");
  Artisanat.classList.add("bg");
  Artisanat.classList.remove("bg2");
  Culture.classList.add("bg");
  Culture.classList.remove("bg2");
  ////////
  cont_Industrie.classList.add("flex");
  cont_Industrie.classList.remove("hidden");
  cont_Pêche.classList.add("hidden");
  cont_Pêche.classList.remove("flex");
  cont_Tourisme.classList.add("hidden");
  cont_Tourisme.classList.remove("flex");
  cont_Agriculture.classList.remove("flex");
  cont_Agriculture.classList.add("hidden");
  cont_Artisanat.classList.remove("flex");
  cont_Artisanat.classList.add("hidden");
  cont_culture.classList.add("hidden");
});

Artisanat.addEventListener("click", function () {
  Artisanat.classList.add("bg2");
  Artisanat.classList.remove("bg");
  Pêche.classList.add("bg");
  Pêche.classList.remove("bg2");
  Tourisme.classList.add("bg");
  Tourisme.classList.remove("bg2");
  Industrie.classList.add("bg");
  Industrie.classList.remove("bg2");
  Agriculture.classList.add("bg");
  Agriculture.classList.remove("bg2");
  Culture.classList.add("bg");
  Culture.classList.remove("bg2");
  ////////
  cont_Artisanat.classList.add("flex");
  cont_Artisanat.classList.remove("hidden");
  cont_Pêche.classList.add("hidden");
  cont_Pêche.classList.remove("flex");
  cont_Tourisme.classList.add("hidden");
  cont_Tourisme.classList.remove("flex");
  cont_Industrie.classList.remove("flex");
  cont_Industrie.classList.add("hidden");
  cont_Agriculture.classList.remove("flex");
  cont_Agriculture.classList.add("hidden");
  cont_culture.classList.add("hidden");
});

Culture.addEventListener("click", function () {
  Culture.classList.add("bg2");
  Culture.classList.remove("bg");
  Pêche.classList.add("bg");
  Pêche.classList.remove("bg2");
  Tourisme.classList.add("bg");
  Tourisme.classList.remove("bg2");
  Industrie.classList.add("bg");
  Industrie.classList.remove("bg2");
  Artisanat.classList.add("bg");
  Artisanat.classList.remove("bg2");
  Agriculture.classList.add("bg");
  Agriculture.classList.remove("bg2");
  ////////
  cont_Agriculture.classList.remove("flex");
  cont_Agriculture.classList.add("hidden");
  cont_Pêche.classList.add("hidden");
  cont_Pêche.classList.remove("flex");
  cont_Tourisme.classList.add("hidden");
  cont_Tourisme.classList.remove("flex");
  cont_Industrie.classList.remove("flex");
  cont_Industrie.classList.add("hidden");
  cont_Artisanat.classList.remove("flex");
  cont_Artisanat.classList.add("hidden");
  cont_culture.classList.remove("hidden");
});
