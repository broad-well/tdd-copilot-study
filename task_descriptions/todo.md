# To-Do List Manager

Please write an API for a class named `TodoList` that manages a to-do list ordered by due date. You should be able to add/remove items from the list, and modify existing items. 

The API can be written in plain text. It should include a list of public method headers, their arguments, and a short description of what each method does. 

interface Todo {
  id: number;
  completed: boolean;
  due_date: date;
  task: string;
}

function make_todo(completed: bool, due_date: date, task: string): Todo;

function same_todo(a: Todo, b: Todo): boolean;

// should always be sorted
class TodoList {

private __todos: Array<Todo>

public get todos(): Array<Todo>

// adds a todo to the list, and keeps the list sorted
function add(t: Todo): TodoList

// removes the todo from the list
function remove(t: Todo): TodoList

// replaces the todo with the same task, but potentially a different due date/completed status
// maintains the invariant
function replace(modified_todo: Todo): TodoList

}
