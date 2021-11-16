let sectionAbout = document.querySelector("#about-section");
let sectionSkills = document.querySelector("#skills-section");
let sectionContact = document.querySelector("#contact-section");

let topAbout = sectionAbout.offsetTop;
let topSkill = sectionSkills.offsetTop;
let topContact = sectionContact.offsetTop;

document.addEventListener("scroll", function () {
  scroll = window.scrollY;

  if (scroll >= topAbout - 150) {
    sectionAbout.classList.add("animate");
  }
  if (scroll >= topSkill - 150) {
    sectionSkills.classList.add("animate");
  }
});
