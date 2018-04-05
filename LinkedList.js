'use strict';

const _Node = require('./Node');

/* 
Walk through the Linked list code in the curriculum and understand it well. Then write a linked list class 
and with its core functions (insertFirst, insertLast, remove, find) from scratch.


FICTIONAL LINKED LIST IN MEMORY
 value:    | {alpha | # | # | {beta | # | {gamma | # | # |
 next:     |   3}   |   |   |  5}   |   |  null} |   |   |
 address:      0      1   2    3      4     5      6   7

  - addresses 0, 3 && 5 contain the nodes of the LL
  - the remaining addresses are used by other things
 */

 

/* =======================================================================================
                        SINGLY LINKED LIST
======================================================================================= */

class LinkedList {
  // a linked list is a list of connected nodes

  constructor() {
    this.head = null;
    // the head is the location of the first node
    // if there's no list yet, the location is null, i.e. non existent
  }

  /* =============================
  INSERT
  ============================= */

  insertFirst(value) {
    // create the first node in the list
    /* the _Node constructor takes parameters so you can't just instantiate it as a variable outside 
      of the class */

    this.head = new _Node(value, this.head);
    // reassign the value of the head to be a new node
    /*  new _Node(alpha, null) =>
          node = { 
                  value: alpha, 
                  next: null
          }
          (next is null because it's both the beginning && end of the list at this moment)
     */
  }


  insertBefore(existingItem, newItem) {
    // existingItem = node.value that I want to insert the new node in front of
    // newItem = value of the node I want to create before the existingItem

    // check to see if there's a list to add to, if not, throw an error
    if (this.head === null) {
      return new Error('Please create a list first');
    }

    // if the head is the item we're looking for, run the insertFirst method with newItem
    if (this.head.value === existingItem) {
      this.insertFirst(newItem);
      return;
    }

    // start at the head and continue through the list until you find the right existingItem
    let currentNode = this.head; // { value: alpha, next: {value: beta} }


    while (currentNode.next) { // if the next prop !== null

      if (currentNode.next.value !== existingItem) {
        currentNode = currentNode.next;
      }
      else {
        // if the existing item WAS found in the list, insert a new node before it 
        currentNode.next = new _Node(newItem, currentNode.next);
        return;
      }
    }

    // if the existingItem wasn't found in the list... throw an error
    if (!currentNode.next) {
      throw new Error(`${existingItem} could not be found.`);
    }
  }


  insertAfter(existingItem, newItem) {
    if (this.head === null) {
      return new Error('Please create a list first');
    }

    let currentNode = this.head;

    while (currentNode.value) {

      if (currentNode.value !== existingItem) {
        currentNode = currentNode.next;
      }
      else {
        currentNode.next = new _Node(newItem, currentNode.next);
        return;
      }
    }

    if (!currentNode.value) {
      throw new Error(`${existingItem} could not be found.`);
    }
  }


  insertAt(key, newItem) {

    if (this.head === null) {
      return new Error('Please create a list first');
    }

    let currentNode = this.head;
    let previousNode;

    for (let i=0; i<key-1; i++) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    previousNode.next = new _Node(newItem, previousNode.next);

  }


  insertLast(value) {
    // add a node to the end of the list

    if (this.head === null) {
      // if we don't have a head value, then we don't have a list at all
      // so first we would need to create the list
      this.insertFirst(value);
    }
    else {
      // if we do have a head, we must start at the head and go through the entire list to find the end

      let currentNode = this.head;
      // currentNode = { value: alpha, next: 3 }

      while (currentNode.next !== null) {
        // if next prop was NOT null, that means we have another node in our list
        // we would reassign the variable currentNode to be the value of the next node and see if the while loop is still true for that node
        currentNode = currentNode.next;

        // if we get to a point where currentNode.next === null ...we break out of this loop
      }

      currentNode.next = new _Node(value, null);
      // once we reach the end of the list, we take that node's next prop and reassign it by creating a new node
      // new _Node(delta, null) => node { value: delta, next: null }
    }
  }



  /* =============================
  FIND
  ============================= */

  find(value) { // value = delta

    // 0: {value: alpha, next: 3}      
    // 3: {value: beta, next:5}      
    // 5: {value: gamma, next: null}
    // 8: {value: delta, next: null}

    let currentNode = this.head;
    // start at the head
    // currentNode = {value: alpha, next: 3}

    if (!this.head) {
      // if the list is empty return null
      return null;
    }

    while (currentNode.value !== value) {
      // remain in this loop as long as the currentNode.value doesn't equal the value of the value we're looking for... 
      // we're checking to see does the value not exist in this list...
      // or does it just exist on another node in the list?

      if (currentNode.next === null) {
        // if curreNode.next is null that means there are no more nodes to check
   
        return null;
        // return null because the value does not exist in this list
      }
      else {
        currentNode = currentNode.next;
        // otherwise reassign the value of currentNode to the next node and go through the loop again

        // if we get to a point where currentNode.next === value ... we break out of this loop
      }
    }
    
    return currentNode;
    // we found the node whose value matches the value we're looking for!
  }


  /* =============================
  REMOVE
  ============================= */

  remove(value) { // value = beta

    if (!this.head) {
      // if the list is empty return null
      return null;
    }

    if (this.head.value === value) {
      // if the value of the first node is the value we're looking for...

      this.head = this.head.next;
      // reassign the value of this.head to be the NEXT node in the list
      // a LL must always have a head && the head must always point to the first node
      
      return;
      // return the updated LL
    }
    
    let currentNode = this.head;
    // currentNode = {value: alpha, next: 3}
    
    let previousNode = this.head;
    // currentNode = {value: alpha, next: 3}

    while ((currentNode !== null) && (currentNode.value !== value)) {
      // while we have a node to evaluate AND the current node isn't the one we're looking for...
       
      previousNode = currentNode;
      // reassign previousNode to be the value of currentNode

      currentNode = currentNode.next;
      // then reassign currentNode to be the value of the next node in the list
      
      // if we get to a point where we either have no more nodes to look at (currentNode === null) OR currentNode's value is the value we want (currentNode.value === value)... we break out of this loop
    }

    if (currentNode === null) {
      // if currentNode === null, there's nothing to remove because the value being searched for isn't in this LL
      console.log('Value not found');
      return;
    }

    previousNode.next = currentNode.next;
    // if (currentNode.value === value)...
    // reassign the next value of the node BEFORE it, to point to the next value of the node AFTER it
    // if there isn't a node after it, the next value of the node BEFORE it will be "null"
  }





  prettyPrint() {
    let current = this.head;
    let pretty = '';
    while (current) {
      message += `=> ${current.value}`;
      current = this.head.next;
    }
    console.log(pretty);
  }

}

module.exports = LinkedList;