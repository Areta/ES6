//chrome://flags/#enable-javascript-harmony
/**
 *SET
 */

var items = new Set();
items.add(5);
items.add("5");
items.add(5); //ignored
items.size;    // 2

var items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);// унікальність ключів
items.size;    // 5
items.has(5)
items.delete(5)
items.clear()

/**
 * Для того щоб відслідковувати унікальні значення,найбільш поширенно це створення обєкта
 */

var properties = {
    "width": 1,
    "height": 1
};
if (properties[someName]) {
    // do something
}
// Так зручніше
var properties = new Set();
properties.add("width");
properties.add("height");

if (properties.has(someName)) {
    // do something
}

//МAP

new Map()
//Створити такий об’єкт неможливо

var data = {},
  element = document.getElementById("my-div");
  data[element] = metadata;

//а так будe можливо

var map = new Map();
map.set("name", "Nicholas");
map.set(document.getElementById("my-div"), { flagged: false });

var name = map.get("name"),
    meta = map.get(document.getElementById("my-div"));

//Можна створювати колекції з любими типами ключа та значення

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

//на  відміну від SET , WeakSets представляє собою колекцію обєктів, а не тільки 

//довільні значення любого типу

var ws = new WeakSet();
var obj = {};
var foo = {};
ws.add(window);
ws.add(obj);
ws.has(window); // true
ws.has(foo);    // false, foo has not been added to the set
ws.delete(window); // removes window from the set
ws.has(window);    // false, window has been removed
ws.clear(); // empty the whole WeakSet


