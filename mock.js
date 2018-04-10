/* insert an element in the correct order

Input: 2->4->5->7->10->12
Output: 2->4->5->7->8->10->12
*/

'use strict';

const LinkedList = require('./LinkedList');


const list = new LinkedList(); 
list.insertFirst(2);
list.insertLast(4);
list.insertLast(5);
list.insertLast(7);
list.insertLast(10);
list.insertLast(12);

const updateList = (LL, value) => {

  // loop over the existing list
  // find the value that's larger than the one I'm trying to add
  // insertBefore (LL value, new value)

  let insertHere = LL.head;
  /*
  {"value":2,
   "next":{
     "value":4,
     "next":{
       "value":5,
       "next":{
         "value":7,
         "next":{
           "value":10,
           "next":{
             "value":12,
             "next":null
            }
          }
        }
      }
    }
  }
  */

  while (insertHere.next) {

    if (insertHere.value > value) {
      LL.insertBefore(insertHere.value, value);
      return LL;
    }
    else {
      insertHere = insertHere.next;
    }
  }

};

console.log(JSON.stringify(updateList(list, 8)));
