document.addEventListener("DOMContentLoaded", () => {
  "use strict";
  // wow js
  const wow = new WOW({
    boxClass: "wow", // default
    animateClass: "animate__animated", //custom
    offset: 0, // default
    mobile: true, // default
    live: true, // default
  });
  wow.init();
  //  scrollpy
  ScrollPosStyler.init();

  // end
});
