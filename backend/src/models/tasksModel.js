const connection = require('./connection');

const getAll = async () => {
    const tasks = await connection.execute("SELECT * FROM tasks");
    return tasks;
};

const createTasks = async (task) => {
    const { title } = task;
    const dataUTC = new Date(Date.now()).toUTCString()
    const query = 'INSERT INTO tasks(title, status, created_At) VALUES (?, ?, ?)'
    const [createdTask] = await connection.execute(query, [title, 'pedente', dataUTC])

    return createdTask;
}

const deleteTask = async (id) => {
    const query = 'DELETE FROM tasks  WHERE id = ?';
    const RemovedTask = await connection.execute(query, [id]);
    return RemovedTask;

}

const updateTask = async (id, task) => {
    const {title, status} = task;
    const query = 'UPDATE tasks SET title = ?, status = ? WHERE id = ?'; // Correção aqui
    const [updatedTask] = await connection.execute(query, [title, status, id]);
    return updatedTask;
}


module.exports = {
    getAll,
    createTasks,
    deleteTask, 
    updateTask
};