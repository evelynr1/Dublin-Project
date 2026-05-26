//buttons to switch between small, regular, and large text size



// //color to dark mode
// let darkBtn = document.querySelector("#dark-mode-button");

// darkBtn.addEventListener('click', function() {
//     var x = document.body;
//     x.classList.toggle("dark-mode");
//     this.innerHTML = "Light Mode";
// });

//hide images button
//with minor help from this code: https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
let imgBtn = document.querySelector("#image-visibility-button");

imgBtn.addEventListener('click', function() {
    let images = document.querySelectorAll('img');
    images.forEach(function (image) {
        if (image.style.display === "none") {
            image.style.display = "block";
            imgBtn.innerHTML = "Hide Images";
        } else {
            image.style.display = "none";
            imgBtn.innerHTML = "Show Images";
        }
    });
});

