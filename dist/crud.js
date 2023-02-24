"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["crud"],{

/***/ "./src/clear.js":
/*!**********************!*\
  !*** ./src/clear.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clear": () => (/* binding */ clear),
/* harmony export */   "clearing": () => (/* binding */ clearing)
/* harmony export */ });
const clearing = (e) => {
  const click = e.target.closest('.check');
  if (!click) return;

  const dataT = parseInt(click.getAttribute('data-set'), 10);
  const task = JSON.parse(localStorage.getItem('localItem')) || [];
  const find = task.find((todo) => todo.index === dataT);
  find.completed = !find.completed;
  localStorage.setItem('localItem', JSON.stringify(task));
};

const clear = () => {
  const set = JSON.parse(localStorage.getItem('localItem')) || [];
  const notDone = set.filter((taskList) => !taskList.completed);
  set.length = 0;
  let i = 1;
  notDone.forEach((element) => {
    element.index = i;
    i += 1;
  });
  set.push(...notDone);
  localStorage.setItem('localItem', JSON.stringify(set));
};


/***/ }),

/***/ "./src/crud.js":
/*!*********************!*\
  !*** ./src/crud.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clear.js */ "./src/clear.js");


const taskListDisplay = document.querySelector('#data');
const inputValue = document.querySelector('.new-task');
const addButton = document.querySelector('.add-to-list');
const deleteBtn = document.querySelector('.delete');

let taskList = [];

const display = () => {
  taskListDisplay.innerHTML = '';
  taskList = JSON.parse(localStorage.getItem('localItem')) || [];
  taskList.forEach((element) => {
    const task = document.createElement('div');
    const comp = element.completed ? 'checked' : '';
    task.classList.add('task');
    task.setAttribute('draggable', 'true');
    task.innerHTML = `
    <input type="checkbox" class="check" ${comp} id="check" data-set="${element.index}">
    <input class="edit" type="text" value="${element.description}">
    <div class="can">
    <i id="${element.index}" class="fa-solid fa-trash-can"></i>
    </div>
    `;
    taskListDisplay.appendChild(task);

    task.addEventListener('dragstart', (e) => {
      const index = Array.from(taskListDisplay.children).indexOf(e.target);
      e.dataTransfer.setData('text/plain', index);
    });

    const taskList2 = task.children[1];
    taskList2.addEventListener('change', () => {
      const listingData = document.querySelector('#data');
      const arrayList = Array.from(listingData.children);
      const index = arrayList.indexOf(task);
      const taskLocal = JSON.parse(localStorage.getItem('localItem'));
      taskLocal[index].description = taskList2.value;
      localStorage.setItem('localItem', JSON.stringify(taskLocal));
    });
  });
};

display();

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (inputValue.value === '') return;
  taskList = JSON.parse(localStorage.getItem('localItem')) || [];

  const object = {
    description: inputValue.value,
    index: taskList.length + 1,
    completed: false,
  };
  taskList.push(object);
  localStorage.setItem('localItem', JSON.stringify(taskList));

  inputValue.value = '';
  display();
});

const remove = (index) => {
  const removeList = taskList.filter((element) => element.index !== index);
  taskList.length = 0;
  let i = 1;
  removeList.forEach((element) => {
    element.index = i;
    i += 1;
  });
  taskList.push(...removeList);
  localStorage.setItem('localItem', JSON.stringify(taskList));
  display();
};

taskListDisplay.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-solid')) {
    const index = parseInt(e.target.getAttribute('id'), 10);
    remove(index);
  }
});

taskListDisplay.addEventListener('click', _clear_js__WEBPACK_IMPORTED_MODULE_0__.clearing);
deleteBtn.addEventListener('click', () => {
  (0,_clear_js__WEBPACK_IMPORTED_MODULE_0__.clear)();
  display();
});

taskListDisplay.addEventListener('dragover', (e) => {
  e.preventDefault();
  taskListDisplay.classList.add('dragover');
});

taskListDisplay.addEventListener('dragleave', (e) => {
  e.preventDefault();
  taskListDisplay.classList.remove('dragover');
});

taskListDisplay.addEventListener('drop', (e) => {
  e.preventDefault();
  taskListDisplay.classList.remove('dragover');
  const fromIndex = parseInt(e.dataTransfer.getData('text/plain'), 10);
  const toIndex = Array.from(taskListDisplay.children).indexOf(e.target);
  if (fromIndex !== toIndex) {
    const task = taskList.splice(fromIndex, 1)[0];
    taskList.splice(toIndex, 0, task);
    localStorage.setItem('localItem', JSON.stringify(taskList));
    display();
  }
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/crud.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3J1ZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0QjZDOztBQUU3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsTUFBTSx1QkFBdUIsY0FBYztBQUN0Riw2Q0FBNkMsb0JBQW9CO0FBQ2pFO0FBQ0EsYUFBYSxjQUFjO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELDBDQUEwQywrQ0FBUTtBQUNsRDtBQUNBLEVBQUUsZ0RBQUs7QUFDUDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jbGVhci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NydWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNsZWFyaW5nID0gKGUpID0+IHtcbiAgY29uc3QgY2xpY2sgPSBlLnRhcmdldC5jbG9zZXN0KCcuY2hlY2snKTtcbiAgaWYgKCFjbGljaykgcmV0dXJuO1xuXG4gIGNvbnN0IGRhdGFUID0gcGFyc2VJbnQoY2xpY2suZ2V0QXR0cmlidXRlKCdkYXRhLXNldCcpLCAxMCk7XG4gIGNvbnN0IHRhc2sgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2NhbEl0ZW0nKSkgfHwgW107XG4gIGNvbnN0IGZpbmQgPSB0YXNrLmZpbmQoKHRvZG8pID0+IHRvZG8uaW5kZXggPT09IGRhdGFUKTtcbiAgZmluZC5jb21wbGV0ZWQgPSAhZmluZC5jb21wbGV0ZWQ7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2NhbEl0ZW0nLCBKU09OLnN0cmluZ2lmeSh0YXNrKSk7XG59O1xuXG5leHBvcnQgY29uc3QgY2xlYXIgPSAoKSA9PiB7XG4gIGNvbnN0IHNldCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvY2FsSXRlbScpKSB8fCBbXTtcbiAgY29uc3Qgbm90RG9uZSA9IHNldC5maWx0ZXIoKHRhc2tMaXN0KSA9PiAhdGFza0xpc3QuY29tcGxldGVkKTtcbiAgc2V0Lmxlbmd0aCA9IDA7XG4gIGxldCBpID0gMTtcbiAgbm90RG9uZS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5pbmRleCA9IGk7XG4gICAgaSArPSAxO1xuICB9KTtcbiAgc2V0LnB1c2goLi4ubm90RG9uZSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2NhbEl0ZW0nLCBKU09OLnN0cmluZ2lmeShzZXQpKTtcbn07XG4iLCJpbXBvcnQgeyBjbGVhcmluZywgY2xlYXIgfSBmcm9tICcuL2NsZWFyLmpzJztcblxuY29uc3QgdGFza0xpc3REaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGEnKTtcbmNvbnN0IGlucHV0VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2snKTtcbmNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdG8tbGlzdCcpO1xuY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlbGV0ZScpO1xuXG5sZXQgdGFza0xpc3QgPSBbXTtcblxuY29uc3QgZGlzcGxheSA9ICgpID0+IHtcbiAgdGFza0xpc3REaXNwbGF5LmlubmVySFRNTCA9ICcnO1xuICB0YXNrTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvY2FsSXRlbScpKSB8fCBbXTtcbiAgdGFza0xpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjb21wID0gZWxlbWVudC5jb21wbGV0ZWQgPyAnY2hlY2tlZCcgOiAnJztcbiAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcbiAgICB0YXNrLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgJ3RydWUnKTtcbiAgICB0YXNrLmlubmVySFRNTCA9IGBcbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjaGVja1wiICR7Y29tcH0gaWQ9XCJjaGVja1wiIGRhdGEtc2V0PVwiJHtlbGVtZW50LmluZGV4fVwiPlxuICAgIDxpbnB1dCBjbGFzcz1cImVkaXRcIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiJHtlbGVtZW50LmRlc2NyaXB0aW9ufVwiPlxuICAgIDxkaXYgY2xhc3M9XCJjYW5cIj5cbiAgICA8aSBpZD1cIiR7ZWxlbWVudC5pbmRleH1cIiBjbGFzcz1cImZhLXNvbGlkIGZhLXRyYXNoLWNhblwiPjwvaT5cbiAgICA8L2Rpdj5cbiAgICBgO1xuICAgIHRhc2tMaXN0RGlzcGxheS5hcHBlbmRDaGlsZCh0YXNrKTtcblxuICAgIHRhc2suYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKGUpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gQXJyYXkuZnJvbSh0YXNrTGlzdERpc3BsYXkuY2hpbGRyZW4pLmluZGV4T2YoZS50YXJnZXQpO1xuICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsIGluZGV4KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHRhc2tMaXN0MiA9IHRhc2suY2hpbGRyZW5bMV07XG4gICAgdGFza0xpc3QyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGNvbnN0IGxpc3RpbmdEYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGEnKTtcbiAgICAgIGNvbnN0IGFycmF5TGlzdCA9IEFycmF5LmZyb20obGlzdGluZ0RhdGEuY2hpbGRyZW4pO1xuICAgICAgY29uc3QgaW5kZXggPSBhcnJheUxpc3QuaW5kZXhPZih0YXNrKTtcbiAgICAgIGNvbnN0IHRhc2tMb2NhbCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvY2FsSXRlbScpKTtcbiAgICAgIHRhc2tMb2NhbFtpbmRleF0uZGVzY3JpcHRpb24gPSB0YXNrTGlzdDIudmFsdWU7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9jYWxJdGVtJywgSlNPTi5zdHJpbmdpZnkodGFza0xvY2FsKSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZGlzcGxheSgpO1xuXG5hZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGlmIChpbnB1dFZhbHVlLnZhbHVlID09PSAnJykgcmV0dXJuO1xuICB0YXNrTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvY2FsSXRlbScpKSB8fCBbXTtcblxuICBjb25zdCBvYmplY3QgPSB7XG4gICAgZGVzY3JpcHRpb246IGlucHV0VmFsdWUudmFsdWUsXG4gICAgaW5kZXg6IHRhc2tMaXN0Lmxlbmd0aCArIDEsXG4gICAgY29tcGxldGVkOiBmYWxzZSxcbiAgfTtcbiAgdGFza0xpc3QucHVzaChvYmplY3QpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9jYWxJdGVtJywgSlNPTi5zdHJpbmdpZnkodGFza0xpc3QpKTtcblxuICBpbnB1dFZhbHVlLnZhbHVlID0gJyc7XG4gIGRpc3BsYXkoKTtcbn0pO1xuXG5jb25zdCByZW1vdmUgPSAoaW5kZXgpID0+IHtcbiAgY29uc3QgcmVtb3ZlTGlzdCA9IHRhc2tMaXN0LmZpbHRlcigoZWxlbWVudCkgPT4gZWxlbWVudC5pbmRleCAhPT0gaW5kZXgpO1xuICB0YXNrTGlzdC5sZW5ndGggPSAwO1xuICBsZXQgaSA9IDE7XG4gIHJlbW92ZUxpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuaW5kZXggPSBpO1xuICAgIGkgKz0gMTtcbiAgfSk7XG4gIHRhc2tMaXN0LnB1c2goLi4ucmVtb3ZlTGlzdCk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2NhbEl0ZW0nLCBKU09OLnN0cmluZ2lmeSh0YXNrTGlzdCkpO1xuICBkaXNwbGF5KCk7XG59O1xuXG50YXNrTGlzdERpc3BsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYS1zb2xpZCcpKSB7XG4gICAgY29uc3QgaW5kZXggPSBwYXJzZUludChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2lkJyksIDEwKTtcbiAgICByZW1vdmUoaW5kZXgpO1xuICB9XG59KTtcblxudGFza0xpc3REaXNwbGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xlYXJpbmcpO1xuZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjbGVhcigpO1xuICBkaXNwbGF5KCk7XG59KTtcblxudGFza0xpc3REaXNwbGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB0YXNrTGlzdERpc3BsYXkuY2xhc3NMaXN0LmFkZCgnZHJhZ292ZXInKTtcbn0pO1xuXG50YXNrTGlzdERpc3BsYXkuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB0YXNrTGlzdERpc3BsYXkuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ292ZXInKTtcbn0pO1xuXG50YXNrTGlzdERpc3BsYXkuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgdGFza0xpc3REaXNwbGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdvdmVyJyk7XG4gIGNvbnN0IGZyb21JbmRleCA9IHBhcnNlSW50KGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQvcGxhaW4nKSwgMTApO1xuICBjb25zdCB0b0luZGV4ID0gQXJyYXkuZnJvbSh0YXNrTGlzdERpc3BsYXkuY2hpbGRyZW4pLmluZGV4T2YoZS50YXJnZXQpO1xuICBpZiAoZnJvbUluZGV4ICE9PSB0b0luZGV4KSB7XG4gICAgY29uc3QgdGFzayA9IHRhc2tMaXN0LnNwbGljZShmcm9tSW5kZXgsIDEpWzBdO1xuICAgIHRhc2tMaXN0LnNwbGljZSh0b0luZGV4LCAwLCB0YXNrKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9jYWxJdGVtJywgSlNPTi5zdHJpbmdpZnkodGFza0xpc3QpKTtcbiAgICBkaXNwbGF5KCk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9