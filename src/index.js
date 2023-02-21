import './style.css';

const tasks = [
  {
    description: 'wash the dishes',
    completed: true,
    index: 1,
  },
  {
    description: 'complete to do list project',
    completed: false,
    index: 2,
  },
  {
    description: 'workout',
    completed: true,
    index: 3,
  },
];
const taskList = () => {
  const container = document.getElementById('data');
  for (let i = 0; i < tasks.length; i += 1) {
    const task = document.createElement('div');
    task.classList.add('list-to-do');
    task.innerHTML = `
    <div class="list-el">
    <input type="checkbox">
    <p>${tasks[i].description}</p>
    </div>
    `;
    container.appendChild(task);
  }
};
taskList();
