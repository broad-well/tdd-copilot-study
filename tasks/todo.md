# To-Do List Manager

Please create a class named `TaskList` that manages a to-do list. The class should provide the following functionalities:

## Implementation Requirements

1. **Constructor**
    - Implement the following constructors:
        1. A no-argument constructor that initializes an empty task list.
        2. A constructor that takes a list of task objects (`[task1, task2, ..., taskn]`) to initialize the task list.

2. **`addTask(task)`**
    - A member function that takes a task object and adds it to the task list.
    - A task object should have the following keys:
        - `description`: A string describing the task.
        - `completed`: A boolean indicating if the task is completed (`true` or `false`).
        - `due`: A `Date` object indicating the task's due date.

3. **`removeTask(task)`**
    - A member function that takes a task object and removes the first instance of that task from the task list.
    - If no instance is found, throw an `Error`.

4. **`removeTaskAt(index)`**
    - A member function that takes an index specifying the position of the task to remove.
    - If the index is out of bounds, throw a `RangeError`.

5. **`markTask(task)`**
    - A member function that takes a task object and marks the first instance of the task as complete.
    - If no instance is found, throw an `Error`.
    - If the task is already marked complete, throw an `Error`.

6. **`markTaskAt(index)`**
    - A member function that takes an index specifying the position of the task to mark as complete.
    - If the index is out of bounds, throw a `RangeError`.
    - If the task is already marked complete, throw an `Error`.

7. **`orderByDate()`**
    - A member function that takes no arguments and orders the tasks in the list by their `due` date, in ascending order.

## Examples

### Adding and Managing Tasks
```javascript
const myTasks = new TaskList();

myTasks.addTask({
    description: 'Finish PA1',
    completed: false,
    due: new Date('2024-10-20')
});
// myTasks now contains 1 task

myTasks.markTaskAt(0);
// Task 'Finish PA1' is now marked as complete

myTasks.removeTaskAt(0);
// myTasks is now empty
```

### Initializing with Multiple Tasks
```javascript
const task1 = {
    description: 'Finish PA2',
    completed: false,
    due: new Date('2024-10-20')
};
const task2 = {
    description: 'Submit PA2',
    completed: false,
    due: new Date('2024-11-20')
};
const task3 = {
    description: 'Review PA3',
    completed: false,
    due: new Date('2023-01-20')
};

const myTasks = new TaskList([task1, task2, task3]);
// myTasks now contains 3 tasks

myTasks.markTaskAt(0);
// Task 'Finish PA2' is now marked as complete

myTasks.removeTaskAt(0);
// myTasks now contains 2 tasks
```

### Ordering Tasks by Due Date
```javascript
myTasks.orderByDate();
// Tasks are now sorted by due date in ascending order
```

### Notes
- Task objects must conform to the specified structure (`description`, `completed`, and `due`).
- Ensure all errors are descriptive to aid debugging and usability.
- Implement error handling for edge cases such as invalid indices or duplicate task descriptions.
