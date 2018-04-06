'use strict';
const LinkedList = require('./LinkedList');
const list = new LinkedList();


/*
Implement the following functions that operate on your linked list class. Note that these should be 
free functions instead of methods of the linked list class, so implement them outside the linked list 
class. Test each function using the list created in exercise 1.

display: displays the linked list.
size: returns the size of the linked list.
isEmpty: finds if the list is empty or not (without using the size() function)
findPrevious: finds the node before the item you are looking for
findLast: returns the last node in the linked list
 */

list.insertFirst('alpha');
list.insertLast('beta');

const display = list => {
  let currentNode = list.head;

  let myList = '';

  while (currentNode) {
    myList += `'${currentNode.value} : ${currentNode.next ? currentNode.next.value : null}', `;
    currentNode = currentNode.next;
  }

  return myList;
};

console.log(display(list));