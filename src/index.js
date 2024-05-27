import h from './mysnabbdom/h';
import patch from './mysnabbdom/patch';

const container = document.getElementById('container');
const btn = document.getElementById('btn');
// var myNode1 = h('h1', {}, '你好');

const myNode1 = h('section', {}, [
    h('li', { key: 'A' }, 'A'),
    h('li', { key: 'B' }, 'B'),
    h('li', { key: 'C' }, 'C'),
]);

// console.log(myNode1);

patch(container, myNode1);

// const myNode2 = h('section', {}, [
//     h('h1', {}, '我是新的1'),
//     h('h2', {}, '我是新的2'),
// ]);

const myNode2 = h('section', {}, [
    h('li', { key: 'A' }, 'A'),
    h('li', { key: 'B' }, 'B'),
    h('li', { key: 'M' }, 'M'),
    h('li', { key: 'N' }, 'N'),
    h('li', { key: 'C' }, 'C'),
    h('li', { key: 'q' }, 'q'),
]);

btn.onclick = function () {
    patch(myNode1, myNode2);
};
