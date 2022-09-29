// DOM Elements
const studentForm = document.getElementById("studentForm");
const studentsContainer = document.querySelector(".students");
const nameInput = studentForm["name"];
const ageInput = studentForm["age"];
const markInput = studentForm["mark"];

/* 
{
  name: '',
  age: number,
  mark: number
}
*/

const students = JSON.parse(localStorage.getItem("students")) || [];

const addStudent = (name, age, mark) => {
  students.push({
    name,
    age,
    mark,
  });

  localStorage.setItem("students", JSON.stringify(students));

  return { name, age, mark };
};

const createStudentElement = ({ name, age, mark }) => {
  // Create elements
  const studentDiv = document.createElement("div");
  const studentName = document.createElement("h2");
  const studentAge = document.createElement("p");
  const studentMark = document.createElement("p");

  // Fill the content
  studentName.innerText = "Student name: " + name;
  studentAge.innerText = "Student age: " + age;
  studentRoll.innerText = "Student mark: " + mark;

  // Add to the DOM
  studentDiv.append(studentName, studentAge, studentMark);
  studentsContainer.appendChild(studentDiv);

  studentsContainer.style.display = students.length === 0 ? "none" : "flex";
};

studentsContainer.style.display = students.length === 0 ? "none" : "flex";

students.forEach(createStudentElement);

studentForm.onsubmit = e => {
  e.preventDefault();

  const newStudent = addStudent(
    nameInput.value,
    ageInput.value,
    markInput.value
  );

  createStudentElement(newStudent);

  nameInput.value = "";
  ageInput.value = "";
  markInput.value = "";
};