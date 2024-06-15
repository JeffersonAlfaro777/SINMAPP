const LoginPage = (() => {
    "use strict";

    const loginUser = () => {
        const username = document.querySelector('#username').value;
        const password = document.querySelector('#password').value;
        const errorMessage = document.querySelector('#error-message');

        //Peticion fetch hacia el backend, para hacer login

        if (username === 'admin' && password === 'password') {
            sessionStorage.setItem("token", 'admin' + Date.now().toString())
            location.href='menu.html'
        } else {
            errorMessage.textContent = 'Usuario o contraseña incorrectos.';
            return false;
        }
    }

    //*Return para enlazar metodos y propiedads de privados a publicos
    return {
        loginUser,
    }
})()
// function validateLogin() {
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;
//     const errorMessage = document.getElementById('error-message');

//     if (username === 'admin' && password === 'password') {
//         window.location.href = 'menu.html';
//         sessionStorage.setItem("token", 'admin' + Date.now().toString())
//         return false;
//     } else {
//         errorMessage.textContent = 'Usuario o contraseña incorrectos.';
//         return false;
//     }
// }