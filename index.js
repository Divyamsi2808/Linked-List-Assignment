const readline = require('readline');

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
  }

  reverseList() {
    let previousNode = null;
    let currentNode = this.head;
    while (currentNode) {
      const nextNode = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
    }

    this.head = previousNode;
  }

  findSecondLargest() {
    let first = this.head.data;
    let second = null;

    let currentNode = this.head.next;
    while (currentNode) {
      if (currentNode.data > first) {
        second = first;
        first = currentNode.data;
      } else if (currentNode.data > second) {
        second = currentNode.data;
      }

      currentNode = currentNode.next;
    }

    return second;
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const linkedList = new LinkedList();

function takeUserInput() {
  rl.question('Enter a number (or "done" to finish): ', (input) => {
    if (input.toLowerCase() === 'done') {
      rl.close();
      // Reverse the linked list
      linkedList.reverseList();
      // Find the second largest number
      const secondLargestNum = linkedList.findSecondLargest();
      console.log(`Second largest number: ${secondLargestNum}`);
      console.log(linkedList)
    } else {
      const number = parseFloat(input);
      if (!isNaN(number)) {
        linkedList.append(number);
      } else {
        console.log('Invalid input. Please enter a valid number.');
      }
      takeUserInput();
    }
  });
}

takeUserInput();
