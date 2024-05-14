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

    hpApi.getStudents().then((students) => {
        const listStudents = [];

        for (let i = 0; i < students.length; i++) {
            const student = students[i];
            listStudents.push(convertStudentToHtml(student));
        }

        console.log(listStudents);
    })
    .catch((error) => console.error (error));
    .finally(() => console.log("Requisição concluída!"));