import addList from '../__mock__/addList.js';
import update from '../__mock__/updateList.js';
import completedList from '../__mock__/completedList.js';

describe('Test for update task lists', () => {
  it('Check if list is updated', () => {
    localStorage.removeItem('localItem');
    addList('task 1');
    update(0);
    const after = JSON.parse(localStorage.getItem('localItem'));

    expect(after).toEqual([
      {
        description: "I will complete my today's task",
        completed: false,
        index: 0,
      },
    ]);
  });
  it('Check if completed list is true', () => {
    localStorage.removeItem('localItem');
    addList('task 1');
    completedList(0);
    const after = JSON.parse(localStorage.getItem('localItem'));
    expect(after).toEqual([
      {
        description: 'Complete my activities on time',
        completed: true,
        index: 0,
      },
    ]);
  });
});
