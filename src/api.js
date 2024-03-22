
// В файле, где находятся данные
const fetchTask = () => {
	return axios
		.get('http://localhost:3001/tasks')
		.then(response => {
			const data = response.data;
			return { data }; // Возвращаем объект с данными
		})
		.catch(error => {
			console.error(error);
			return { error }; // Возвращаем объект с ошибкой, если что-то пошло не так
		});
}

const fetchData = async () => {
	const { data, error } = await fetchTask();
	if (error) {
		// Обработка ошибки
		console.error(error);
		return null;
	}
	return data;
}

export const myData = await fetchData();


export const createTask = task => {
	axios
		.post('http://localhost:3001/tasks', task)
		.then(response => {
			const addedUser = response.data
			console.log(`POST: user is added`, addedUser)

		})
		.catch(error => console.error(error))
}


export const deleteTask = (id) => {
	console.log("00", id);
	axios
		.delete('http://localhost:3001/tasks/del', { data: { id } })
		.then(response => {
			console.log(`DELETE: user is removed`, id)
		})
		.catch(error => console.error(error))
}
