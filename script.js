document.getElementById('darkModeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const buttonText = document.body.classList.contains('dark-mode') ? 'Modo Oscuro' : 'Modo Claro';
    document.getElementById('darkModeToggle').textContent = buttonText;
    alert(`Has cambiado a ${buttonText}`);
});
