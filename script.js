
function checkPassword() {
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (password === '123456') {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('led-controls').style.display = 'block';
        errorMessage.textContent = '';
    } else {
        errorMessage.textContent = 'Senha incorreta. Tente novamente.';
    }
}

function controlLed(action) {
    const ledStatus = document.getElementById('led-status');

    if (action === 'on') {
        ledStatus.textContent = 'LED está ligado.';
        ledStatus.style.color = 'green';
        $.ajax({
            url: "http://192.168.26.168/H"
        }
    );
    } else if (action === 'off') {
        ledStatus.textContent = 'LED está desligado.';
        ledStatus.style.color = 'red';
        $.ajax({
            url: "http://192.168.26.168/L"
        });
    }
}
