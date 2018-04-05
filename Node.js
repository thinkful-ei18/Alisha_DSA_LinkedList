'use strict';

/* =============================
SINGLY LINKED NODE
============================= */
// the node class is private && is intended to only be used by the LinkedList class

class _Node {
  // these nodes are an object with 2 props
  // the value of next is the memory address of the next node in the list
  /* let node = {
          value: 'alpha',
          next: 11
         }
   */

  constructor(value, next) {
    this.value = value,
    this.next = next;
  }
}

module.exports = _Node;



/* =============================
DOUBLY LINKED NODE
============================= */

class _DoubleNode {
  // these nodes are an object with 3 props
  // the value of previous is the memory address of the previous node in the list
  /* let node = {
          value: 'alpha',
          next: 11,
          previous: 4
         }
   */

  constructor(value, next, previous) {
    this.value = value,
    this.next = next;
    this.previous = previous;
  }
}

module.exports = _Node;