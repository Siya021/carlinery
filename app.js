const studentBtn = document.getElementById('student-btn');
const teacherBtn = document.getElementById('teacher-btn');
const studentDashboard = document.getElementById('student-dashboard');
const teacherDashboard = document.getElementById('teacher-dashboard');

studentBtn.addEventListener('click', () => {
  studentDashboard.classList.remove('hidden');
  teacherDashboard.classList.add('hidden');
});

teacherBtn.addEventListener('click', () => {
  teacherDashboard.classList.remove('hidden');
  studentDashboard.classList.add('hidden');
});