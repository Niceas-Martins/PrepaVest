let email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let emailField = document.getElementById('email')
let button_entre = document.getElementById('Entre')
let span_Email = document.getElementById('span_Email')
let span_Password = document.getElementById('span_Password')
let passwordField = document.getElementById('Password')

function SetError(element, span) {
    element.style.border = "2px solid red"
    span.style.display = "block"
}

function Setsucess(element, span) {
    element.style.border = "2px solid green"
    span.style.display = "none"
}
function Setsolo(element, span) {
    element.style.border = ""
    span.style.display = "none"
}

function EmailValid() {
    if (email.test(emailField.value)) {
        Setsucess(emailField, span_Email)

    } else if (emailField.value === "") {
        Setsolo(emailField, span_Email);

    }
    else {
        SetError(emailField, span_Email)

    }
}

function PasswordValid() {
    if (passwordField.value.length <= 3) {
        SetError(passwordField, span_Password)
    } else if (passwordField.value == "") {
        Setsolo(passwordField, span_Password);
    }
    else {
        Setsucess(passwordField, span_Password)
    }
}


button_entre.addEventListener('click', function() {
    window.location.href = "index2.html"
})

