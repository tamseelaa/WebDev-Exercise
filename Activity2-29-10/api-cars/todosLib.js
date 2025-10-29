// todosLib.js

let todosArray = [];
let nextId = 1;
// Check if any parameter is empty or undefined
function addOne(task, completed, dueDate) {
    if (!task || completed === undefined || !dueDate) return false;

    const newTodo = {
        id: nextId++,
        task,
        completed,
        dueDate
    };
    todosArray.push(newTodo);
    // Returns the added car object
    return newTodo;
}

function getAll() {
    return todosArray;
}

function findById(id) {
    const numericId = Number(id);// Converts the ID to a number
    const todo = todosArray.find(item => item.id === numericId);
    return todo || false;
}

function updateOneById(id, updatedData) {
    const todo = findById(id);
    if (!todo) return false;// Returns false if the car with the provided ID is not found

    // Update properties only if they are provided in updatedData
    if (updatedData.task) todo.task = updatedData.task;
    if (updatedData.completed !== undefined) todo.completed = updatedData.completed;
    if (updatedData.dueDate) todo.dueDate = updatedData.dueDate;

    return todo;
}

function deleteOneById(id) {
    const todo = findById(id);
    if (!todo) return false; //Return false if the todo with the provided ID  is not found
    //Delete the data if the ID matched with the existing todo ID
    const initialLength = todosArray.length;
    todosArray = todosArray.filter(todo => todo.id !== Number(id));
    return todosArray.length < initialLength;
}

if (require.main === module) {
    //This is the main functionality
    let result = addOne("Buy groceries", false, "2025-08-30");
    console.log(result);
    result = addOne("Pay bills", false, "2025-09-10");
    console.log(result);

    console.log("getAll called:", getAll());
    console.log("findById called:", findById(1));

    console.log("updateOneById called:", updateOneById(1, { completed: true }));
    console.log("findById after update:", findById(1));

    console.log("deleteOneById called:", deleteOneById(1));
    console.log("findById after delete:", findById(1));
}

const ToDos = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById
};

module.exports = ToDos;
