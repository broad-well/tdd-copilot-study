// TO RUN THIS FILE: npm test -t /workspaces/tdd-copilot-study/task_descriptions/__tests__/todo_tests.js

const TodoList = require('/workspaces/tdd-copilot-study/implementations/todo.js');

describe('TodoList', () => {
  let todoList;

  beforeEach(() => {
    todoList = new TodoList();
  });

  // Please write a comprehensive test suite for the TodoList class below
    // Test insert item
    it('should allow me to insert a new item', () => {
      // Description: in this test, I would like to take a TodoList object and 
      // insert a new item. Then, I will check that either the number of new items
      // in the todolist is increased by one, or that the item was already in the todolist. 
      // I will have multiple unit tests with different numbers of items already in the todo 
      // list, and where the item does and does not equal an existing item in the todo list. 

      // Formal specification: 
      // For all todolists, inserting an item to the todo list implies that the item now 
      // exists in the todo list. If the item was not in the list, the length of the new list is
      // now one greater than the length of the original. If the item was in the list, the lenght
      // of the new list is now equal to the length of the original. 
      const item = {
        description: "hi",
        completed: false,
        due: new Date("01-01-2000"),
      }
      todoList.addTask(item)
    });

    it('should allow me to delete an inserted item', () => {
      // Description: in this test, I will remove an item from the todo list. 
      // To remove an item, the test will ensure that the item does not exist in the todo list
      // after it is removed. this unit test will test todo lists that have the item and 
      // todo lists that do not have the item. 

      // Formal specification:
      // 1. For all todo lists, if the deleted item is in the todo list before the delete operation,
      //    the deleted item is not in the todo list after the delete operation. 
      // 2. For all todo lists, if the deleted item is not in the todo list before the delete operation,
      //.   there is an exception. 

      const item = {
        description: "hi",
        completed: false,
        due: new Date("01-01-2000"),
      }
      todoList.addTask(item)
    });

    it('should allow me to find the next item', () => {
      // Description: In this test, I will make sure that the getting the next item in the todo list
      // always yeilds the item with the smallest date in the case that there is an item in the 
      // to do list. 
      // In the case where there is no item in the todo list, this test will throw an exception. 
      // I will write multiple tests. In some cases, the list will be empty. In others, the order
      // of inserted items will differ to make sure the todolist maintains sortedness. 

      // Formal specification:
      // 1. For all todo lists with at least one element, asking for the next item will return the
      //.   item with the smallest date across all items in the todo list. 
      // 2. For all empty todo lists, asking for the next item will throw an exception. 

      const item = {
        description: "hi",
        completed: false,
        due: new Date("01-01-2000"),
      }
      todoList.addTask(item)
    });

    it('should allow me to delete all items in the todo list', () => {
      // Description: In this test, I will make sure that for any todo list, trying to delete all items in the
      // list yeilds the empty todo list. I will run this test on lists that both do and do not have items in them. 

      // Formal specification: 
      // For all todo lists, clearing the list results in the empty todo list. 
    });

    it('Should allow me to check off the next item in the todo list', () => {
      // Description: In this test, I will make sure that checking off the next item in the todo list will remove the
      // most recent item. The test will ensure that the item does not exist in the todo list after the item is removed. 
      // The test will run on examples of lists that are empty and nonempty, and lists that are constructed in different orders 
      // to ensure the todo list maintains sortedness. 

      // Formal specification:
      // 1. For all todo lists with at least one item, the minimum item in the todo list does not exist in the todo list after the 
      //.   delete opereation.
      // 2. For all todo lists with no items, an exception is thrown. 
    });

    it("Should allow me to remove items as a particular index of the todo list", () => {
      // Description: In this test, I will make sure that after I remove an item at a particular index of the todo list, that the
      // item no longer appears in the todo list. I will test this method on todo lists where the index will and will not exist to 
      // ensure that an exception is thrown when an index does not exist. 

      // Formal specificatrion:
      // 1. For all todo lists where the length of the list is greater than the given index, the item at the given index does not 
      //.   exist after the delete operation and the new list length is one fewer than the original. 
      // 2. For all todo lists where teh index is greater than or equal to the length of the list, an exception is thrown. 
    })

    it("Should allow me to get all of the items in a todo list", () => {
      // Description: in this test, I will make sure that at any point, I can see all of the items that are in the todo list. 
      // This test will check that I can see all items after insertion, deletion, and for the empty todo list. 

      // Formal specification,
      // For all todo lists, returns the exact set of items in the list. 
    })

    it('')
});