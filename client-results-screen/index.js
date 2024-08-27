document.getElementById('fetch-users-button').addEventListener('click', fetchData);
document.getElementById('fetch-posts-button').addEventListener('click', fetchData);

async function fetchData() {
	const containerId = this.id === 'fetch-users-button' ? 'users-container' : 'posts-container';
	const container = document.getElementById(containerId);

	renderLoadingState(container);

	try {
		const endpoint = containerId === 'users-container' ? 'http://localhost:5050/users' : 'http://localhost:5050/posts';
		const response = await fetch(endpoint);
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		const data = await response.json();
		renderData(data, container);
	} catch (error) {
		console.error(error);
		renderErrorState(container);
	}
}

function renderErrorState(container) {
	container.innerHTML = '<p>Failed to load data</p>';
}

function renderLoadingState(container) {
	container.innerHTML = '<p>Loading...</p>';
}

function renderData(data, container) {
	container.innerHTML = '';

	if (data.length > 0) {
		data.forEach((item) => {
			const div = document.createElement('div');
			div.className = 'item';
			div.innerHTML = `<img src="${item.profilePicture || 'default.png'}" /><p>${item.name}</p>`;
			container.appendChild(div);
		});
	}
}
