/** 真正创建节点，将vnode创建为dom,是孤儿节点 */
export function createElement(vnode) {
    console.log('目的是把虚拟节点', vnode, '插入到标杆', '前');
    let domNode = document.createElement(vnode.sel);
    // 有子节点还是有文本
    if (
        vnode.text != '' &&
        (vnode.children === undefined || vnode.children.length === 0)
    ) {
        // 它内部是文字
        domNode.innerText = vnode.text;
    } else if (Array.isArray(vnode.children) && vnode.children.length > 0) {
        // 它内部是子节点，就要递归创建节点
        for (let i = 0; i < vnode.children.length; i++) {
            // 得到当前这个children
            let ch = vnode.children[i];
            console.log(ch);
            // 创建出他的dom,一旦调用createElment意味着，创建出DOM了，并且他的elm属性指向了创建的DOM
            // 但是还没有上树，是一个孤儿了
            let chDOM = createElement(ch);
            domNode.appendChild(chDOM);
        }
    }

    vnode.elm = domNode;

    // 返回elm,elm属性是一个纯
    return vnode.elm;
}
