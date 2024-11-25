const TodoList = require('/workspaces/tdd-copilot-study/implementations/todo.js');

describe('TodoList', () => {
  let todoList;
  const validTask = { description: "Test Task", completed: false, due: new Date('2024-11-25') };

  beforeEach(() => {
    todoList = new TodoList();
  });

  describe('constructor', () => {
    it('should initialize with an empty task list by default', () => {
      expect(todoList.tasks).toEqual([]);
    });

    it('should initialize with a sorted task list when provided valid tasks', () => {
      const tasks = [
        { description: "Task 1", completed: false, due: new Date('2024-11-25') },
        { description: "Task 2", completed: true, due: new Date('2024-11-24') },
      ];
      todoList = new TodoList(tasks);
      expect(todoList.tasks[0].description).toBe("Task 2");
    });

    it('should throw an error if tasks is not an array', () => {
      expect(() => new TodoList("invalid")).toThrow("Tasks must be an array of task objects.");
    });
  });

  describe('addTask', () => {
    it('should add a task to an empty list', () => {
      todoList.addTask(validTask);
      expect(todoList.tasks).toHaveLength(1);
      expect(todoList.tasks[0]).toBe(validTask);
    });

    it('should add a task and maintain sorted order', () => {
      const task1 = { description: "Task 1", completed: false, due: new Date('2024-11-26') };
      const task2 = { description: "Task 2", completed: false, due: new Date('2024-11-24') };
      todoList.addTask(task1);
      todoList.addTask(task2);
      expect(todoList.tasks[0]).toBe(task2);
      expect(todoList.tasks[1]).toBe(task1);
    });

    it('should throw an error for an invalid task object', () => {
      expect(() => todoList.addTask({ description: "Task", completed: false })).toThrow(
        "Invalid task object. Must have 'description', 'completed', and 'due'."
      );
    });
  });

  describe('removeTaskAt', () => {
    it('should remove a task at the specified index', () => {
      todoList.addTask(validTask);
      todoList.removeTaskAt(0);
      expect(todoList.tasks).toHaveLength(0);
    });

    it('should throw an error for out-of-bounds index', () => {
      expect(() => todoList.removeTaskAt(0)).toThrow("Index out of bounds.");
    });
  });

  describe('markTaskAt', () => {
    it('should mark a task as completed at the specified index', () => {
      todoList.addTask(validTask);
      todoList.markTaskAt(0);
      expect(todoList.tasks[0].completed).toBe(true);
    });

    it('should throw an error if the task is already completed', () => {
      const completedTask = { ...validTask, completed: true };
      todoList.addTask(completedTask);
      expect(() => todoList.markTaskAt(0)).toThrow("Task is already marked as complete.");
    });

    it('should throw an error for out-of-bounds index', () => {
      expect(() => todoList.markTaskAt(0)).toThrow("Index out of bounds.");
    });
  });

  describe('changeDueDateAt', () => {
    it('should change the due date of a task and re-sort the list', () => {
      const task1 = { description: "Task 1", completed: false, due: new Date('2024-11-26') };
      const task2 = { description: "Task 2", completed: false, due: new Date('2024-11-24') };
      
      todoList.addTask(task1);
      todoList.addTask(task2);

      expect(todoList.tasks[0].description).toBe("Task 2");
      expect(todoList.tasks[1].description).toBe("Task 1");
  
      todoList.changeDueDateAt(1, new Date('2024-11-23'));
  
      // Task 1 should now come before Task 2 in the sorted list
      expect(todoList.tasks[0].description).toBe("Task 1");
      expect(todoList.tasks[1].description).toBe("Task 2");
    });

    it('should throw an error for invalid date objects', () => {
      todoList.addTask(validTask);
      expect(() => todoList.changeDueDateAt(0, "invalid date")).toThrow("Invalid date object.");
    });

    it('should throw an error for out-of-bounds index', () => {
      expect(() => todoList.changeDueDateAt(0, new Date())).toThrow("Index out of bounds.");
    });

    it('should throw an error if the task is completed', () => {
      const completedTask = { ...validTask, completed: true };
      todoList.addTask(completedTask);
      expect(() => todoList.changeDueDateAt(0, new Date('2024-11-23'))).toThrow(
        "Cannot change the due date of a completed task."
      );
    });
  });
});
