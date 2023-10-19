let mainSidebar = document.querySelector("nav.main-sidebar");
let mainSidebarToggle = document.querySelector(
  ".main-sidebar-toggle-container"
);

let secondarySidebar = document.querySelector(".secondary-sidebar");
let secondarySidebarToggle = document.querySelector(
  ".secondary-sidebar-toggle-container"
);

mainSidebarToggle.addEventListener("click", toggleMainSidebar);
secondarySidebarToggle.addEventListener("click", toggleSecondarySidebar);

function toggleMainSidebar() {
  if (mainSidebar.getAttribute("expanded") == "false") {
    if (secondarySidebar.getAttribute("expanded") == "true") {
      secondarySidebar.setAttribute("expanded", "false");
    }
    mainSidebar.setAttribute("expanded", "true");
  } else {
    mainSidebar.setAttribute("expanded", "false");
  }
}

function toggleSecondarySidebar() {
  if (secondarySidebar.getAttribute("expanded") == "false") {
    if (mainSidebar.getAttribute("expanded") == "true") {
      mainSidebar.setAttribute("expanded", "false");
    }
    secondarySidebar.setAttribute("expanded", "true");
  } else {
    secondarySidebar.setAttribute("expanded", "false");
  }
}
