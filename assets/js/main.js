const articles = document.querySelectorAll("article[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  articles.forEach((current) => {
    const articleHeight = current.offsetHeight;
    const articleTop = current.offsetTop - 200;
    articleId = current.getAttribute("id");

    if (scrollY > articleTop && scrollY <= articleTop + articleHeight) {
      document.querySelector(".nav-bar a[href*=" + articleId + "]").classList.add("active-link");
    } else {
      document.querySelector(".nav-bar a[href*=" + articleId + "]").classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-bar");

const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  const navMenu = document.getElementById("nav-bar");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((event) => event.addEventListener("click", linkAction));
