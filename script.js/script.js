document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');

            // Ocultar todos los paneles de contenido
            tabContents.forEach(content => {
                content.classList.remove('activa');
            });

            // Desmarcar todos los botones
            tabButtons.forEach(btn => {
                btn.classList.remove('activa');
            });

            // Activar pestaña y panel correspondientes
            const activeContent = document.getElementById(targetId);
            if (activeContent) {
                activeContent.classList.add('activa');
            }
            button.classList.add('activa');
        });
    });
});