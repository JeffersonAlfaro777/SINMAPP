

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


function verGrafico() {
  // Lógica para generar el gráfico
  alert('Generar gráfico');
}
// Función para seleccionar todos los tipos de sangre
function selectAllBloodTypes(source) {
  checkboxes = document.querySelectorAll('#tipos-sangre input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
      checkbox.checked = source.checked;
  });
}




