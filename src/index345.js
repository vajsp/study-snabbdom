console.log(11111111111);

import { h } from 'snabbdom/h';
import { init } from 'snabbdom/init';
import { classModule } from 'snabbdom/modules/class';
import { eventListenersModule } from 'snabbdom/modules/eventlisteners';
import { propsModule } from 'snabbdom/modules/props';
import { styleModule } from 'snabbdom/modules/style';

// 创建出patch函数
const patch = init([
    classModule,
    eventListenersModule,
    propsModule,
    styleModule,
]);

// 创建虚拟节点
// let myVnode1 = h(
//     'a',
//     { props: { href: 'https://www.baidu.com', target: '_blank' } },
//     '百度'
// );

// const myVnode2 = h('div', {}, '我是一个盒子');

const v3 = h('ul', {}, [
    h('li', {}, 'A'),
    h('li', {}, 'B'),
    h('li', {}, 'C'),
    h('li', {}, 'D'),
]);

const container = document.getElementById('container');
const btn = document.getElementById('btn');
// patch(container, myVnode1);
patch(container, v3);

const v4 = h('ul', {}, [
    h('li', {}, 'A'),
    h('li', {}, 'B'),
    h('li', {}, 'C'),
    h('li', {}, 'D'),
    h('li', {}, 'E'),
]);

btn.onclick = function () {
    patch(v3, v4);
};
