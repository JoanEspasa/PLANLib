
//Icons used to control the theme.
const lightIcon = document.querySelector(".light-theme");
const darkIcon = document.querySelector(".dark-theme");

//Theme variables
const userPreferenceTheme = localStorage.getItem("theme");

//True if the user preference is dark, false otherwise.
const systemPreferenceTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

//Changes the display if they're there or not.
function iconToggle(){
    lightIcon.classList.toggle("hidden");
    darkIcon.classList.toggle("hidden");
}

/**
 * Checks if the user has given a previous preference for the dark theme.
 * <br>
 * It also checks for the System Preference to see if it is dark.
 * If true, it adds the dark class on the HTML element and hides the dark icon.
 */

function themeCheck(){
    if (userPreferenceTheme === "dark" || (!userPreferenceTheme && systemPreferenceTheme)){
        document.documentElement.classList.add("dark");
        darkIcon.classList.add("hidden");
        lightIcon.classList.remove("hidden");
    } else {
        lightIcon.classList.add("hidden");
        darkIcon.classList.remove("hidden");
    }
}

/**
 * Manually switches the current theme and updates the preferences accordingly.
 */

function themeSwitch() {
    const htmlElement = document.documentElement;
    if (htmlElement.classList.contains("dark")){
        htmlElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        iconToggle();
        return;
    }
    htmlElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    iconToggle();
}

/*
Allows switching the themes using the buttons.
 */

lightIcon.addEventListener('click',()=>{
    themeSwitch();
})

darkIcon.addEventListener('click',()=>{
    themeSwitch();
})

//Checks the theme on load.
themeCheck()
