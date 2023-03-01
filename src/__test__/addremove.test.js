import addList from '../__mock__/addList.js';
import remove from '../__mock__/removeList.js';

describe('Test for adding tasks', () => {
  it('Check array of object is not null', () => {
    localStorage.removeItem('localItem');
    addList('task 1');
    const task = JSON.parse(localStorage.getItem('localItem'));
    const SIZE = task.length;
    expect(SIZE).not.toBeNull();
  });
  it('Added to the DOM', () => {
    localStorage.removeItem('localItem');
    addList('task 2');
    const task = JSON.parse(localStorage.getItem('localItem'));
    expect(task).toHaveLength(task.length);
  });
});
