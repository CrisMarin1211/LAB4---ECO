document.addEventListener('DOMContentLoaded', () => {
	const formRegister = document.getElementById('register-form');
	formRegister.addEventListener('submit', (event) => {
		event.preventDefault();

		const username = document.getElementById('username').value;
		const email = document.getElementById('email').value;
		const password = document.getElementById('password').value;

		// Simulación del proceso de registro
		const users = JSON.parse(localStorage.getItem('users')) || [];

		// Comprobar si el usuario ya existe
		const userExists = users.some((user) => user.email === email);

		if (userExists) {
			alert('El correo electrónico ya está registrado.');
		} else {
			// Guardar nuevo usuario
			users.push({ username, email, password });
			localStorage.setItem('users', JSON.stringify(users));

			alert('Registro exitoso');
			formRegister.reset();
			window.location.href = '../index.html';
		}
	});
});
