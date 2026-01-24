const express = require("express");
const cors = require('cors');
const { generateSuggestion } = require('./aiService');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let tasks = [];

app.get('/', (req, res) => {
    res.send("AI Task Manager API is running");
});

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.put('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const {title} = req.body;

    if (!title) {
        return res.status(400).json({ error: "Title is required"});
    }

    const task = tasks.find(t => t.id === id);
    if (!task) {
        return res.status(404).json({error: "Task not found"});
    }

    task.title = title;
    res.json(task);
});

app.listen(PORT, () => {
    console.log('Server is running of http://localhost:' + PORT);
});

app.delete('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);

    tasks = tasks.filter(task => task.id != id);

    res.json({message: "Task Deleted"});
});

app.post('/tasks', async (req, res) => {
    const {title, aiMode} = req.body;

    if(!title) {
        return res.status(400).json({error: "Title is reuired"})
    }
    

    const taskObj = {
        id: tasks.length+1,
        title: title,
        completed: false,
        aiSuggestion: await generateSuggestion(title, aiMode || 'local')
    };

    tasks.push(taskObj);
    res.status(201).json(taskObj);
});



