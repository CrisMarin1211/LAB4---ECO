document.addEventListener('DOMContentLoaded', () => {
	const formLogin = document.getElementById('login-form');

	formLogin.addEventListener('submit', (event) => {
		event.preventDefault();

		const username = document.getElementById('username').value;
		const password = document.getElementById('lpassword').value;

		// Recuperar los usuarios guardados desde el localStorage
		const users = JSON.parse(localStorage.getItem('users')) || [];

		// Verificar si el usuario existe y la contraseña coincide
		const user = users.find((user) => user.username === username && user.password === password);

		if (user) {
			// Si el login es exitoso, redirigir a la página de creación de post
			window.location.href = '../CreatePost/IndexCreate.html';
		} else {
			// Si el login falla, mostrar una alerta
			alert('Login incorrecto. Por favor, verifica tus credenciales.');
		}

		formLogin.reset();
	});
});
