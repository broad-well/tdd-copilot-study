# To-Do List Manager

Please write an API for a class named `TodoList` that manages a to-do list ordered by due date. You should be able to add/remove items from the list, and modify existing items. 

The API can be written in plain text. It should include a list of public method headers, their arguments, and a short description of what each method does. 

Public Methods:
- addItem
  - type: Item -> None
  - description: Adds an item to the to-do list (maintained internally by the object).
      - assumption: An "Item" is a class that includes a due date and a description as its fields. 

- showItems
  - type: Self -> List[Item]
  - desctiption: Get all of the items in the todolist ordered by due date. Leaves the list unchanged. 

- checkNextItem
  - type: Self -> None
  - description: Marks the next item in the todo list as "done". Removes the item from the todo list. 
    if there are no items in the todo list, throws an exception. 

- removeItem
  - type: Self -> Item -> None
  - Removes the first instance of the given item from the todo list. Assumes that dulpicate items cannot appear in the todo list (because they would have the same description and due date.) Assumes that items have some definition of equality that compares description and due date. 
   If the item is not in the todo list, throws an exception. 

- clearList
  - type: Self -> None
  - description: Removes all items from the todo list

- removeItemAtIdx
  - type: Self -> nat -> None
  - description: Removes the (i + 1)st item from the todolist (in order of due date). Throws and exception if i is out of bounds. 

