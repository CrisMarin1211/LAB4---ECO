const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const db = {
	players: [], // Aquí guardaremos los usuarios registrados
	posts: [], // Aquí guardaremos los posts
};

// Endpoint para obtener todos los usuarios
app.get('/users', (request, response) => {
	response.send(db.players);
});

// Endpoint para registrar un nuevo usuario
app.post('/user', (request, response) => {
	const { body } = request;
	db.players.push(body);
	response.status(201).send(body);
});

// Endpoint para hacer login
app.post('/login', (request, response) => {
	const { user, password } = request.body;
	const foundUser = db.players.find((player) => player.user === user && player.password === password);
	if (foundUser) {
		response.status(200).send({ message: 'Login exitoso' });
	} else {
		response.status(401).send({ message: 'Credenciales incorrectas' });
	}
});

// Endpoint para crear un post
app.post('/create-post', (request, response) => {
	const { user, title, description, urlImage } = request.body;
	const newPost = { user, title, description, urlImage };
	db.posts.push(newPost);
	response.status(201).send(newPost);
});

// Endpoint para obtener todos los posts
app.get('/posts', (request, response) => {
	response.send(db.posts);
});

app.listen(5050, () => {
	console.log(`Server is running on http://localhost:${5050}`);
});
