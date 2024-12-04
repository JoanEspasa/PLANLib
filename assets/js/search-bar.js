function themeSwitcher() {
  let currentTheme = document.documentElement.getAttribute("data-bs-theme");
  const backgroundColor = document.getElementById("results-container");

  if (currentTheme === "light") {
    backgroundColor.style.setProperty("background-color", "#2A2F35");
    return;
  }

  if (currentTheme === "dark") {
    backgroundColor.style.setProperty("background-color", "rgb(245,245,250)");
  }
}

function themeSwitcherInitial() {
  let currentTheme = document.documentElement.getAttribute("data-bs-theme");
  const backgroundColor = document.getElementById("results-container");

  console.log(currentTheme);

  if (currentTheme === "dark") {
    backgroundColor.style.setProperty("background-color", "#2A2F35");
    return;
  }

  if (currentTheme === "light") {
    backgroundColor.style.setProperty("background-color", "rgb(245,245,250)");
  }
}

document.addEventListener("DOMContentLoaded", themeSwitcherInitial);

document
  .getElementById("darkModeSwitch")
  .addEventListener("click", themeSwitcher);
