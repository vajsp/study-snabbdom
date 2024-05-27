import { createElement } from './createElement';

export function patchVnode(oldVnode, newVnode) {
    // 判断内存中国是否为同一个节点
    if (oldVnode === newVnode) {
        return;
    }
    // 判断vnode有没有text属性
    if (
        (newVnode.text !== undefined && newVnode.children === undefined) ||
        newVnode.children.length === 0
    ) {
        console.log('新vnode有text属性');
        if (newVnode.text !== oldVnode.text) {
            // 如果新的虚拟节点和老的虚拟节点text不同，那么直接让新的text写入老的innertext,如果老的有children则被覆盖
            oldVnode.elm.innerText = newVnode.text;
        }
    } else {
        console.log('新vnode没有text属性');
        // 判断老的有没有children
        if (oldVnode.children !== undefined && oldVnode.children.length > 0) {
            // 老的有children,此时就是最复杂的情况，就是新老都有children

            // 所有未处理节点的开头
            let un = 0;
            for (let i = 0; i < newVnode.children.length; i++) {
                let ch = newVnode.children[i];
                // 再次遍历，看看oldVnode中有没有节点是它的same
                let isExist = false;

                for (let j = 0; j < oldVnode.children.length; j++) {
                    if (
                        oldVnode.children[j].sel === ch.sel &&
                        oldVnode.children[j].key === ch.key
                    ) {
                        isExist = true;
                    }
                }
                if (!isExist) {
                    console.log(ch, i);
                    let dom = createElement(ch);
                    ch.elm = dom;

                    if (un < oldVnode.children.length) {
                        oldVnode.elm.insertBefore(
                            dom,
                            oldVnode.children[un].elm
                        );
                    } else {
                        oldVnode.elm.appendChild(dom);
                    }
                } else {
                    // 让处理的节点指针下移
                    un++;
                }
            }
        } else {
            // 老的没有children,新的有children
            // 清空老的节点内容
            oldVnode.elm.innerHTML = '';
            // 遍历新的vnode的子节点，创建dom上树
            for (let i = 0; i < newVnode.children.length; i++) {
                let dom = createElement(newVnode.children[i]);
                oldVnode.elm.appendChild(dom);
            }
        }
    }
}
