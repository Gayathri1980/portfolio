function showMessage() {
    alert("Thank you for visiting my portfolio!");
}

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}
function showMessage() {
    alert("Thank you for visiting my portfolio!");
}


function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}


function sendMessage(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Thank you, " + name +
        "! Your message has been received."
    );

    event.target.reset();
}
function toggleTheme() {

    document.body.classList.toggle("dark-mode");
    const themeButton = document.querySelector(".theme-btn");

    if (document.body.classList.contains("dark-mode")) {

        themeButton.innerHTML = "☀️";
        themeButton.setAttribute("aria-label", "Switch to light mode");

    } else {

        themeButton.innerHTML = "🌙";
        themeButton.setAttribute("aria-label", "Switch to dark mode");

    }
}

function sendMessage(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Thank you, " + name +
        "! Your message has been received."
    );

    event.target.reset();
}