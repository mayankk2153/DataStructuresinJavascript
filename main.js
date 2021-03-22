/** Packages */
require('colors');
const inquirer = require('inquirer');
/** Reference Files */
const LinkedListAddHead = require('./LinkedList/LinkedListAddition/LinkedListAddHead');
const LinkedListAddTail = require('./LinkedList/LinkedListAddition/LinkedListAddTail');
const LinkedListDeleteTail = require('./LinkedList/LinkedListDeletion/LinkedListDeleteTail');
const LinkedListAddInBetween = require('./LinkedList/LinkedListAddition/LinkedListAddInBetween');
const LinkedListAddOnSpecificLoc = require('./LinkedList/LinkedListAddition/LinkedListAddOnSpecificLoc');

const bootstrap = () => {
  const questions = [
    {
      type: 'input',
      name: 'linkedListOperations',
      message: 'Click 1 for Insertion & 2 for Deletion',
    },
  ];

  inquirer.prompt(questions).then((answers) => {
    switch (answers['linkedListOperations']) {
      case '1':
        const insertionQuestions = [
          {
            type: 'input',
            name: 'linkedListInsertionOperations',
            message:
              '1: Add Head 2: Add In Between 3: Add On Specific Location 4: Add Tail',
          },
        ];
        inquirer.prompt(insertionQuestions).then((insertionAnswers) => {
          switch (insertionAnswers['linkedListInsertionOperations']) {
            case '1':
              let ll1 = new LinkedListAddHead();
              ll1.addToHead('hello');
              ll1.addToHead('world');
              console.log(`\n${JSON.stringify(ll1)}\n`);
              break;
            case '2':
              let ll2 = new LinkedListAddInBetween();
              ll2.addNodeInBetween('Some');
              ll2.addNodeInBetween('Else');
              ll2.addNodeInBetween('Thing');
              console.log(`\n${JSON.stringify(ll2)}\n`);
              break;
            case '3':
              let ll3 = new LinkedListAddOnSpecificLoc();
              ll3.addNodeOnSpecificLoc('Some', 0);
              ll3.addNodeOnSpecificLoc('Else', 1);
              ll3.addNodeOnSpecificLoc('Thing', 2);
              console.log(`\n${JSON.stringify(ll3)}\n`);
              break;
            case '4':
              let ll4 = new LinkedListAddTail();
              ll4.addToTail('hello');
              ll4.addToTail('world');
              console.log(`\n${JSON.stringify(ll4)}\n`);
              break;

            default:
              console.error(
                '\n// Choice is invalid! Program Terminated. //'.red.bold
              );
          }
        });
        break;

      case '2':
        const deletionQuestions = [
          {
            type: 'input',
            name: 'linkedListDeletionOperations',
            message: '1: Delete Tail',
          },
        ];
        inquirer.prompt(deletionQuestions).then((deletionAnswers) => {
          switch (deletionAnswers['linkedListDeletionOperations']) {
            case '1':
              let ll1 = new LinkedListDeleteTail();
              ll1.removeFromTail();
              console.log(`\n${JSON.stringify(ll1)}\n`);
              break;

            default:
              console.error(
                '\n// Choice is invalid! Program Terminated. //'.red.bold
              );
          }
        });
        break;

      default:
        console.error(
          '\n// Your choice is invalid! Program Terminated. //'.red.bold
        );
    }
  });
};

/** Bootstraping the script */
bootstrap();
