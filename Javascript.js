function call() {
  alert("THANKS FOR APPROACHING US :)");
}

var data = document.getElementById("mob");
let data1 = document.getElementById("mob-nav-list");
//desktop nav and mobile nav visible and disable while scrolling-----------------------------//
let desktopNav = document.querySelector(".nav-div");
let mobileNav = document.querySelector(".mobnav");
let Whatsapp = document.querySelector(".Wdiv");
let previousCursor = window.scrollY;
window.addEventListener("scroll", function () {
  let curretCursor = this.window.scrollY;
  if (curretCursor > previousCursor) {
    desktopNav.style.transform = "translateY(-100%)";
    Whatsapp.style.transform = "translateY(0%)";
    mobileNav.style.transform = "translateY(-100%)";
    Whatsapp.classList.add("WDiv");
  } else {
    desktopNav.style.transform = "translateY(0%)";
    Whatsapp.classList.remove("WDiv");
    Whatsapp.style.transform = "translateY(+100%)";
    mobileNav.style.transform = "translateY(0%)";
  }
  previousCursor = curretCursor;
});

//mobile NAV open and close -----------------------------------------------------------//
function work() {
  if (data1.style.left == "-50%") {
    data1.style.left = "0px";
  } else {
    data1.style.left = "-50%";
  }
}
// mobile nav close ---------------------------------------------------------------------//
function work1() {
  if (data1.style.left == "0px") {
    data1.style.left = "-50%";
  }
}
// From to mail-------------------------------------------------------------------------//
function sendfile() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "kingbala62@gmail.com",
    Password: "E4F768F366055114311CF85DD69D21F6C026",
    To: "vigneshvickybsc1999@gmail.com",
    From: "kingbala62@gmail.com",
    Subject: document.getElementById("subject").value,
    Body:
      "Name: " +
      document.getElementById("name").value +
      "<br> email: " +
      document.getElementById("email").value +
      "<br> Number: " +
      document.getElementById("num").value +
      "<br> Message: " +
      document.getElementById("message").value,
  }).then((message) => alert(message));
}

// scroll function for header contents--------------------------------------------------=//

const observer = new IntersectionObserver((obs) => {
  obs.forEach((scroLLPart) => {
    if (scroLLPart.isIntersecting) {
      scroLLPart.target.classList.add("scroll");
    } else {
      scroLLPart.target.classList.remove("scroll");
    }
  });
});

let scrollBtn = document.querySelectorAll(".anim");
scrollBtn.forEach((main) => {
  observer.observe(main);
});

//scroll for skill bar-------------------------------------------------------------------------//

const observer1 = new IntersectionObserver((obs1) => {
  obs1.forEach((obs2) => {
    if (obs2.isIntersecting) {
      obs2.target.classList.add("add-anim");
    }
  });
});

let skillbar = document.querySelectorAll(".s-anim");
skillbar.forEach((el) => {
  observer1.observe(el);
});

// scroll observer for introduction images--------------------------------------------------------//
let observer3 = new IntersectionObserver((introImg) => {
  introImg.forEach((intro) => {
    if (intro.isIntersecting) {
      intro.target.classList.add("w-img-show");
    } else {
      intro.target.classList.remove("w-img-show");
    }
  });
});
const Images = document.querySelectorAll(".w-img");
Images.forEach((ImgLoop) => {
  observer3.observe(ImgLoop);
});
