function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("errorMessage");

    if (email === "" || password === "") {
        errorMessage.textContent = "Please fill in all fields!";
        return false;
    }

    if (email.includes("@") && password.length >= 6) {
        errorMessage.textContent = "";
        alert("Log In Successful!");
        return true;
    } else {
        errorMessage.textContent = "Invalid email or password!";
        return false;
    }
}

