function scrollElement(id) {
  var scrollDiv = document.getElementById(id).offsetTop;
  window.scrollTo({ top: scrollDiv, behavior: "smooth" });
}
