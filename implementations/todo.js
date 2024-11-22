class TodoList {
    constructor(tasks = []) {
      if (!Array.isArray(tasks)) {
        throw new Error("Tasks must be an array of task objects.");
      }
      this.tasks = tasks.sort((a, b) => a.due - b.due);
    }
  
    addTask(task) {
      if (!this.#isValidTask(task)) {
        throw new Error("Invalid task object. Must have 'description', 'completed', and 'due'.");
      }
  
      // Find the correct position to insert the task (binary search for efficiency)
      let index = this.#findInsertIndex(task.due);
      this.tasks.splice(index, 0, task); // Insert task at the correct position
    }
  
    removeTaskAt(index) {
      if (index < 0 || index >= this.tasks.length) {
        throw new RangeError("Index out of bounds.");
      }
      this.tasks.splice(index, 1);
    }
  
    markTaskAt(index) {
      if (index < 0 || index >= this.tasks.length) {
        throw new RangeError("Index out of bounds.");
      }
      const task = this.tasks[index];
      if (task.completed) {
        throw new Error("Task is already marked as complete.");
      }
      task.completed = true;
    }
  
    changeDueDateAt(index, date) {
      if (!(date instanceof Date)) {
        throw new Error("Invalid date object.");
      }
      if (index < 0 || index >= this.tasks.length) {
        throw new RangeError("Index out of bounds.");
      }
      const task = this.tasks[index];
      if (task.completed) {
        throw new Error("Cannot change the due date of a completed task.");
      }
  
      // Remove task and reinsert at the correct position
      this.tasks.splice(index, 1);
      task.due = date;
      let newIndex = this.#findInsertIndex(date);
      this.tasks.splice(newIndex, 0, task);
    }
  
    // Private helper method to validate task object
    #isValidTask(task) {
      return (
        typeof task.description === "string" &&
        typeof task.completed === "boolean" &&
        task.due instanceof Date
      );
    }
  
    // Private helper method to find the correct insert position
    #findInsertIndex(date) {
      let low = 0, high = this.tasks.length;
      while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (this.tasks[mid].due < date) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }
      return low;
    }
  }
  
  module.exports = TodoList;
  