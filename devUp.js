function toggleMenu() {
    document.querySelector('.items')
    .classList.toggle('active');

}

const display = document.querySelector('.input-value');

function appendValue (value) {
    display.value += value;
    
}

function deleteValue () {
    display.value = '';
}

function cancelValue () {
    display.value = display.value.slice(0, -1);
}

function calculate () {
    try {
        let expression = display.value.replace(/×/g, '*').replace(/÷/g, '/');
        display.value = eval( expression);
    }
    catch {
        display.value = 'Errow';
    } 
    
}

function reciprocal() { // 1/x
    if (display.value) {
        display.value = 1 / parseFloat(display.value);
    }
}

function square () {
    if ( display.value) {
      display.value = Math.pow(parseFloat(display.value), 2)  
    }
}

function squareRoot() {
    if ( display.value) {
        display.value = Math.sqrt(parseFloat(display.value));
    }
}

function addSub() {
    if (display.value) {
        display.value = parseFloat(display.value) * -1;
    }
}

// Select elements
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoBox = document.querySelector('.todoList-box');

// Create a list container dynamically
const todoList = document.createElement('ul');
todoList.classList.add('todo-list');
todoBox.appendChild(todoList);

// Add new todo item when button clicked
todoButton.addEventListener('click', () => {
  const taskText = todoInput.value.trim();

  if (taskText !== '') {
    // Create list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    deleteBtn.classList.add('delete-btn');

    // Append delete button to list item
    li.appendChild(deleteBtn);

    // Add item to the list
    todoList.appendChild(li);

    // Clear input
    todoInput.value = '';

    // Delete functionality
    deleteBtn.addEventListener('click', () => {
      li.remove();
    });
  } else {
    alert('Please enter a to-do item!');
  }
});

//allow pressing Enter to add
todoInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    todoButton.click();
  }
});

