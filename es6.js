//chrome://flags/#enable-javascript-harmony
//http://www.es6fiddle.net/lenvwiqk/
/**
 *SET
 */
var items = new Set();
items.add(5);
items.add("5");
items.add(5); //ignored
items.size;    // 2

var items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
items.size;    // 5
items.has(5)
items.delete(5)
items.clear()
/*********************/
var properties = {
    "width": 1,
    "height": 1
};
if (properties[someName]) {
    // do something
}

var properties = new Set();
properties.add("width");
properties.add("height");

if (properties.has(someName)) {
    // do something
}

//МAP

new Map()

var data = {},
  element = document.getElementById("my-div");
  data[element] = metadata;

var map = new Map();
map.set("name", "Nicholas");
map.set(document.getElementById("my-div"), { flagged: false });

var name = map.get("name"),
    meta = map.get(document.getElementById("my-div"));

var map = new Map([ ["name", "Nicholas"], ["title", "Author"]]);

map.size //2

//Тільки для ключів

for (let key of map.keys()) {
    console.log("Key: %s", key);
}

//Тільки для значень
for (let value of map.values()) {
    console.log("Value: %s", value);
}

//Пари ключ-значення ()
for (let item of map.items()) {
    console.log("Key: %s, Value: %s", item[0], item[1]);
}

//Пари ключ-значення
for (let item of map) {
    console.log("Key: %s, Value: %s", item[0], item[1]);
}

//WeakMap

var map = new WeakMap(),
element = document.querySelector(".element");
map.set(element, "Original");
console.log(map.has(element));   // true
console.log(map.get(element));   // "Original"
map.delete(element);
console.log(map.has(element));   // false
console.log(map.get(element));   // undefined

//WeakSet

var ws = new WeakSet();
var obj = {};
var foo = {};
ws.add(window);
ws.add(obj);
ws.has(window); // true
ws.has(foo);   
ws.clear(); // empty the whole WeakSet


