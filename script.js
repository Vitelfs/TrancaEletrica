function togglePasswordVisibility(passwordId) {
  var passwordField = document.getElementById(passwordId);
  passwordField.type = passwordField.type === "password" ? "text" : "password";
}

function registerPassword() {
  var password = document.getElementById("register-password").value;
  var passwordMessage = document.getElementById("register-message");

  if (/^\d{6}$/.test(password)) {
    localStorage.setItem("password", password);
    passwordMessage.textContent = "Senha cadastrada com sucesso!";
    passwordMessage.style.color = "green";
    document.getElementById("register-container").style.display = "none";
    document.getElementById("login-container").style.display = "block";
    $.ajax({
      url: "http://192.168.26.168/S",
    });
  } else {
    passwordMessage.textContent = "A senha deve ter exatamente 6 dígitos numéricos.";
    passwordMessage.style.color = "red";
  }
}

function checkPassword() {
  var enteredPassword = document.getElementById("password").value;
  var storedPassword = localStorage.getItem("password");

  if (enteredPassword === storedPassword) {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("led-controls").style.display = "block";
  } else {
    document.getElementById("error-message").textContent = "Senha incorreta. Tente novamente.";
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
  var changePasswordMessage = document.getElementById("change-password-message");

  if (/^\d{6}$/.test(newPassword)) {
    localStorage.setItem("password", newPassword);
    changePasswordMessage.textContent = "Senha alterada com sucesso!";
    changePasswordMessage.style.color = "green";
    $.ajax({
      url: "http://192.168.26.168/A",
    });
    setTimeout(function () {
      document.getElementById("change-password").style.display = "none";
      document.getElementById("led-controls").style.display = "block";
    }, 2000);
  } else {
    changePasswordMessage.textContent = "A nova senha deve ter exatamente 6 dígitos numéricos.";
    changePasswordMessage.style.color = "red";
  }
}

function logout() {
  document.getElementById("led-controls").style.display = "none";
  document.getElementById("login-container").style.display = "block";
}

window.onload = function () {
  var storedPassword = localStorage.getItem("password");

  if (storedPassword) {
    document.getElementById("register-container").style.display = "none";
    document.getElementById("login-container").style.display = "block";
  } else {
    document.getElementById("register-container").style.display = "block";
    document.getElementById("login-container").style.display = "none";
  }
};
