// Sample Data
const students = [
    { id: 1, name: "Alice", class: "A", graduationYear: 2024 },
    { id: 2, name: "Bob", class: "B", graduationYear: 2025 },
    { id: 3, name: "Charlie", class: "A", graduationYear: 2023 },
    { id: 4, name: "David", class: "C", graduationYear: 2024 },
    { id: 5, name: "Eve", class: "B", graduationYear: 2023 },
  ];
  
  // Dashboard Calculation
  function updateDashboard() {
    const total = students.length;
    const graduates = students.filter(student => student.graduationYear < 2024).length;
    const current = total - graduates;
  
    document.getElementById("total-students").textContent = total;
    document.getElementById("current-students").textContent = current;
    document.getElementById("graduates").textContent = graduates;
  }
  
  // Render Classes and Students
  function renderClasses() {
    const classContainer = document.getElementById("class-container");
    classContainer.innerHTML = "";
  
    const classes = [...new Set(students.map(student => student.class))];
  
    classes.forEach(className => {
      const classCard = document.createElement("div");
      classCard.classList.add("class-card");
  
      const classHeader = document.createElement("h3");
      classHeader.textContent = `Class ${className}`;
      classCard.appendChild(classHeader);
  
      const studentList = document.createElement("ul");
      students
        .filter(student => student.class === className)
        .forEach(student => {
          const studentItem = document.createElement("li");
          studentItem.textContent = `${student.name} (Graduation: ${student.graduationYear})`;
          studentList.appendChild(studentItem);
        });
  
      classCard.appendChild(studentList);
      classContainer.appendChild(classCard);
    });
  }
  
  // Filter Students by Graduation Year
  function filterByGradYear() {
    const year = parseInt(document.getElementById("grad-year").value);
    if (!year) return;
  
    const filteredStudents = students.filter(student => student.graduationYear === year);
    alert(`Filtered Students: ${filteredStudents.map(s => s.name).join(", ") || "None"}`);
  }
  
  // Initialize
  document.getElementById("filter-btn").addEventListener("click", filterByGradYear);
  
  function init() {
    updateDashboard();
    renderClasses();
  }
  
  init();