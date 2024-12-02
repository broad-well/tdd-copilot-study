// TO RUN THIS FILE: npm test -t /workspaces/tdd-copilot-study/task_descriptions/__tests__/todo_tests.js

const TodoList = require('/workspaces/tdd-copilot-study/implementations/todo.js');

describe('TodoList', () => {
  let todoList;

  beforeEach(() => {
    todoList = new TodoList();
  });

  // Please write a comprehensive test suite for the TodoList class below
  it('should add a todo to the list', () => {
    const todo = {
      completed: false,
      due_date: '2022-12-31',
      task: 'Buy groceries',
    };

    todoList.add(todo);

    expect(todoList.__todos.length).toBe(1);
    expect(todoList.__todos).toEqual([todo]);
  });

  it('should remove a todo from the list', () => {
    const todo = {
      completed: false,
      due_date: '2022-12-31',
      task: 'Buy groceries',
    };

    todoList.add(todo);
    todoList.remove(todo);

    expect(todoList.__todos.length).toBe(0);
    expect(todoList.__todos).toEqual([]);
  });

  it('should be idempotent to double-removal', () => {
    const todo = {
      completed: false,
      due_date: '2022-12-31',
      task: 'Buy groceries',
    };

    todoList.add(todo);
    todoList.remove(todo);
    todoList.remove(todo);

    expect(todoList.__todos.length).toBe(0);
    expect(todoList.__todos).toEqual([]);
  });

  it('should be able to mark a todo as completed', () => {
    const todo = {
      completed: false,
      due_date: '2022-12-31',
      task: 'Buy groceries',
    };

    todoList.add(todo);

    const modifiedTodo = {
      ...todo,
      completed: true,
    };
    todoList.replace(todo, modifiedTodo);

    expect(todoList.__todos.length).toBe(1);
    expect(todoList.__todos[0]).toEqual(modifiedTodo);
    expect(todoList.__todos[0].completed).toBe(true);
  });

  it('should be able to change the date of a todo', () => {
    const todo = makeTodo(false, '2022-12-31', 'Buy groceries');
    
    todoList.add(todo);

    const modifiedTodo = makeTodo(false, '2022-12-30', 'Buy groceries');
    todoList.replace(todo, modifiedTodo);

    expect(todoList.__todos.length).toBe(1);
    expect(todoList.__todos[0]).toEqual(modifiedTodo);
    expect(todoList.__todos[0].due_date).toBe('2022-12-30');
  });

  it('should be able to change the task of a todo', () => {
    const todo = makeTodo(false, '2022-12-31', 'Buy groceries');
    
    todoList.add(todo);

    const modifiedTodo = makeTodo(false, '2022-12-31', 'Buy clothes');

    todoList.replace(todo, modifiedTodo);

    expect(todoList.__todos.length).toBe(1);
    expect(todoList.__todos[0]).toEqual(modifiedTodo);
    expect(todoList.__todos[0].task).toBe('Buy clothes');
  });

  it('should be able to handle adding and removing todos with the same task', () => {
    const todo1 = makeTodo(false, '2022-12-31', 'Buy groceries');

    const todo2 = makeTodo(false, '2022-12-31', 'Buy groceries');

    todoList.add(todo1);
    todoList.add(todo2);

    expect(todoList.__todos.length).toBe(2);
    expect(todoList.__todos).toEqual([todo1, todo2]);

    todoList.remove(todo1);

    expect(todoList.__todos.length).toBe(1);
    expect(todoList.__todos).toEqual([todo2]);
  });

  it('should be idempotent to double-replacement', () => {
    const todo = makeTodo(false, '2022-12-31', 'Buy groceries');

    todoList.add(todo);

    const modifiedTodo = makeTodo(false, '2022-12-31', 'Buy clothes');
    todoList.replace(todo, modifiedTodo);
    todoList.replace(todo, modifiedTodo);

    expect(todoList.__todos.length).toBe(1);
    expect(todoList.__todos).toEqual([modifiedTodo]);
  });
});

describe('Todo', () => {

  it('should consider the same todo as equal', () => {
    const todo1: Todo = makeTodo(false, '2022-12-31', 'Buy groceries');
    const todo2: Todo = makeTodo(false, '2022-12-31', 'Buy groceries');

    expect(todo1).toEqual(todo2);
  });

  it('should todos with different dates as not equal', () => {
    const todo1: Todo = makeTodo(false, '2022-12-31', 'Buy groceries');
    const todo2: Todo = makeTodo(false, '2022-12-30', 'Buy groceries');

    expect(todo1).not.toEqual(todo2);
  });

  it('should consider todos with different completion status as not equal', () => {
    const todo1: Todo = makeTodo(false, '2022-12-31', 'Buy groceries');
    const todo2: Todo = makeTodo(true, '2022-12-31', 'Buy groceries');

    expect(todo1).not.toEqual(todo2);
  });

  it('should consider todos with different tasks as not equal', () => {
    const todo1: Todo = makeTodo(false, '2022-12-31', 'Buy groceries');
    const todo2: Todo = makeTodo(false, '2022-12-31', 'Buy clothes');

    expect(todo1).not.toEqual(todo2);
  });
})