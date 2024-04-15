function createNode (value) {
  return {
    data : value,
    next : null,
  }
}

function display(head){
  let temp = head;
  let res = ""; // Initialize res outside the loop
  while(temp != null){ // Loop until temp becomes null
    res =   res +" " +temp.data ; // Concatenate the data to res
    temp = temp.next;
  }
  console.log(res);
}

function atTail(head, value) {
  // edge case 
  if (head == null) {
    return createNode(value);
  }
  let temp = head;
  while (temp.next !== null) {
    temp = temp.next;
  }
  let newNode = createNode(value);
  temp.next = newNode; // Set the next pointer of the last node to the new node
  return head;
}

function removeAtTail(head){
  if(head == null || head.next == null) return null ;
  let temp = head;
  while( temp.next.next !== null ){
    temp = temp.next;
  }
  temp.next = null;
  return head; 
}

function removeAtHead(head) {
  if (head === null || head.next === null) {
    // Return null if the list is empty or if there's only one node
    return null;
  }
  let newHead = head.next;
  head.next = null;
  return newHead;
}


function atHead (head, value) {
  let newNode = createNode(value);
  newNode.next = head;
  head = newNode;
  return head;
}

function addAtIndex(head, index, data) {
  // consider that ->  i is always less then length of LL.
  if(head === null) return atHead(head,data);
  let temp = head;
  let count = 0;
  
  // Traverse to the node before the insertion point
  while (count < index-1) {
    temp = temp. next;
    count++;
  }
  // Create a new node
  let newNode = createNode(data);
  // Insert the new node into the list
  let store = temp.next;
  temp.next = newNode;
  newNode.next = store;
  // Return the head of the list
  return head;
}
function removAtIndex(head, index) {
  if(head == null) return head;
  if(head.next == null) return null; 
  let temp = head;
  let count = 0;

  while (count < index -1) {
    temp = temp. next;
   count++;
  }
  if(temp.next == null && count <= index-1) {
    return head;
  }
let removeNode = temp.next;
let addNode = temp.next.next;
temp.next = addNode;
  return head;
}



let head = null;
head = atHead(head ,20);
head = atHead(head ,10);
head = atTail(head, 40);
head = atTail(head, 50);

display(head);
head = addAtIndex(head,3,45);
display(head);
head = removAtIndex(head,5);
display(head);

