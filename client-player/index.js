document.getElementById('login-button').addEventListener('click', loginUser);
document.getElementById('register-button').addEventListener('click', registerUser);

async function loginUser() {
	renderLoadingState();
	try {
		// Aquí iría tu lógica para login, si es necesario
		// Por ejemplo, validar al usuario, etc.

		// Redirigir a la página de inicio o dashboard después del login
		window.location.href = 'indexLogin.html'; // Cambia esta ruta según sea necesario
	} catch (error) {
		renderErrorState();
	}
}


async function registerUser() {
	renderLoadingState();
	try {
		const player = {
			name: 'Jonh Doe',
			profilePicture: 'https://avatar.iran.liara.run/public/13',
		};
		const response = await fetch('http://localhost:5050/user', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(player),
		});
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		renderData();
		// Redirigir a la página de bienvenida después del registro
		window.location.href = 'register.html'; // Cambia esta ruta según sea necesario
	} catch (error) {
		renderErrorState();
	}
}

function renderErrorState() {
	const container = document.getElementById('data-container');
	container.innerHTML = ''; // Clear previous data
	container.innerHTML = '<p>Failed to load data</p>';
	console.log('Failed to load data');
}

function renderLoadingState() {
	const container = document.getElementById('data-container');
	container.innerHTML = ''; // Clear previous data
	container.innerHTML = '<p>Loading...</p>';
	console.log('Loading...');
}

function renderData(data) {
	const container = document.getElementById('data-container');
	container.innerHTML = ''; // Clear previous data
	const div = document.createElement('div');
	div.className = 'item';
	div.innerHTML = 'Player created';
	container.appendChild(div);
}
