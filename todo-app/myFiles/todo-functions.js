//Fetch existing todos from localStorage
//getSavedTodos


//Save todos to localStorage
//saveTodos

const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

//Render application todos based on filters
//renderTodos

//Get the DOM elements for an individual note
//generateTodoDOM

//Get the DOM elements for list summary
//generateSummaryDOM
