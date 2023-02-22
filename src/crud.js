const taskListDisplay = document.getElementById('data');
const inputValue = document.querySelector('.new-task');
const addButton = document.querySelector('.add-to-list');

let taskList = [];

const display = () => {
  taskListDisplay.innerHTML = '';
  taskList = JSON.parse(localStorage.getItem('localItem')) || [];
  taskList.forEach((element) => {
    const task = document.createElement('div');
    task.classList.add('task');
    task.innerHTML = `
    <input type:"checkbox">
    <input class:"edit" type=:"text" value="${element.description}">
    <div>
    <i id="${element.index}" class="fa-solid fa-trash-can"></i>
    </div>
    `;
    taskListDisplay.appendChild('task');
    const taskList2 = task.children[1];
    taskList2.addEventListener('change', () => {
      const listingData = document.getElementById('data');
      const arrayList = Array.from(listingData.children);
      const index = arrayList.indexOf(task);
      const taskLocal = JSON.parse(localStorage.getItem('localItem'));
      taskLocal[index].description = taskList2.value;
      localStorage.setItem('localItem', JSON.stringify('taskLocal'));
    });
  });
};
display();
