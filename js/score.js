let sum = localStorage.getItem("score");

if (sum >= 50) {
    document.getElementById("div3").innerText = sum + "%"
} else {
    document.getElementById("div1").innerText = "Try hard next time"
    document.getElementById("div1").style.color = "red"
    // document.getElementById("div2").innerText = ""
    document.getElementById("div3").innerText = sum + "%"
}