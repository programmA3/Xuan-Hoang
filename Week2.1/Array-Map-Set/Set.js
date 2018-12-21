var emptySet = new Set();
console.log(emptySet)
var exampleSet = new Set([1,2,3]);
console.log(exampleSet)

console.log(exampleSet[2]);

//has
var exampleSet = new Set([1,2,3]);
console.log(exampleSet.has(0));
console.log(exampleSet.has(1));

var exampleSet = new Set([1,2,3]);
exampleSet.add(2)
console.log(exampleSet);
exampleSet.add(4)
console.log(exampleSet);

var exampleSet = new Set([1,2,3]);
console.log(exampleSet.delete(2));
console.log(exampleSet);
console.log(exampleSet.delete(2));
console.log(exampleSet);

var exampleSet = new Set([1,2,3]);
exampleSet.clear();
console.log(exampleSet);