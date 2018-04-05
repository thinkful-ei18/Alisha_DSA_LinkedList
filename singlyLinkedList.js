'use strict';

const LinkedList = require('./LinkedList');

/*
-Write a function main. Within the function, using the linked list class above, create a linked list called SLL and add the following items in your linked list. Apollo, Boomer, Helo, Husker, Starbuck
-Add Tauhida to the list
-Remove squirrel from the list
-Implement a function called insertBefore() in the class that inserts a new node before a given node containing a key
-Implement a function called insertAfter() in the class that inserts a new node after a node containing the key
-Implement a function called insertAt() that inserts an item at a specific position in the linked list
-Add Athena before Boomer using your insertBefore() function
-Add Hotdog after Helo using the insertAfter() method
-Using the insertAt() method insert Kat in the 3rd position of the list
-Remove Tauhida from the list
*/


const main = (function () {
  let SLL = new LinkedList();

  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');

  SLL.insertLast('Tauhida');

  // SLL.remove('squirrel'); // Value not found

  SLL.insertBefore('Helo', 'Royce'); // works
  // SLL.insertBefore('Diamond', 'Princess'); // Error: Diamond could not be found.

  console.log('SSL:', JSON.stringify(SLL));

})();
