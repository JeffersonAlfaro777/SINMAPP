function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (password === 'password') {
        window.location.href = 'menu.html';
        sessionStorage.setItem("token", Date.now().toString())
        sessionStorage.setItem("userName", `${username}`)
        return false;
    } else {
        errorMessage.textContent = 'Usuario o contraseña incorrectos.';
        return false;
    }
}