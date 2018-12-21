let alphas = ["1","2","3","4"];
console.log(alphas[0]);
console.log(alphas[1]);

for(var i = 0;i<alphas.length;i++) {
    console.log(alphas[i])
}

var names = new Array("Mary","Tom","Jack","Jill")
console.log(alphas.concat(names))

//Array.prototype.find
var numbers = [1, 2, 3];
var oddNumber = numbers.find((x) => x % 2 == 1);
console.log(oddNumber);

//Array.prototype.findIndex
var numbers = [1, 2, 3];
var oddNumber = numbers.findIndex((x) => x % 2 == 1);
console.log(oddNumber);

//Array.prototype.entries
var numbers = [1, 2, 3];
var val = numbers.entries();
console.log(val.next().value);
console.log(val.next().value);
console.log(val.next().value);
console.log(val.next().value);

//Array.from
for (let i of Array.from('hello')) {
    console.log(i)
}

//Array.prototype.keys ()
console.log(Array.from(['a', 'b'].keys()))