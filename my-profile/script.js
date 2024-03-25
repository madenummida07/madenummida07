const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

bar.onclick = () => {
  nav.classList.toggle("active"); // Toggle the 'active' class on navbar
};

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active"); // Close the navigation when close button is clicked
  });
}

function darkMode() {
  let element = document.body;
  element.className = "dark-mode";
}
function lightMode() {
  let element = document.body;
  element.className = "light-mode";
}

// const sidebar = document.querySelector(".sidebar");
// const navLink = document.ATTRIBUTE_NODE.querySelector(".nav_link");

// sidebar.addEventListener("click", () => {
//   navLink.classList.toggle("hide");
// });
