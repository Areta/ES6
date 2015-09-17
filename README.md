# ES6
ES6

Усіс ці функції є  новими  і експериментальними
У JS масиви використовують тільки числові індекси, а якщо потрібні строкові, то використовуються  об’єкти. 

Тому в ES6 вводять нові колекції такі як Map, SET, WeakMap,WeakSet, щоб краще та більш ефективно зберігати дані


##SET

'var items = new Set();
items.add(5);
items.add("5");
items.add(5);' //ignored

items.size;    // 2

var items = new Set([1, 2, 3, 4, 5, 5, 5, 5]); унікальність ключів
items.size;    // 5
items.has(5)
items.delete(5)
items.clear()

Для того щоб відслідковувати унікальні значення, найбільш поширенно це створення обєкта 

var properties = {
    "width": 1,
    "height": 1
};

if (properties[someName]) {
    // do something
}

Але набагато зручніше  тепер робити так
var properties = new Set();
properties.add("width");
properties.add("height");

if (properties.has(someName)) {
    // do something
}
