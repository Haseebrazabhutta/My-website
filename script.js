
// Get all dropdown buttons
function toggleDropdown(element) {
    const parent = element.parentElement;
    const dropdownMenu = parent.querySelector(".dropdown-menu");

    // Toggle dropdown visibility
    if (dropdownMenu.style.display === "block") {
      dropdownMenu.style.display = "none";
    } else {
      dropdownMenu.style.display = "block";
    }
  }
  //open and close the dropdown menu
function toggleDropdown(element) {
    const parent = element.parentElement;
    const dropdownMenu = parent.querySelector(".dropdown-menu");

    // Toggle dropdown visibility
    if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none";
        parent.classList.remove("open"); // Remove open class
    } else {
        dropdownMenu.style.display = "block";
        parent.classList.add("open"); // Add open class
    }
}
// typed.js
var typed = new Typed("#typed", {
    strings: ["Welcome to AGES!","Dreaming of Studying Abroad?",
      "Your Future Awaits Overseas!",
      "Trusted Guidance for International Education!",
      "Scholarships and Admission Made Easy!",
      "Explore Your Path to Success!", "Shape Your Future!"], 
    typeSpeed: 100, 
    backSpeed: 50, 
    backDelay: 1000, 
    startDelay: 500, 
    loop: true, 
    showCursor: true, 
    cursorChar: "|",
  });

  // our testimonials
  // This is script file

$('.testimonials-container').owlCarousel({
  loop:true,
  autoplay:true,
  autoplayTimeout:6000,
  margin:10,
  nav:true,
  navText:["<i class='fa-solid fa-arrow-left'></i>",
           "<i class='fa-solid fa-arrow-right'></i>"],
  responsive:{
      0:{
          items:1,
          nav:false
      },
      600:{
          items:1,
          nav:true
      },
      768:{
          items:2
      },
  }
})

