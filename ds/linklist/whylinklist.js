/*
Why Linklist ? 
Issue with Array 
1.  An Array always consume contiguoes  memory location
2. When we actually add a new element to an array it creates copies of itself for adding new elements
3. If we want to add a element in front of an array it will take ->  O(n) time to complete a task.

To resolve this issues we have one and only option i.e. - LINKLIST
Now we why we use Linklist, Lets know about how we can declare a linklist 
Linklist is nothing but the combination of nodes. 
It is linear data structure and form a chain like structure.
what is node ? 
Node is basically an object in Which we have store the data value  of a particular node and the refrence of next 
node.  --->   i.e represented by next and data keyword 
we have some other termology in this as well like -
head : - head is nothing but the first node itself 
tail :-  tail is the last node of linklist and we have  store null in the refrence key of tail node. 

Limitation of LinkList 
1. we cannot access element directly in between in linklist but we can do this in array. 

Function relevant to make LL
1. add  ->  .at head   . at tail  . in between 
2. remove  -> .remove athead  . remove atTail . remove inbetween
3. access -> .get head .get tail . getat 
4. display function -> to show the elements of linklist

Types of Linklists : -
1. Single LL ->  uni-directional flow only. 
2. Double LL ->  you can go next and Previous node. 
3. Circular LL -> In this linklist tail node has refrence of head node 
4. Skip LL -> It is used for fast transversal in LL.
*/