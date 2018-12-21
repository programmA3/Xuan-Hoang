var map = new Map([[1,2],[2,3]]);
console.log(map)

for (const item of map){
    console.log(item);
}

for (const [key,value] of map){
    console.log(`key: ${key}, value: ${value}`);
}

var map = new Map([[2,2],[2,3]]);
console.log(map)
console.log(map.get(1))
console.log(map.has(2))

var map = new Map([[1,2],[2,3]]);
map.set(4,5);
console.log(map)

var map = new Map([[1,2],[2,3]]);
map.set(4,5);
console.log(map)
console.log(map.delete(1))
console.log(map)
console.log(map.delete(1))
console.log(map)

var map = new Map([[1,2],[2,3]]);
console.log(map)
map.clear();
console.log(map)