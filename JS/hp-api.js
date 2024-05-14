const hpApi = {}

hpApi.getStudents = (offset = 0, limit = 10) => {
    const url = `https://hp-api.onrender.com/api/characters/students?offset=${offset}&limit=${limit}`
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}
