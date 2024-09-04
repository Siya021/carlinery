class Grades {
  constructor() {
    this.gradesData = [];
    this.gradesTable = document.getElementById('grades-table');
  }

  async fetchGradesData() {
    // API call to fetch grades data
    const response = await fetch('/api/grades');
    const data = await response.json();
    this.gradesData = data;
    this.renderGrades();
  }

  renderGrades() {
    this.gradesTable.innerHTML = '';
    this.gradesData.forEach((grade) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${grade.class}</td>
        <td>${grade.grade}</td>
        <td>${grade.comments}</td>
      `;
      this.gradesTable.appendChild(row);
    });
  }
}

const grades = new Grades();
grades.fetchGradesData();