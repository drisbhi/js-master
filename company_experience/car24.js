
// Rest and spread operator Example 
function test(arg1 , arg2 , ...arg3){
    let arr = [...arg1];
    let obj = {...arg2}
    console.log(arg3.length); 
    console.log(arr); 
    console.log(obj); 
    
    }
    
    test([1,2,3,] , { name : 'sahib' , age : 21} , 'string1' , 56 , { dummy : {  data : "all data"}})
    
    // outbased question on closure
    function test() {
      for (var i = 0; i < 3; i++) {
        (function (j){
          setTimeout(()=> {
          console.log(j);
        }, 1000);
        })(i)
       
      }
    }
    test();

    // 0 1 2

    // outbased question on Asyn Nature of JS
    
    console.log("Print 1");
    
    setTimeout(() => {console.log("Print 2")}, 10);
    
    console.log("Print 3");
    
    setTimeout(() => {console.log("Print 4")}, 0);
    
    // Print 1 
    // print 3
    // Print 4 
    // Print 2


// useMemo Discussion on Value inter-changed 

const sum = useMemo(() => a + b, [a, b])
console.log(sum(3,4));

/* When a and b are interchanged, the useMemo hook will still use the
cached value if and only if the dependencies (a and b) have not changed.
If the values of a and b have changed, the memoized value will be recalculated.

In the scenario you described:

If a was 5 and b was 10, and then becomes a as 10 and b as 5,
the dependencies have changed, and the useMemo hook will recalculate the memoized value.

If a and b are interchanged but their values remain the same
(e.g., a was 5, b was 10, and then becomes a as 5, b as 10),
the dependencies have not changed, and the useMemo hook will
use the cached value without recalculation.

So, whether the memoized value is recalculated or not depends
on whether the values of the dependencies (a and b) have changed.
If the values have changed, it will recalculate; otherwise,
it will use the cached value. */



// call apply and bind

let obj = {
  name: "John",
  age: 25
};

function greet(message) {
  console.log(`${message}, ${this.name}!`);
}

// Using call
greet.call(obj , "Hello");
greet.apply(obj , ["Hi"])
let res = greet.bind(obj , "hello ji ");
res();


// Logical Question 
function sum(data){
    let add = 0; 
    for( const key in  data){
      if( typeof(data[key]) === 'object'&& data[key] !== null ){
         add += sum(data[key]);
      }
      if( typeof(data[key])=== 'number'){
         add += data[key]
      }
    }
    return add; 
  }
  
  let data = {
      a: {
          a: 'a',
          b: 1,
      },
      b: {
          b: 1,
      },
      c: {
          c: {
              e: 'e',
              b: {
                  c: 'c',
                  a: 1
              }
          }
      }
  }
  
  let result = sum(data)
  console.log(result);


  // Flatlist Optimization Technique
    // Using Key Extractor
    <FlatList
    data={data}
    keyExtractor={(item, index) => `${item.id}`}
    renderItem={({ item }) => <ListItem item={item} />}
    />
    // Use Pure Component and Memoization
    const ListItem = React.memo(({ item }) => {
        // render item
      });

   // Windowed Rendering
    <FlatList
    data={data}
    renderItem={({ item }) => <ListItem item={item} />}
    windowSize={5} // Number of items in the initial window
    />   
   //  Avoid Anonymous Functions
//    renderItem={({ item }) => (
//     <ListItem item={item} onPress={() => handlePress(item.id)} />
//   )}
//     Instead Use this 
// renderItem={({ item }) => (
//     <ListItem item={item} onPress={handlePress} />
//   )}

// Use PureComponent or memo for renderItem:
 // If the renderItem component is a class component, make sure it extends PureComponent.
 //  If it's a functional component, wrap it with React.memo to prevent unnecessary renders.
    