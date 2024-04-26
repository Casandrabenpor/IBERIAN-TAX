function showForm(formId) {
    // Oculta todos los formularios
    document.querySelectorAll('form').forEach(form => {
        form.classList.add('d-none');
    });

    // Muestra el formulario correspondiente al ID dado
    document.getElementById(formId).classList.remove('d-none');
}