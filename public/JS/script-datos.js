// Datos de ejemplo, puedes reemplazarlo con datos reales
const data = [
    {nombre: 'Ana', edad: 23, ciudad: 'Madrid'},
    {nombre: 'Luis', edad: 25, ciudad: 'Barcelona'},
    {nombre: 'Carlos', edad: 22, ciudad: 'Sevilla'},
    {nombre: 'María', edad: 24, ciudad: 'Valencia'},
    // Agrega más datos aquí
];

let selectedRow = null;

function loadTableData(data) {
    const tableBody = document.querySelector('#dataTable tbody');
    tableBody.innerHTML = '';

    data.forEach((item, index) => {
        let row = document.createElement('tr');

        row.innerHTML = `
            <td>${item.nombre}</td>
            <td>${item.edad}</td>
            <td>${item.ciudad}</td>
        `;

        row.addEventListener('click', () => selectRow(row, index));

        tableBody.appendChild(row);
    });
}

function selectRow(row, index) {
    if (selectedRow) {
        selectedRow.classList.remove('selected-row');
    }
    selectedRow = row;
    selectedRow.classList.add('selected-row');
    selectedRow.dataset.index = index;
}

function mostrar() {
    if (selectedRow) {
        const index = selectedRow.dataset.index;
        const item = data[index];
        alert('Nombre: ' + item.nombre + '\nEdad: ' + item.edad + '\nCiudad: ' + item.ciudad);
    } else {
        alert('Por favor, selecciona una fila primero.');
    }
}

function actualizar() {
    if (selectedRow) {
        const index = selectedRow.dataset.index;
        const item = data[index];
        alert('Actualizar datos de ' + item.nombre);
    } else {
        alert('Por favor, selecciona una fila primero.');
    }
}

function editar() {
    if (selectedRow) {
        const index = selectedRow.dataset.index;
        const item = data[index];
        alert('Editar datos de ' + item.nombre);
    } else {
        alert('Por favor, selecciona una fila primero.');
    }
}

// Cargar los datos al iniciar la página
document.addEventListener('DOMContentLoaded', function() {
    loadTableData(data);
});
