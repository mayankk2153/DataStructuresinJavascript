/** Packages */
require('colors');
const inquirer = require('inquirer');
const LinkedList = require('./LinkedList/LinkedList');
const prompt = require('prompt-sync')();

console.log('Welcome to Linked List in Javascript!!!!!!!!!!!! ');
let n = 0;

let ll = new LinkedList();

do {
  console.log(
    'Please select your choice: \n 1. Add to Head \n 2. Add to Tail \n 3. Add to a Specific Location '
  );
  const name = prompt();
  switch (name) {
    case '1':
      console.log('Please enter your value');
      let value1 = prompt();
      ll.addToHead(value1);
      console.log(`\n${JSON.stringify(ll)}\n`);
      break;
    case '2':
      console.log('Please enter your value');
      let value2 = prompt();
      ll.addToTail(value2);
      console.log(`\n${JSON.stringify(ll)}\n`);
      break;
  }
  n++;
} while (n < 5);
