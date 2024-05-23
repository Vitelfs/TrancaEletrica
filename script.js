var input = document.getElementById("pass");
input.addEventListener("keypress", function(event)
{
    if (event.key === "Enter")
    {
        event.preventDefault();
        document.getElementById("botao").click();
    }
});

function showPass(){
  let pass = document.getElementById("pass");
  if(pass.type === "password"){
    pass.type = "text";
  }
  else{
    pass.type = "password";
  }
}

function showPassCadastro(){
  let pass1 = document.getElementById("passCadastro");
  let pass2 = document.getElementById("passConfirm");
  if(pass1.type === "password" && pass2.type === "password"){
    pass1.type = "text";
    pass2.type = "text";
  }
  else{
    pass1.type = "password";
    pass2.type = "password";
  }
}

function registerPassword() {
  var password = document.getElementById("passCadastro").value;
  var passwordConfirm = document.getElementById("passConfirm").value;

  if (password == passwordConfirm){
    if (/^\d{6}$/.test(password)) {
      localStorage.setItem("password", password);
      alert("Senha cadastrada com sucesso")
      $.ajax({
        url: "http://192.168.26.168/S",
      });
    } else {
      alert("A senha deve ter 6 dígitos numéricos");
    }
  }
  else{
    alert("As senhas não correspondem");
  }
}

function checkPassword() {
  var enteredPassword = document.getElementById("pass").value;
  var storedPassword = localStorage.getItem("password");

  if (enteredPassword === storedPassword) {
    document.getElementById("form-login").style.display = "none";
    document.getElementById("form-controle").style.display = "block";
  } else {
    alert("Senha incorreta, tente novamente")
  }
}

function controlLock(action) {
  var status = document.getElementById("status");
  if (action == "open") {
    status.innerText = "A tranca está aberta";
    status.style.color = "green";
    $.ajax({
      url: "http://192.168.26.168/H",
    });
  } else {
    status.innerText = "A tranca está fechada";
    status.style.color = "red";
    $.ajax({
      url: "http://192.168.26.168/L",
    });
  }
}

function showChangePassword() {
  document.getElementById("form-controle").style.display = "none";
  document.getElementById("form-changePass").style.display = "block";
}

function changePassword() {
  let newPassword = document.getElementById("newPass").value;
  let newPasswordConfirm = document.getElementById("newPassConfirm").value;

  if (newPassword == newPasswordConfirm){
    if (/^\d{6}$/.test(newPassword)) {
      localStorage.setItem("password", newPassword);
      alert("Senha alterada com sucesso");
      backControl();
      $.ajax({
        url: "http://192.168.26.168/A",
      });
    } else {
      alert("A nova senha deve ter exatamente 6 dígitos numéricos");
    }
  }
  else{
    alert("As senhas não correspondem")
  }
}

function logout() {
  document.getElementById("form-controle").style.display = "none";
  document.getElementById("form-login").style.display = "block";
  document.getElementById("pass").value = "";
}

function backControl(){
  document.getElementById("form-controle").style.display = "block";
  document.getElementById("form-changePass").style.display = "none";
}