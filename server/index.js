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
})

app.get('/tasks', (req, res) => {
    res.json(tasks);
})

app.listen(PORT, () => {
    console.log('Server is running of http://localhost:' + PORT);
});
