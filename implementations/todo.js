class TodoList {
    constructor(initialTasks = []) {
        // Validate and initialize the task list
        this.tasks = initialTasks.sort((a, b) => a.due - b.due); // Ensure tasks are sorted by due date
    }

    // Helper: Validate a task object
    static validateTask(task) {

    }

    // Add a new task and insert it in the correct position
    addTask(task) {

    }

    // Remove a task at a specific index
    removeTaskAt(index) {

    }

    // Mark a task as complete at a specific index
    markTaskAt(index) {

    }

    // Change the due date of a task and reinsert it in the correct position
    changeDueDateAt(index, newDueDate) {
        
    }
}

// Example Usage
const myTasks = new TodoList([
    { description: 'Submit report', completed: false, due: new Date('2024-12-01') },
    { description: 'Prepare slides', completed: false, due: new Date('2024-11-15') }
]);

// Add a new task
myTasks.addTask({ description: 'Finish assignment', completed: false, due: new Date('2024-11-10') });
console.log(myTasks.tasks);

// Mark a task as complete
myTasks.markTaskAt(1); // Marks 'Prepare slides' as complete

// Change the due date of a task
myTasks.changeDueDateAt(0, new Date('2024-12-05')); // Moves 'Finish assignment' to the correct position

// Remove a task
myTasks.removeTaskAt(1); // Removes 'Prepare slides'
console.log(myTasks.tasks);
