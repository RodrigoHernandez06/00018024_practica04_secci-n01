document.addEventListener('DOMContentLoaded', () => {
    const planes = [
        {id: 1, tarea: 'Atender al cliente'},
        {id: 2, tarea: 'Visitar la agencia fuera de la ciudad'},
        {id: 3, tarea: 'Llevar a mi hija al ballet'},
        {id: 4, tarea: 'Priorizar entregas de desarrollo'},
        {id: 5, tarea: 'Atender problemas remotos'},
        {id: 6, tarea: 'Lo que siga mi señora'},
    ]

    const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

    const contenedorBotones = document.getElementById('recordatorios');

   function renderizarBotones() {
        const boton = document.createElement('button');
        const texto = document.createElement('p')
        contenedorBotones.appendChild(boton);
        contenedorBotones.appendChild(texto);
   }

   dias.forEach(renderizarBotones)

}); 