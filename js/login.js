let attempt = 3;

let valid = true;
let users = [{email: "test@gmail.com", pass: "12345678"},
    {email: "test2@gmail.com", pass: "12345678"},
    {email: "test3@gmail.com", pass: "12345678"}];

function register() {
    let email = document.getElementById("email-r").value;
    let password = document.getElementById("pass-r").value;
    let repassword = document.getElementById("repass-r").value;
    if (email === '' || password === '' || repassword === '') {
        alert("Please fill all fields...!!!!!!");
        return false;
    } else if ((password.length) < 8) {
        alert("Password should at least 8 character in length...!!!!!!");
        return false;
    } else if (!(password).match(repassword)) {
        alert("Your passwords don't match. Try again?");
        return false;
    } else {
        let object = {email: email.value, pass: password.value};
        users.push(object);
        window.location = "../index.html";
        return false;
    }
}

function validate() {
    let email = document.getElementById("email").value;
    console.log(email)
    console.log(typeof email)
    console.log(users[0].email)
    console.log(typeof users[0].email)
    let password = document.getElementById("pass").value;
    for (let i = 0; i < users.length; i++) {
        if (email === users[i].email && password === users[i].pass) {
            valid = true;
            alert("Login successfully");
            window.location = "../dash.html";
            return false;
        } else {
            valid = false;
        }
    }
    if (valid === false) {
        attempt--;
        if (attempt === 0) {
            document.getElementById("email").disabled = true;
            document.getElementById("pass").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
        return false;
    }
}