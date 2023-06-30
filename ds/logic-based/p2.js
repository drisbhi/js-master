 //  Note : - This question is asked in Primathon Interview Round Two
 

// We have an array   
// const arr = [ { id: 1, name: 'some name' } ,{ id: 2, name: 'fixex' },
//  { id: 3, name: 'soam' }];
// we want to make a new array with the same objects having only name property like:-  [ { name: 'some name' } ]

const arr = [ { id: 1, name: 'some name' } ,{ id: 2, name: 'fixex' },
{ id: 3, name: 'soam' }];


const res = arr.map((item)=> ({
   name : item.name 
}))

// This follow back question of above to make it using reduce function 
const second = arr.reduce( ( ar , item)=>{ 
ar.push ({ name : item.name})
return ar ;
},[])
console.log(second)