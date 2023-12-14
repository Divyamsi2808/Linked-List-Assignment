<h1>Linked List Reversal and Second Largest Number Finder</h1>

<h2>How to Use</h2>
<ul>
<li>Clone the repository or download the script.</li>
<li>Open a terminal and navigate to the directory containing the script.</li>
<li>Run the script using Node.js:</li>

```
node script.js
```
<li>Follow the on-screen instructions to enter numbers. Type "done" when you're finished.</li>
</ul>

<h2>Code Overview</h2>
<h3>Classes</h3>
<h4>Node</h4>
<p>Represents a node in the linked list.</p>
<h4>LinkedList</h4>
<p>Manages the linked list operations, including appending nodes, reversing the list, and finding the second largest number.</p>

<h2>Functions</h2>
<h3>takeUserInput</h3>
<p>Prompts the user to enter numbers until "done" is entered.
Appends valid numbers to the linked list.</p>

<h2>Usage</h2>
<ul>
<li>The script uses the readline module to take user input.</li>
<li>Numbers are appended to the linked list using the append method.</li>
<li>After entering "done," the linked list is reversed using the reverseList method.</li>
<li>The second largest number is found using the findSecondLargest method.</li>
</ul>

```
Enter a number (or "done" to finish): 100
Enter a number (or "done" to finish): 150
Enter a number (or "done" to finish): 250
Enter a number (or "done" to finish): 200
Enter a number (or "done" to finish): 300
Enter a number (or "done" to finish): done
Second largest number: 250
LinkedList {
  head: Node { data: 300, next: Node { data: 200, next: [Node] } }
}
```
