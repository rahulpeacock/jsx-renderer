/** @jsx h */

function h(nodeName, attributes, ...args) {
  const children = args.length ? [].concat(...args) : null;
  return { nodeName, attributes, children };
}

function render(vnode) {
  // Strings just convert to #text Nodes:
  if (vnode.split) return document.createTextNode(vnode);

  // create a DOM element with the nodeName of our VDOM element:
  const n = document.createElement(vnode.nodeName);

  // copy attributes onto the new node:
  const a = vnode.attributes || {};

  for (const k in a) {
    n.setAttribute(k, a[k]);
  }

  // render (build) and then append child nodes:
  for (const c of vnode.children || []) {
    n.appendChild(render(c));
  }

  return n;
}

// JSX -> VDOM:
const vdom = <div id='foo'>Hello JSX Renderer!</div>;
console.log(vdom);

// VDOM -> DOM:
const dom = render(vdom);

// add the tree to <body>:
document.body.appendChild(dom);
