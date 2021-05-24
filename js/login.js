let attempt = 3;

let valid = true;
let users = [{email: "test@gmail.com", pass: "12345678"},
    {email: "test2@gmail.com", pass: "12345678"},
    {email: "test3@gmail.com", pass: "12345678"}]

function validate() {
    let username = document.getElementById("email").value;
    console.log(username)
    console.log(typeof username)
    console.log(users[0].email)
    console.log(typeof users[0].email)
    let password = document.getElementById("pass").value;
    for (let i = 0; i < users.length; i++) {
        if (username === users[i].email && password === users[i].pass) {
            valid = true;
            alert("Login successfully");
            window.location = "index.html"; // Redirecting to other page.
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