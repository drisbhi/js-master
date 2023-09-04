let x = {
  name: "Ash",
  company: "TFT",
  years: 2.5,
  designation: "Software Engineer L1",
};

// loop over an object
for (const entry of Object.entries(x)) {
  console.log(entry);
}

// there is one more way using for..in loop
// for in loops helps to loop over keys
for (let key in x) {
  console.log(`${keys}  : ${x[key]}`);
}
