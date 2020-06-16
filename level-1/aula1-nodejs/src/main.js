const express = require('express');
const { uuid } = require('uuidv4');

const app = express();
app.use(express.json());

const projects = [];

app.get('/projects', (request, response) => {
  const { title } = request.query;

  const results = title
    ? projects.filter(item => item.title.includes(title))
    : projects

  return response.json(results);
});

app.post('/projects', (request, response) => {
  const { title, owner } = request.body;
  const project = { id: uuid(), title, owner };

  projects.push(project);

  return response.json(project);
});

app.put('/projects/:id', (request, response) => {
  const { id } = request.params;
  const { title, owner } = request.body;

  const projectIndex = projects.findIndex(item => item.id === id);

  if (projectIndex < 0) {
    return response.status(404).json({ error: "project not found" });
  }
  const newProject = { id, title, owner };
  projects[projectIndex] = newProject;

  return response.json(newProject);
});

app.delete('/projects/:id', (request, response) => {
  const { id } = request.params;
  const { title, owner } = request.body;

  const projectIndex = projects.findIndex(item => item.id === id);

  if (projectIndex < 0) {
    return response.status(404).json({ error: "project not found" });
  }

  projects.splice(projectIndex, 1);

  return response.status(204).json();
});

app.listen(3333, () => {
  console.log('> Servidor Iniciado! 🚀');
});