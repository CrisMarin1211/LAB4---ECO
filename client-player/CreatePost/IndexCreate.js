document.querySelector('#create-post-button').addEventListener('click', () => {
	const user = 'nombreDeUsuario'; // Puedes obtener esto del estado de la aplicación después de que el usuario haga login
	const title = document.querySelector('#title').value;
	const description = document.querySelector('#description').value;
	const urlImage = document.querySelector('#urlImage').value;

	fetch('http://localhost:5050/create-post', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ user, title, description, urlImage }),
	})
		.then((response) => response.json())
		.then((data) => {
			console.log('Post creado:', data);
			// Mostrar mensaje de éxito o redirigir a la pantalla principal
			alert('Post creado con éxito');
			window.location.href = 'main.html'; // Redirige a la pantalla principal
		})
		.catch((error) => {
			console.error('Error:', error);
			alert('Hubo un problema al crear el post');
		});
});
