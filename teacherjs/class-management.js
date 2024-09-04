// const firstNameInput = document.getElementById('fname');
// const lastNameInput = document.getElementById('lname');
// const genderInput = document.getElementById('gender');
// const studentMarkInput = document.getElementById('studentMark');
// const studentTable = document.getElementById('student-list');
// const saveBtn = document.getElementById('save')
 
// // let chartInstance = null;


// document.addEventListener("DOMContentLoaded", function(event) {
//     document.getElementById('updateProductButton').click();
// });

// let students = JSON.parse(localStorage.getItem('students')) || [];

// function loadStudents() {
//     const storedStudents = localStorage.getItem('students');
//     if (storedStudents) {
//         students = JSON.parse(storedStudents);
//     }
//     displayStudents();

// }

// function saveStudents() {
//     localStorage.setItem('students', JSON.stringify(students));
// }

// function addStudent(firstName, lastName,gender, studentMark) {
//     const newStudent = {
//         id: Date.now(),
//         firstName:firstName,
//         lastName:lastName,
//         gender:gender,
//         studentMark:studentMark

//     };
//     students.push(newStudent);
//     saveStudents();
//     displayStudents();
// }

// saveBtn.addEventListener('click', function(){
//     addStudent(firstNameInput.value, lastNameInput.value,genderInput.value, studentMarkInput.value);
// })

// function displayStudents() {
//     const studentList = document.getElementById('list-display');
//     // console.log('studentList:', studentList); // Debugging statement
//     if (!studentList) {
//         console.error('Element with ID studentList not found.');
//         return;
//     }
//     studentList.innerHTML = '';
//     console.log(students);
    


//         studentList.appendChild(row);
//     });
// }


// function editStudent(id) {
//     const student = students.find((s) => s.id === id);
//     if (student) {
//       const firstNameInput = document.getElementById('fname');
//       const lastNameInput = document.getElementById('lname');
//       const genderInput = document.getElementById('gender');
//       const studentMarkInput = document.getElementById('studentMark');
  
//       firstNameInput.value = student.firstName;
//       lastNameInput.value = student.lastName;
//       genderInput.value = student.gender;
//       studentMarkInput.value = student.studentMark;
  
//       const updateProductModal = document.getElementById('updateProductModal');
//       updateProductModal.setAttribute('data-student-id', id);
//       updateProductModal.classList.remove('hidden');
//     }
//   }

//   function updateStudent(id, firstName, lastName, gender, studentMark) {
//     const studentToUpdate = students.find((student) => student.id === id);
//     if (studentToUpdate) {
//       studentToUpdate.firstName = firstName;
//       studentToUpdate.lastName = lastName;
//       studentToUpdate.gender = gender;
//       studentToUpdate.studentMark = studentMark;
  
//       localStorage.setItem('students', JSON.stringify(students));
//       console.log(`Student ${id} updated successfully!`);
//     } else {
//       console.error(`Student ${id} not found!`);
//     }
//     loadStudents();
//   }
  



// function confirmDelete(id) {
//     document.getElementById('deleteModal').setAttribute('data-student-id', id);
//     document.getElementById('deleteModal').classList.remove('hidden');
// }

// function deleteStudent() {
//     const id = parseInt(document.getElementById('deleteModal').getAttribute('data-student-id'));
//     students = students.filter(s => s.id !== id);
//     document.getElementById('deleteModal').classList.add('hidden');
//     saveStudents();
//     displayStudents();
// }

// Get the input fields
const firstNameInput = document.getElementById('fname');
const lastNameInput = document.getElementById('lname');
const genderInput = document.getElementById('gender');
const studentMarkInput = document.getElementById('studentMark');
const studentTable = document.getElementById('student-list');
const saveBtn = document.getElementById('save');

// Initialize the students array
let students = JSON.parse(localStorage.getItem('students')) || [];

// Function to load students from local storage
function loadStudents() {
  const storedStudents = localStorage.getItem('students');
  if (storedStudents) {
    students = JSON.parse(storedStudents);
  }
  displayStudents();
}

// Function to display students in the table
function displayStudents() {
  studentTable.innerHTML = '';
  students.forEach((student) => {
        
    const row = document.createElement('tr');
    row.classList.add('border-b', 'dark:border-gray-700');
    row.innerHTML = `
        <td class="px-4 py-3">${student.firstName}</td>
        <td class="px-4 py-3">${student.lastName}</td>
        <td class="px-4 py-3">${student.gender}</td>
        <td class="px-4 py-3">${student.studentMark}</td>
        <td class="px-4 py-3 flex items-center justify-end">
            <button onclick="editStudent(${student.id})" data-modal-target="updateProductModal" data-modal-toggle="updateProductModal" class="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-2">Edit</button>
            <button onclick="confirmDelete(${student.id})" data-modal-target="deleteModal" data-modal-toggle="deleteModal" class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</button>
        </td>
    `;
    studentTable.appendChild(row);
  });
}

// Function to add a new student
function addStudent() {
  const newStudent = {
    id: Date.now(),
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    gender: genderInput.value,
    studentMark: studentMarkInput.value,
  };
  students.push(newStudent);
  saveStudents();
  displayStudents();
  clearInputs();
}

// Function to edit a student
function editStudent(id) {
  const studentIndex = students.findIndex((student) => student.id === id);
  if (studentIndex !== -1) {
    const student = students[studentIndex];
    firstNameInput.value = student.firstName;
    lastNameInput.value = student.lastName;
    genderInput.value = student.gender;
    studentMarkInput.value = student.studentMark;
    saveBtn.textContent = 'Update';
    saveBtn.onclick = () => {
      student.firstName = firstNameInput.value;
      student.lastName = lastNameInput.value;
      student.gender = genderInput.value;
      student.studentMark = studentMarkInput.value;
      saveStudents();
      displayStudents();
      clearInputs();
      saveBtn.textContent = 'Save';
      saveBtn.onclick = addStudent;
    };
  }
}

// Function to delete a student
// function deleteStudent(id) {
//   const studentIndex = students.findIndex((student) => student.id === id);
//   if (studentIndex !== -1) {
//     students.splice(studentIndex, 1);
//     saveStudents();
//     displayStudents();
//   }
// }

// Function to confirm delete
function confirmDelete(id) {
  const deleteModal = document.getElementById('deleteModal');
  
  deleteModal.classList.add('show');
  
  const deleteBtn = document.getElementById('deleteBtn');
  
  deleteBtn.addEventListener('click', () => {
    deleteStudent(id);
    deleteModal.classList.remove('show');
  });
}

// Function to delete a student
function deleteStudent(id) {
  const studentIndex = students.findIndex((student) => student.id === id);
  
  if (studentIndex !== -1) {
    students.splice(studentIndex, 1);
    localStorage.setItem('students', JSON.stringify(students));
    displayStudents();
    console.log(`Student ${id} deleted successfully!`);
  }
  displayStudents();
}

// Function to save students to local storage
function saveStudents() {
  localStorage.setItem('students', JSON.stringify(students));
}

// Function to clear input fields
function clearInputs() {
  firstNameInput.value = '';
  lastNameInput.value = '';
  genderInput.value = '';
  studentMarkInput.value = '';
}

// Event listeners
saveBtn.onclick = addStudent;
studentTable.addEventListener('click', (e) => {
  if (e.target.classList.contains('edit-btn')) {
    const id = e.target.dataset.id;
    editStudent(id);
  } else if (e.target.classList.contains('delete-btn')) {
    const id = e.target.dataset.id;
    deleteStudent(id);
  }
});

// Load students on page load
loadStudents();
