var person = [ "Joe","joe@gmail.com", 30, true];

console.log(person[0]);
console.log(typeof person[0]);

for(var v of person)
  console.log(v);

var [v1,v2,v3,v4] = person;  // deconstructing 

console.log(v1 + " is " +  typeof v1);



