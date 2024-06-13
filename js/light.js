let status = document.getElementById("status")  

document.getElementById("turnOnLightSwitchSala")
  .addEventListener("change", function () {
    if (this.checked) {
      status.innerText = "A luz da sala está acesa";
      status.style.color = "green";
      status.style.display = "block";
      $.ajax({
        url: "http://192.168.26.168/MUDAR",
      });
    } else {
      status.innerText = "A luz da sala está apagada";
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

document.getElementById("turnOnLightSwitchCozinha")
  .addEventListener("change", function () {
    if (this.checked) {
      status.innerText = "A luz da cozinha está acesa";
      status.style.color = "green";
      status.style.display = "block";
      $.ajax({
        url: "http://192.168.26.168/MUDAR",
      });
    } else {
      status.innerText = "A luz da cozinha está apagada";
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

document.getElementById("turnOnLightSwitchQuarto")
  .addEventListener("change", function () {
    if (this.checked) {
      status.innerText = "A luz do quarto está acesa";
      status.style.color = "green";
      status.style.display = "block";
      $.ajax({
        url: "http://192.168.26.168/MUDAR",
      });
    } else {
      status.innerText = "A luz do quarto está apagada";
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
