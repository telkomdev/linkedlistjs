const linkedlist = require('./linkedlist');

let e1 = new linkedlist.Element({id: 1, val: "Andy"});
let e2 = new linkedlist.Element({id: 2, val: "Bony"});
let e3 = new linkedlist.Element({id: 3, val: "Lisa"});
let e6 = new linkedlist.Element({id: 4, val: "Madi"});
let e8 = new linkedlist.Element({id: 8, val: "Rendy"});
let e9 = new linkedlist.Element({id: 9, val: "Dewi"});

let ll = new linkedlist.LinkedList();
ll.addFirst(e1);
ll.addFirst(e2);
ll.addFirst(e3);
ll.addLast(e6);
ll.addLast(e8);
//ll.addFirst(e8);

for (let e of ll.iterateBackward()) {
    console.log(e.value);
    console.log('-------');
}

// console.log(ll.search(e8));

// let t = e8 == e8;
// console.log(t);
// console.log('------ after delete -------');

// // console.log(ll.deleteFirst().value);
// // console.log(ll.deleteFirst().value);
// // console.log(ll.deleteLast().hasNext());

// console.log('------ -------');
// for (let e of ll.iterate()) {
//     console.log(e.value);
// }
// console.log('------ -------');

console.log('-------------');
console.log(ll.length());

// console.log('-------------');
// console.log(ll.tail.value);