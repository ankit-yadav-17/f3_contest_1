
// Initialize an array to store the employees
let employees = [];

// Get form and employees container elements
const form = document.getElementById('employee-form');
const employeesContainer = document.getElementById('employee-list');
const succ_err = document.getElementById("succ-err");
const button = document.getElementById("submit")

// Handle form submission
button.addEventListener('click', function(e) {
  e.preventDefault();

  // Get input values
  const name = document.getElementById('name').value;
  const profession = document.getElementById('profession').value;
  const age = document.getElementById('age').value;

  // Validate input values
  if (!name || !profession || !age) {
    showErrorMessage('ERROR: Please Make sure All fields are filled before submit!');
    return;
  }

  // Create a new employee object
  const employee = {
    id: employees.length + 1,
    name: name,
    profession: profession,
    age: age
  };

  // Add the employee to the array
  employees.push(employee);

  // Clear form inputs
  form.reset();

  // Display success message
  showSuccessMessage('SUCCESS: Employee Added!');

  // Update the list of employees
  displayEmployees();
});

// Function to display the list of employees
function displayEmployees() {
  // Clear the employees container
  employeesContainer.innerHTML = '';

  // Loop through the employees array
  employees.forEach(function(employee) {
    // Create a new employee element
    const employeeElement = document.createElement('div');
    employeeElement.classList.add('employee');
    employeeElement.innerHTML = `
      <p> ${employee.id}</p>
      <p><strong>Name:</strong> ${employee.name}</p>
      <p><strong>Profession:</strong> ${employee.profession}</p>
      <p><strong>Age:</strong> ${employee.age}</p>
      <button class="deleteBtn" data-id="${employee.id}">Delete Employee</button>
    `;

    // Add delete button event listener
    const deleteBtn = employeeElement.querySelector('.deleteBtn');
    deleteBtn.addEventListener('click', function() {
      deleteEmployee(employee.id);
    });

    // Append the employee element to the container
    employeesContainer.appendChild(employeeElement);
  });
}

// Function to delete an employee
function deleteEmployee(id) {
  // Find the index of the employee in the array
  const index = employees.findIndex(function(employee) {
    return employee.id === id;
  });

  if (index !== -1) {
    // Remove the employee from the array
    employees.splice(index, 1);

    // Update the list of employees
    displayEmployees();
  }
}

// Function to display error message

function showErrorMessage(message) {
    succ_err.innerHTML =''
  const errorMessage = document.createElement('p');
  errorMessage.classList.add('error');
  errorMessage.textContent = message;
  succ_err.appendChild(errorMessage);

  setTimeout(function() {
    succ_err.innerHTML = '';
    succ_err.classList.remove('error');
  },3000)
}

// Function to display success message
function showSuccessMessage(message) {
    succ_err.innerHTML='';
  const successMessage = document.createElement('p');
  successMessage.classList.add('success');
  successMessage.textContent = message;
  succ_err.appendChild(successMessage);

  setTimeout(function(){
    succ_err.innerHTML = '';
    succ_err.classList.remove('success');
  },3000)
}
