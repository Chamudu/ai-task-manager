const express = require("express");
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let tasks = [
    {id: 1, title: "Learn React", completed: false, aiSuggestion: "Start with components"},
    {id: 2, title: "Build an API", completed: false, aiSuggestion: "Use Express.js"},
    {id: 3, title: "Get hired", completed: false, aiSuggestion: "Polish your resume"}
];

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

app.post('/tasks', (req, res) => {
    const newData = req.body;
    
    if(!newData.title) {
        return res.status(400).json({error: "Title is reuired"})
    }

    const taskObj = {
        id: tasks.length+1,
        title: newData.title,
        completed: false,
        aiSuggestion: "Break this down to smaller steps" //mock AI
    };

    tasks.push(taskObj);
    res.status(201).json(taskObj);
});



