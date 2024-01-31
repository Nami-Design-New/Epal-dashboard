function switchLanguage(direction) {
  const htmlTag = document.getElementById("mainHtml");
  const appCssLink = document.getElementById("appCss");
  const bootstrapCssLink = document.getElementById("bootstrapCss");
  if (direction === "ltr") {
    htmlTag.dir = "ltr";
    appCssLink.setAttribute("href", "assets/css/app.min.css");
    bootstrapCssLink.setAttribute("href", "assets/css/bootstrap.min.css");
  } else if (direction === "rtl") {
    htmlTag.dir = "rtl";
    appCssLink.setAttribute("href", "assets/css/app-rtl.min.css");
    bootstrapCssLink.setAttribute("href", "assets/css/bootstrap-rtl.min.css");
  }
  sessionStorage.setItem("languageDirection", direction);
}
document.getElementById("leftToRight").addEventListener("click", () => {
  switchLanguage("ltr");
});
document.getElementById("rightToLeft").addEventListener("click", () => {
  switchLanguage("rtl");
});
