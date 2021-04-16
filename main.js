/** Packages */
require('colors');
const prompt = require('prompt-sync')();
const LinkedList = require('./LinkedList/LinkedList');

console.log('Welcome to Linked List in Javascript!!!!!!!!!!!! ');
let n = 0;

let ll = new LinkedList();

do {
  console.log(
    'Please select your choice: \n 1. Add to Head \n 2. Add to Tail \n 3. Add to a Specific Location \n 4. Add in Between \n 5. Delete from Head '
  );
  const name = prompt();
  switch (name) {
    case '1':
      console.log('Please enter the value');
      let data = prompt();
      ll.addToHead(data);
      console.log(`\n${JSON.stringify(ll)}\n`);
      break;
    case '2':
      console.log('Please enter the value');
      let data1 = prompt();
      ll.addToTail(data1);
      console.log(`\n${JSON.stringify(ll)}\n`);
      break;
    case '3':
      console.log('Please enter the position');
      let pos = prompt();
      console.log('Please enter the value');
      let data2 = prompt();
      ll.addNodeOnSpecificLoc(data2, pos);
      console.log(`\n${JSON.stringify(ll)}\n`);
      break;
    case '4':
      console.log('Please enter the value');
      let data3 = prompt();
      ll.addNodeInBetween(data3);
      console.log(`\n${JSON.stringify(ll)}\n`);
      break;
    case '5':
      console.log('Deleting the Head: ', ll.deleteHead());
      console.log(`\n${JSON.stringify(ll)}\n`);
      break;
    case '6':
      console.log('Deleting the Tail: ', ll.deleteHead());
      console.log(`\n${JSON.stringify(ll)}\n`);
      break;
  }
  n++;
} while (n < 3);
