const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

let todos = [
  { id: 1, title: "Conhecer o contrato da API", completed: true },
  { id: 2, title: "Implementar o primeiro paradigma", completed: false }
];
let nextId = 3;

app.get('/health', (req, res) => {
  res.status(200).json({ status: "OK", paradigma: "Imperativo" });
});

app.get('/todos', (req, res) => {
  res.status(200).json(todos);
});

app.post('/todos', (req, res) => {
  const body = req.body;
  const title = body ? body.title : undefined;

  if (!title || typeof title !== 'string' || title.trim() === '') {
    return res.status(400).json({ error: "O título da tarefa é obrigatório." });
  }

  const newTodo = {
    id: nextId,
    title: title.trim(),
    completed: false
  };

  nextId++;
  todos.push(newTodo);

  res.status(201).json(newTodo);
});

// Suporta tanto /toggle (utilizado pelo front-end) quanto /complete (mencionado no slide da Aula 04)
const toggleHandler = (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ error: "O ID fornecido é inválido." });
  }

  let todoEncontrado = null;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
      todoEncontrado = todos[i];
      break;
    }
  }

  if (!todoEncontrado) {
    return res.status(404).json({ error: "Tarefa não encontrada." });
  }

  todoEncontrado.completed = !todoEncontrado.completed;

  res.status(200).json(todoEncontrado);
};

app.patch('/todos/:id/toggle', toggleHandler);
app.patch('/todos/:id/complete', toggleHandler);

app.delete('/todos/:id', (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ error: "O ID fornecido é inválido." });
  }

  let index = -1;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
      index = i;
      break;
    }
  }

  if (index === -1) {
    return res.status(404).json({ error: "Tarefa não encontrada." });
  }

  todos.splice(index, 1);

  res.status(204).end();
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`================================================`);
  console.log(`🚀 API Imperativa rodando em: http://localhost:${PORT}`);
  console.log(`================================================`);
});
