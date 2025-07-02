// validation code for input

var emailError = document.getElementById('emailError');
var email = document.forms['form']['email'];
email.addEventListener('textInput', verifyEmail);

var passwordError = document.getElementById('passwordError');
var password = document.forms['form']['password'];
password.addEventListener('textInput', verifyPassword);

function validatedLoginForm(){
    if (email.value.length < 9) {
        email.style.border = "1px solid red";
        emailError.style.display = "block";
        email.focus();
        return false;
    }

    if (password.value.length < 6) {
        password.style.border = "1px solid red";
        passwordError.style.display = "block";
        password.focus();
        return false;
    }
}

function verifyEmail(){
    if (email.value.length >= 8) {
        email.style.border = "1px solid silver";
        emailError.style.display = "none";
        return true;
    }
}

function verifyPassword() {
    if (password.value.length >= 8) {
        password.style.border = "1px solid silver";
        passwordError.style.display = "none";
        return true;
    }
}