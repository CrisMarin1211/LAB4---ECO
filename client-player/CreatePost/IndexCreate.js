document.addEventListener('DOMContentLoaded', () => {
	console.log('DOM completamente cargado y analizado');

	const createPostButton = document.querySelector('#create-post-button');
	createPostButton.addEventListener('click', () => {
		console.log('Botón de Crear Post fue clicado');

		// Simular un inicio de sesión si no hay usuario guardado
		if (!localStorage.getItem('name')) {
			localStorage.setItem('name', 'usuarioEjemplo'); // Simulación de inicio de sesión
			console.log('Usuario simulado guardado en localStorage.');
		}

		// Obtener los valores del formulario
		const user = localStorage.getItem('name'); // Nombre de usuario guardado durante el login
		const title = document.querySelector('#title').value;
		const description = document.querySelector('#description').value;
		const urlImage = document.querySelector('#urlImage').value;

		// Verificar que el usuario esté autenticado
		if (!user) {
			alert('Debes iniciar sesión para crear un post.');
			return;
		}

		// Verificar que los campos requeridos no estén vacíos
		if (!title || !description) {
			alert('El título y la descripción son obligatorios.');
			return;
		}

		// Recuperar los posts existentes en el localStorage
		const postsGuardados = JSON.parse(localStorage.getItem('posts')) || [];

		// Crear un nuevo objeto de post
		const nuevoPost = {
			user: user,
			title: title,
			description: description,
			urlImage: urlImage,
			createdAt: new Date().toISOString(), // Fecha de creación del post
		};

		// Agregar el nuevo post al array de posts
		postsGuardados.push(nuevoPost);

		// Guardar el array actualizado de posts en el localStorage
		localStorage.setItem('posts', JSON.stringify(postsGuardados));

		// Mostrar mensaje de éxito
		alert('Post creado con éxito');

		// Redirigir a la pantalla principal o limpiar el formulario
		window.location.href = './IndexCreate.html';
	});
});
