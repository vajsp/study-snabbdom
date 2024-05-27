import h from './mysnabbdom/h';
import patch from './mysnabbdom/patch';

const container = document.getElementById('container');
const btn = document.getElementById('btn');
// var myNode1 = h('h1', {}, '你好');

const myNode1 = h('section', {}, [
    h('li', {}, 'A'),
    h('li', {}, 'B'),
    h('li', {}, 'C'),
]);

// console.log(myNode1);

patch(container, myNode1);

// const myNode2 = h('section', {}, [
//     h('h1', {}, '我是新的1'),
//     h('h2', {}, '我是新的2'),
// ]);

const myNode2 = h('section', {}, '你好');

btn.onclick = function () {
    patch(myNode1, myNode2);
};
