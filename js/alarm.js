let status = document.getElementById("status")

document.getElementById("alarmSwitch")
.addEventListener("change", function () {
    if (this.checked) {
    status.innerText = "O alarme está ligado";
    status.style.color = "green";
    status.style.display = "block";
    $.ajax({
        url: "http://192.168.26.168/MUDAR",
    });
    } else {
    status.innerText = "O alarme está desligado";
    status.style.color = "red";
    status.style.display = "block";
    $.ajax({
        url: "http://192.168.26.168/MUDAR",
    });
    }
    setTimeout(function() {
        status.style.display = "none"; // Define o display como "none" para ocultar o elemento
    }, 2000);
});