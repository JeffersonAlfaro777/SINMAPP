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

function toggleSidebar() {
  const sidebar = document.querySelector('#sideBar');
  const sideBarIsOpen = sidebar.getAttribute("data-open")
  sidebar.setAttribute("data-open", sideBarIsOpen == "false" ? true : false)
}

function navigateTo(url) {
  window.location.href = url;
}

function logout(){
  sessionStorage.clear()
  location.href = '/'
}
// function toggleSidebar() {
//   const sidebar = document.getElementById('sidebar');
//   sidebar.style.left = sidebar.style.left === '0px' ? '-200px' : '0px';
// }

function verGrafico() {
  // Lógica para generar el gráfico
  alert('Generar gráfico');
}


