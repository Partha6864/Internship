function validateForm() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var contactNo = document.getElementById("contactNo").value;
    var errorMessage = document.getElementById("errorMessage");

    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match!";
        return false;
    } 
    
    if (password.length < 6 || password.length > 12) {
        errorMessage.textContent = "Password must be between 6 and 12 characters long!";
        return false;
    }

    if (contactNo.length !== 10 || !/^\d{10}$/.test(contactNo)) {
        errorMessage.textContent = "Please enter a valid 10-digit contact number!";
        return false;
    }

    errorMessage.textContent = "";
    alert("Registration successful!");
    return true;
}
