

const map = new Map();
map.set(11,'jenny');
map.set(22,'bill');
map.set(33,'elon');
map.set(44,'stew');
console.log(map);

//to get value in the map
const key33value = map.get(33);
console.log(key33value);
//if we add a value and key is same so object is override that value
map.set(22,'ABC');
console.log(map);
//add new element with new key
map.set(55,'jenny');
console.log(map);

//find the size of map
console.log(`total elements in an map is : ${map.size}`);


//delete elements in map
map.delete(33);
console.log(map);

//this key/element is in the map or not
console.log(map.has(22));

console.table(map);

//return all keys
const keys = map.keys();
console.log(keys);

//return all values
const values = map.values();
console.log(values);

//traverse map
// const keys = map.keys();
for (const key of keys) {
console.log(key,map.get(key));
}


