// todosLib.js

let todosArray = [];
let nextId = 1;

function addOne(task, completed, dueDate) {
    if (!task || completed === undefined || !dueDate) return false;

    const newTodo = {
        id: nextId++,
        task,
        completed,
        dueDate
    };

    todosArray.push(newTodo);
    return newTodo;
}

function getAll() {
    return todosArray;
}

function findById(id) {
    const numericId = Number(id);
    const todo = todosArray.find(item => item.id === numericId);
    return todo || false;
}

function updateOneById(id, updatedData) {
    const todo = findById(id);
    if (!todo) return false;

    if (updatedData.task) todo.task = updatedData.task;
    if (updatedData.completed !== undefined) todo.completed = updatedData.completed;
    if (updatedData.dueDate) todo.dueDate = updatedData.dueDate;

    return todo;
}

function deleteOneById(id) {
    const todo = findById(id);
    if (!todo) return false;

    const initialLength = todosArray.length;
    todosArray = todosArray.filter(todo => todo.id !== Number(id));
    return todosArray.length < initialLength;
}

if (require.main === module) {
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
