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
    task.innerHTML = `
    <input type="checkbox" class="check" ${comp} id="check" data-set="${element.index}">
    <input class="edit" type="text" value="${element.description}">
    <div class="can">
    <i id="${element.index}" class="fa-solid fa-trash-can"></i>
    </div>
    `;
    taskListDisplay.appendChild(task);
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/crud.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3J1ZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0QjZDOztBQUU3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLE1BQU0sdUJBQXVCLGNBQWM7QUFDdEYsNkNBQTZDLG9CQUFvQjtBQUNqRTtBQUNBLGFBQWEsY0FBYztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCwwQ0FBMEMsK0NBQVE7QUFDbEQ7QUFDQSxFQUFFLGdEQUFLO0FBQ1A7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jbGVhci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NydWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNsZWFyaW5nID0gKGUpID0+IHtcbiAgY29uc3QgY2xpY2sgPSBlLnRhcmdldC5jbG9zZXN0KCcuY2hlY2snKTtcbiAgaWYgKCFjbGljaykgcmV0dXJuO1xuXG4gIGNvbnN0IGRhdGFUID0gcGFyc2VJbnQoY2xpY2suZ2V0QXR0cmlidXRlKCdkYXRhLXNldCcpLCAxMCk7XG4gIGNvbnN0IHRhc2sgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2NhbEl0ZW0nKSkgfHwgW107XG4gIGNvbnN0IGZpbmQgPSB0YXNrLmZpbmQoKHRvZG8pID0+IHRvZG8uaW5kZXggPT09IGRhdGFUKTtcbiAgZmluZC5jb21wbGV0ZWQgPSAhZmluZC5jb21wbGV0ZWQ7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2NhbEl0ZW0nLCBKU09OLnN0cmluZ2lmeSh0YXNrKSk7XG59O1xuXG5leHBvcnQgY29uc3QgY2xlYXIgPSAoKSA9PiB7XG4gIGNvbnN0IHNldCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvY2FsSXRlbScpKSB8fCBbXTtcbiAgY29uc3Qgbm90RG9uZSA9IHNldC5maWx0ZXIoKHRhc2tMaXN0KSA9PiAhdGFza0xpc3QuY29tcGxldGVkKTtcbiAgc2V0Lmxlbmd0aCA9IDA7XG4gIGxldCBpID0gMTtcbiAgbm90RG9uZS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5pbmRleCA9IGk7XG4gICAgaSArPSAxO1xuICB9KTtcbiAgc2V0LnB1c2goLi4ubm90RG9uZSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2NhbEl0ZW0nLCBKU09OLnN0cmluZ2lmeShzZXQpKTtcbn07XG4iLCJpbXBvcnQgeyBjbGVhcmluZywgY2xlYXIgfSBmcm9tICcuL2NsZWFyLmpzJztcblxuY29uc3QgdGFza0xpc3REaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGEnKTtcbmNvbnN0IGlucHV0VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2snKTtcbmNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdG8tbGlzdCcpO1xuY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlbGV0ZScpO1xuXG5sZXQgdGFza0xpc3QgPSBbXTtcblxuY29uc3QgZGlzcGxheSA9ICgpID0+IHtcbiAgdGFza0xpc3REaXNwbGF5LmlubmVySFRNTCA9ICcnO1xuICB0YXNrTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvY2FsSXRlbScpKSB8fCBbXTtcbiAgdGFza0xpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjb21wID0gZWxlbWVudC5jb21wbGV0ZWQgPyAnY2hlY2tlZCcgOiAnJztcbiAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcbiAgICB0YXNrLmlubmVySFRNTCA9IGBcbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjaGVja1wiICR7Y29tcH0gaWQ9XCJjaGVja1wiIGRhdGEtc2V0PVwiJHtlbGVtZW50LmluZGV4fVwiPlxuICAgIDxpbnB1dCBjbGFzcz1cImVkaXRcIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiJHtlbGVtZW50LmRlc2NyaXB0aW9ufVwiPlxuICAgIDxkaXYgY2xhc3M9XCJjYW5cIj5cbiAgICA8aSBpZD1cIiR7ZWxlbWVudC5pbmRleH1cIiBjbGFzcz1cImZhLXNvbGlkIGZhLXRyYXNoLWNhblwiPjwvaT5cbiAgICA8L2Rpdj5cbiAgICBgO1xuICAgIHRhc2tMaXN0RGlzcGxheS5hcHBlbmRDaGlsZCh0YXNrKTtcbiAgICBjb25zdCB0YXNrTGlzdDIgPSB0YXNrLmNoaWxkcmVuWzFdO1xuICAgIHRhc2tMaXN0Mi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCBsaXN0aW5nRGF0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRhJyk7XG4gICAgICBjb25zdCBhcnJheUxpc3QgPSBBcnJheS5mcm9tKGxpc3RpbmdEYXRhLmNoaWxkcmVuKTtcbiAgICAgIGNvbnN0IGluZGV4ID0gYXJyYXlMaXN0LmluZGV4T2YodGFzayk7XG4gICAgICBjb25zdCB0YXNrTG9jYWwgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2NhbEl0ZW0nKSk7XG4gICAgICB0YXNrTG9jYWxbaW5kZXhdLmRlc2NyaXB0aW9uID0gdGFza0xpc3QyLnZhbHVlO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvY2FsSXRlbScsIEpTT04uc3RyaW5naWZ5KHRhc2tMb2NhbCkpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmRpc3BsYXkoKTtcblxuYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBpZiAoaW5wdXRWYWx1ZS52YWx1ZSA9PT0gJycpIHJldHVybjtcbiAgdGFza0xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2NhbEl0ZW0nKSkgfHwgW107XG5cbiAgY29uc3Qgb2JqZWN0ID0ge1xuICAgIGRlc2NyaXB0aW9uOiBpbnB1dFZhbHVlLnZhbHVlLFxuICAgIGluZGV4OiB0YXNrTGlzdC5sZW5ndGggKyAxLFxuICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gIH07XG4gIHRhc2tMaXN0LnB1c2gob2JqZWN0KTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvY2FsSXRlbScsIEpTT04uc3RyaW5naWZ5KHRhc2tMaXN0KSk7XG5cbiAgaW5wdXRWYWx1ZS52YWx1ZSA9ICcnO1xuICBkaXNwbGF5KCk7XG59KTtcblxuY29uc3QgcmVtb3ZlID0gKGluZGV4KSA9PiB7XG4gIGNvbnN0IHJlbW92ZUxpc3QgPSB0YXNrTGlzdC5maWx0ZXIoKGVsZW1lbnQpID0+IGVsZW1lbnQuaW5kZXggIT09IGluZGV4KTtcbiAgdGFza0xpc3QubGVuZ3RoID0gMDtcbiAgbGV0IGkgPSAxO1xuICByZW1vdmVMaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmluZGV4ID0gaTtcbiAgICBpICs9IDE7XG4gIH0pO1xuICB0YXNrTGlzdC5wdXNoKC4uLnJlbW92ZUxpc3QpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9jYWxJdGVtJywgSlNPTi5zdHJpbmdpZnkodGFza0xpc3QpKTtcbiAgZGlzcGxheSgpO1xufTtcblxudGFza0xpc3REaXNwbGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZmEtc29saWQnKSkge1xuICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdpZCcpLCAxMCk7XG4gICAgcmVtb3ZlKGluZGV4KTtcbiAgfVxufSk7XG5cbnRhc2tMaXN0RGlzcGxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsZWFyaW5nKTtcbmRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY2xlYXIoKTtcbiAgZGlzcGxheSgpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=