let status = document.getElementById("status")  

document.getElementById("openDoorSwitch")
.addEventListener("change", function () {
    
    if (this.checked) {
    status.innerText = "A porta está destrancada";
    status.style.color = "green";
    status.style.display = "block";
    $.ajax({
        url: "http://192.168.26.168/H",
    });
    } else {
    status.innerText = "A porta está trancada";
    status.style.color = "red";
    status.style.display = "block";
    $.ajax({
        url: "http://192.168.26.168/L",
    });
    }
    setTimeout(function() {
        status.style.display = "none"; // Define o display como "none" para ocultar o elemento
    }, 2000);
});