// // set up functions
// function next(){

// }

// function previous(){

// }


// // add eventListeners
// const next = document.querySelector("carousel-control-next");
// const prev = document.querySelector("carousel-control-prev");

// next.addEventListener("click", function () {
    
// });

// helloBtn.addEventListener("click", function () {
//   message.innerHTML = "Hello!";
// });


//mobile nav hamburger menu
// document.querySelector("#hamburger").addEventListener("click", function () {
//   this.style.display = "none";
//   });

const mobileNav = document.querySelector("#hamburger");
// it works to turn the correct area yellow, but not to set it to display:none
// mobileNav.addEventListener("click", function () {
//   console.log("hamburger menu");
//   // document.querySelector(".topnav #myLinks").classList.toggle("open");
//   document.querySelector(".topnav #myLinks").style.backgroundColor = "yellow";
  
//   console.log(document.querySelector(".topnav #myLinks").className);
// })

//  adding a border during hover or focus within navbar
navLinks = document.querySelectorAll(".topnav a");
navLinks.forEach(function(navLink){
  navLink.addEventListener("mouseover", function () {
    navLink.classList.add("activeNavLink");
    console.log("nav link border 1");
    console.log(navLink);
  });
  navLink.addEventListener("focus", function () {
    console.log("nav link border 2");
    navLink.classList.add("activeNavLink");
  });
  navLink.addEventListener("mouseout", function () {
    console.log("nav link border 3");
    navLink.classList.remove("activeNavLink");
  });
  navLink.addEventListener("blur", function () {
    console.log("nav link border 4");
    navLink.classList.remove("activeNavLink");
  });
});

// background-color: var(--accent3);
//   color: black;


//putting it all together

