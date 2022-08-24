let navReveal = document.getElementById("sunnyside__bg-menu");

navReveal.addEventListener("click", function( event ) {
  
  var navmenu = document.getElementById("sunnyside__bg-menu");

  if (navmenu.classList.contains('nav__open')) {
    document.getElementById("sunnyside__bg-menu").classList.remove("nav__open");
    document.getElementById("sunnyside__nav").classList.remove("sunnyside__nav-reveal");
  } else {
    document.getElementById("sunnyside__bg-menu").classList.add("nav__open");
    document.getElementById("sunnyside__nav").classList.add("sunnyside__nav-reveal");
  }
  
}, false);