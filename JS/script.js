function validateLogin() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');

  if (username === 'admin' && password === 'password') {
      window.location.href = 'menu.html';
      return false;
  } else {
      errorMessage.textContent = 'Usuario o contraseña incorrectos.';
      return false;
  }
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar.style.left === '0px') {
      sidebar.style.left = '-200px';
  } else {
      sidebar.style.left = '0px';
  }
}

function navigateTo(url) {
  window.location.href = url;
}
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.style.left = sidebar.style.left === '0px' ? '-200px' : '0px';
}

function verGrafico() {
  // Lógica para generar el gráfico
  alert('Generar gráfico');
}


