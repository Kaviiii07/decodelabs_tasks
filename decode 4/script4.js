function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

function showMessage() {
    alert("Welcome to my portfolio!");
}

function showSkills() {
    alert("My Skills:\n\nHTML\nCSS\nJavaScript\nJava\nPython");
}
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let result = document.getElementById("result");

    if (name === "" || email === "" || message === "") {
        result.style.color = "red";
        result.innerHTML = "Please fill in all fields.";
    } else {
        result.style.color = "green";
        result.innerHTML = "Message sent successfully!";
        document.getElementById("contactForm").reset();
    }
});