document.addEventListener("DOMContentLoaded", () => {
  const Sun = document.querySelector("#sun");
  const Moon = document.querySelector("#moon");
  const Footer = document.querySelector("#footer_js");
  const Navigation = document.querySelector("#nav_ul");

  function DarkMode() {
    const isDarkMode = document.body.classList.contains("DarkThemeForBody");

    if (isDarkMode) {
      exit();
    } else {
      document.body.classList.add("DarkThemeForBody");
      Footer.classList.add("DarkThemeBasic");
      Navigation.classList.add("DarkThemeBasic");
      Sun.classList.remove("activated");
      Moon.classList.add("activated");
    }
  }
  function LightMode() {
    const isDarkMode = document.body.classList.contains("DarkThemeForBody");

    if (isDarkMode) {
      document.body.classList.remove("DarkThemeForBody");
      Footer.classList.remove("DarkThemeBasic");
      Navigation.classList.remove("DarkThemeBasic");

      Sun.classList.add("activated");
      Moon.classList.remove("activated");
    } else {
      exit();
    }
  }

  Sun.addEventListener("click", LightMode);
  Moon.addEventListener("click", DarkMode);
});
