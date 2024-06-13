let status = document.getElementById("status")

document.getElementById("turnOnAirConditioningSwitch")
.addEventListener("change", function () {
    if (this.checked) {
    status.innerText = "O ar-condicionado está ligado";
    status.style.color = "green";
    status.style.display = "block";
    $.ajax({
        url: "http://192.168.26.168/MUDAR",
    });
    
    } else {
    status.innerText = "O ar-condicionado está desligado";
    status.style.color = "red";
    status.style.display = "block";
    $.ajax({
        url: "http://192.168.26.168/MUDAR",
    });
    }
});

