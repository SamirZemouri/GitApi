// Dark mode ---------------------------------------------------------------------------------------------------------

const dark = document.querySelector('.dark')

dark.addEventListener('click', function () {
let body = document.getElementById("body");
let currentClass = body.className;
body.className = currentClass == "light-mode" ? "dark-mode" : "light-mode";
})

const logo = document.querySelector("logoswitch")
logo.addEventListener("click")
logo.classList.remove("fa-moon")
logo.classList.add("fa-sun")





























// function toggleDarkLight() {
//     var body = document.getElementById("body");
//     var currentClass = body.className;
//     body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
//   }
