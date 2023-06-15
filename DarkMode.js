document.addEventListener("DOMContentLoaded", () => {
  const Sun = document.querySelector("#sun");
  const Moon = document.querySelector("#moon");
  const Footer = document.querySelector("#footer_js");
  const Navigation = document.querySelector("#nav_ul");
  const Background2 = document.querySelector("#bg2");


  function enableDarkMode() {
    document.body.classList.add("DarkThemeForBody");
    Footer.classList.add("DarkThemeBasic");
    Navigation.classList.add("DarkThemeBasic");
    Sun.classList.remove("activated");
    Moon.classList.add("activated");
    Background2.classList.add("DarkThemeBg2");
   

    // ! Zde je uložena preference režimu
    localStorage.setItem("darkMode", "enabled");
  }

  function disableDarkMode() {
    document.body.classList.remove("DarkThemeForBody");
    Footer.classList.remove("DarkThemeBasic");
    Navigation.classList.remove("DarkThemeBasic");
    Sun.classList.add("activated");
    Moon.classList.remove("activated");
    Background2.classList.remove("DarkThemeBg2");
   

    //! Zde je úložiště darkModu
    localStorage.setItem("darkMode", "disabled");
  }

  function toggleDarkMode() {
    const isDarkMode = document.body.classList.contains("DarkThemeForBody");

    if (isDarkMode) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  }

  //! Aplikování darkmodu na zbytku stránky z úložiště
  const currentMode = localStorage.getItem("darkMode");
  if (currentMode === "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }

  Sun.addEventListener("click", disableDarkMode);
  Moon.addEventListener("click", enableDarkMode);
});
