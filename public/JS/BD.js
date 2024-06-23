function fetchDatos() {
    fetch('/datos')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('data-table');
            tableBody.innerHTML = '';
            data.forEach(row => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${row.nombre}</td>
                    <td>${row.segundo_nombre}</td>
                    <td>${row.apellido}</td>
                    <td>${row.segundo_apellido}</td>
                    <td>${row.fecha_de_nacimiento}</td>
                    <td>${row.sexo}</td>
                    <td>${row.departamento}</td>
                    <td>${row.municipio}</td>
                    <td>${row.discapacidad}</td>
                    <td>${row.tipo_sangre}</td>
                    <td>${row.lugar_de_nacimiento}</td>
                    <td>${row.correo_electronico}</td>
                    <td>${row.telefono}</td>
                    <td>${row.residencia}</td>
                    <td>
                        <button class="button" onclick="editar()">Editar</button>
                        <button class="button" onclick="actualizar()">Actualizar</button>
                    </td>
                `;
                tableBody.appendChild(tr);
            });
        });
}

function editar() {
    alert('Editar datos');
    // Lógica para editar los datos
}

function actualizar() {
    alert('Actualizar datos');
    // Lógica para actualizar los datos
}

document.addEventListener('DOMContentLoaded', fetchDatos);
