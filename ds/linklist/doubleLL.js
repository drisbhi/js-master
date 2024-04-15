
// Double LL
function createNode (value) {
  return {
    data : value,
    next : null,
    prev : null,
  }
}

function atHead (head , data){
  if(head === null) return createNode(data);
   let newNode = createNode(data);
   newNode.next = head;
   head.prev = newNode;
   head = newNode;
   return head;
}

function atTail (head , data){
  if(head === null) return createNode(data);
    let temp = head;
  while(temp.next !== null){
    temp = temp.next;
  }
  let newTail = createNode(data);
  temp.next = newTail;
  newTail.prev = temp
   return head;
}

function removeHead (head){
  if(head === null || head.next === null) return null;
  let newHead = head.next;
  head.next = null;
  newHead.prev = null;
  head= newHead;
  return head;
}

function removeTail (head){
  if(head === null || head.next === null) return null;
  let temp = head;
  while(temp.next.next !== null){
    temp = temp.next;
  }
  let tail = temp.next;
  tail.prev = null;
  temp.next = null;
  return head;
}

function display(head){
  let temp = head;
  let res = "X<->"; 
  while(temp != null){ 
    res +=  temp.data + '<->';
    temp = temp.next;
  }
  res+= "X";
  console.log(res);
}


let head = null;
head = atHead(head , 10);
head = atHead(head , 20);
head = atHead(head , 30);
head = atHead(head , 40);
head = atHead(head , 50);
head = atTail(head , 100);
head = atTail(head , 200);
display(head);

