const offset = 0;
const limit = 10;
const url = `https://hp-api.onrender.com/api/characters/students?offset=${offset}&limit=${limit}`;

function convertStudentToHtml(student) {
    return `
    <li>
        <span class="name">${student.name}</span>
        <img src="${student.image}" alt="${student.name}" srcset="">
        <span class="alternate_names">${student.alternate_names[0]}</span>
    </li>
    `
}

const studentList = document.getElementById('studentList');

fetch(url)
    .then((response) => response.json())
    .then((students) => {
        for (let i = 0; i < students.length; i++) {
            const student = students[i];
            studentList.innerHTML += (convertStudentToHtml(student));
        }
    })
    .catch((error) => console.error (error))
    .finally(() => console.log("Requisição concluída!"))

