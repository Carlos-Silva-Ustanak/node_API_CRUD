const taskModel = require('../models/tasksModel');

const getAll = async (_request, response) => {
    const tasks = await taskModel.getAll()
    return response.status(200).json(tasks[0]);
};

const createTasks = async (request, response) => {
    const createTask = await taskModel.createTasks(request.body);
    return response.status(201).json({ insertId: createTask.insertId });
}

const deleteTask = async (request, response) => {
    const { id } = request.params;

    await taskModel.deleteTask(id)
    return response.status(204).json()

}

const updateTask = async (request, response) => {
    const { id } = request.params;

    await taskModel.updateTask(id, request.body);
    return response.status(204).json({message:"deu bom, meu consagrado!"});

}

module.exports = {
    getAll,
    createTasks,
    deleteTask,
    updateTask
};