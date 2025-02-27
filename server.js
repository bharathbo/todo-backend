const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

let todos = []; // in-memory storage



// get all todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

// add a new todo
app.post("/todos", (req, res) => {
  const { task } = req.body;
  if (!task) return res.status(400).json({ error: "Task is required" });

  const newTodo = { id: todos.length + 1, task };
  todos.push(newTodo);
  res.json(newTodo);
});

// delete a todo
app.delete("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter(todo => todo.id !== id);
  res.json({ message: "Deleted successfully" });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
