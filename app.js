const homePage = document.querySelector(".home-page");
const mcastPage = document.querySelector(".mcast-page");
const projectsPage = document.querySelector(".projects-page");
const cvPage = document.querySelector(".cv-page");

const homeBtn = document.getElementById("home-btn");
const mcastBtn = document.getElementById("mcast-btn");
const projectsBtn = document.getElementById("projects-btn");
const cvBtn = document.getElementById("cv-btn");

homeBtn.addEventListener("click", () => {
  homeBtn.classList.add("selected");

  if (mcastPage.classList.contains("visible")) {
    reset(mcastPage);
    mcastPage.classList.add("slide-out-right");
    hide(mcastPage);
    mcastBtn.classList.remove("selected");
  } else if (projectsPage.classList.contains("visible")) {
    reset(projectsPage);
    projectsPage.classList.add("slide-out-right");
    hide(projectsPage);
    projectsBtn.classList.remove("selected");
  } else if (cvPage.classList.contains("visible")) {
    reset(cvPage);
    cvPage.classList.add("slide-out-right");
    hide(cvPage);
    cvBtn.classList.remove("selected");
  }

  homePage.classList.remove("slide-out-left");
  homePage.classList.add("slide-in-left");
  show(homePage);
});

mcastBtn.addEventListener("click", () => {
  mcastBtn.classList.add("selected");

  if (homePage.classList.contains("visible")) {
    reset(homePage);
    homePage.classList.add("slide-out-left");
    hide(homePage);
    homeBtn.classList.remove("selected");

    mcastPage.classList.add("slide-in-right");
  } else if (projectsPage.classList.contains("visible")) {
    reset(projectsPage);
    projectsPage.classList.add("slide-out-right");
    hide(projectsPage);
    projectsBtn.classList.remove("selected");

    mcastPage.classList.add("slide-in-left");
  } else if (cvPage.classList.contains("visible")) {
    reset(cvPage);
    cvPage.classList.add("slide-out-right");
    hide(cvPage);
    cvBtn.classList.remove("selected");

    mcastPage.classList.add("slide-in-left");
  }

  mcastPage.classList.remove("slide-out-left");
  mcastPage.classList.remove("slide-out-right");
  show(mcastPage);
});

projectsBtn.addEventListener("click", () => {
  projectsBtn.classList.add("selected");

  if (homePage.classList.contains("visible")) {
    reset(homePage);
    homePage.classList.add("slide-out-left");
    hide(homePage);
    homeBtn.classList.remove("selected");

    projectsPage.classList.add("slide-in-right");
  } else if (mcastPage.classList.contains("visible")) {
    reset(mcastPage);
    mcastPage.classList.add("slide-out-left");
    hide(mcastPage);
    mcastBtn.classList.remove("selected");

    projectsPage.classList.add("slide-in-right");
  } else if (cvPage.classList.contains("visible")) {
    reset(cvPage);
    cvPage.classList.add("slide-out-right");
    hide(cvPage);
    cvBtn.classList.remove("selected");

    projectsPage.classList.add("slide-in-left");
  }

  projectsPage.classList.remove("slide-out-left");
  projectsPage.classList.remove("slide-out-right");
  show(projectsPage);
});

cvBtn.addEventListener("click", () => {
  cvBtn.classList.add("selected");

  if (homePage.classList.contains("visible")) {
    reset(homePage);
    homePage.classList.add("slide-out-left");
    hide(homePage);
    homeBtn.classList.remove("selected");
  } else if (mcastPage.classList.contains("visible")) {
    reset(mcastPage);
    mcastPage.classList.add("slide-out-left");
    hide(mcastPage);
    mcastBtn.classList.remove("selected");
  } else if (projectsPage.classList.contains("visible")) {
    reset(projectsPage);
    projectsPage.classList.add("slide-out-left");
    hide(projectsPage);
    projectsBtn.classList.remove("selected");
  }

  cvPage.classList.remove("slide-out-right");
  cvPage.classList.add("slide-in-right");
  show(cvPage);
});

function reset(el) {
  el.classList.remove("slide-out-left");
  el.classList.remove("slide-out-right");
  el.classList.remove("slide-in-left");
  el.classList.remove("slide-out-left");
  setTimeout(height, 0.5, el);
}

function hide(el) {
  el.classList.remove("visible");
  el.classList.add("hidden");
  setTimeout(noHeight, 0.5, el);
}

function show(el) {
  el.classList.remove("hidden");
  el.classList.add("visible");
}

function noHeight(el) {
  el.classList.add("no-height");
}

function height(el) {
  el.classList.remove("no-height");
}
