# To-do list manager

Your task is to create a class, `TaskList`, that will have the ability to manage a To-Do List. The following should be within the class's interface:
- [To-do list manager](#to-do-list-manager)
  - [Constructor](#constructor)
  - [Add Task](#add-task)
  - [Remove Task](#remove-task)
  - [Mark Task Complete](#mark-task-complete)
  - [Order by due date](#order-by-due-date)
  - [Examples](#examples)

For reference a `task` JS Object has the following keys and values:

`description`: `string`

`completed`: `true` or `false`

`due`: `Date`

## [Constructor](#to-do-list-manager)
  `TaskList()`
  - Constructor with no arguments that creates an empty task list
  
  `TaskList([task1, task2, ..., taskn])`
  - Constructor that takes a list of JS Objects that are tasks
## [Add Task](#to-do-list-manager)
 `addTask(task)`
 - Member function that takes in a Task JS Object
 - Will add task arugment to task list

## [Remove Task](#to-do-list-manager)
 `removeTask(task)`
 -  Member function that takes a Task JS Object
 -  Will remove first instance of task argument from task list
 -  If no instance is found ... TODO

 `removeTaskAt(index)`
 - Member function that takes an index
 - Argument specifies at which index a task is removed
 - If index is out of bounds throw a `RangeError` 

## [Mark Task Complete](#to-do-list-manager)
`markTask(task)`
 -  Member function that takes a Task JS Object
 -  Will remove first instance of task argument from task list
 -  If no instance is found ... TODO
 -  If item is already complete ... TODO

`markTaskAt(index)`
 - Member function that takes an index
 - Argument specifies at which index a task is removed
 - If index is out of bounds throw a `RangeError` 
 -  If item is already complete ... TODO

## [Order by due date](#to-do-list-manager)
`orderByDate()`
- Member function that takes no argument
- Will order ... TODO

## Examples
```js
let myTasks = new TaskList();

myTasks.addTask({
    description: 'Finish PA1',
    complete: false,
    due: new Date('2024', '10', '20')
});
// myTasks now has 1 task

myTasks.markTaskAt(0);
// Finish PA1 complete = true

myTasks.removeTaskAt(0);
// myTasks is empty

```

```js
let task1 = {
        description: 'Finish PA2',
        complete: false,
        due: new Date('2024', '10', '20')
    };
let task2 = {
        description: 'Finish PA2',
        complete: false,
        due: new Date('2024', '11', '20')
    };
let task3 = {
        description: 'Finish PA3',
        complete: false,
        due: new Date('2023', '0', '20')
    };

let myTasks = new TaskList([task1, task2, task3]);
// myTasks now has 3 tasks

myTasks.markTaskAt(0);
// 'Finish PA1' complete = true

myTasks.removeTaskAt(0);
// myTasks has 2 tasks

```