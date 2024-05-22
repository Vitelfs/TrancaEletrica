function togglePasswordVisibility(passwordId) {
  var passwordField = document.getElementById(passwordId);
  passwordField.type = passwordField.type === "password" ? "text" : "password";
}

function registerPassword() {
  var password = document.getElementById("register-password").value;
  if (password) {
    localStorage.setItem("password", password);
    document.getElementById("register-message").textContent =
      "Senha cadastrada com sucesso!";
    document.getElementById("register-message").style.color = "green";
  } else {
    document.getElementById("register-message").textContent =
      "Por favor, insira uma senha.";
    document.getElementById("register-message").style.color = "red";
  }
}

function checkPassword() {
  var enteredPassword = document.getElementById("password").value;
  var storedPassword = localStorage.getItem("password");

  if (enteredPassword === storedPassword) {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("led-controls").style.display = "block";
  } else {
    document.getElementById("error-message").textContent =
      "Senha incorreta. Tente novamente.";
  }
}

function controlLed(action) {
  var ledStatus = document.getElementById("led-status");
  if (action === "on") {
    ledStatus.textContent = "LED está ligado.";
    ledStatus.style.color = "green";
    $.ajax({
      url: "http://192.168.26.168/H",
    });
  } else {
    ledStatus.textContent = "LED está desligado.";
    ledStatus.style.color = "red";
    $.ajax({
      url: "http://192.168.26.168/L",
    });
  }
}

function showChangePassword() {
  document.getElementById("led-controls").style.display = "none";
  document.getElementById("change-password").style.display = "block";
}

function changePassword() {
  var newPassword = document.getElementById("new-password").value;
  if (newPassword) {
    localStorage.setItem("password", newPassword);
    document.getElementById("change-password-message").textContent =
      "Senha alterada com sucesso!";
    document.getElementById("change-password-message").style.color = "green";

    setTimeout(function () {
      document.getElementById("change-password").style.display = "none";
      document.getElementById("led-controls").style.display = "block";
    }, 2000);
  } else {
    document.getElementById("change-password-message").textContent =
      "Por favor, insira uma nova senha.";
    document.getElementById("change-password-message").style.color = "red";
  }
}

function logout() {
  document.getElementById("led-controls").style.display = "none";
  document.getElementById("login-container").style.display = "block";
}

window.onload = function () {
  if (localStorage.getItem("password")) {
    document.getElementById("register-container").style.display = "none";
    document.getElementById("login-container").style.display = "block";
  }
};
