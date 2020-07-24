import '/node_modules/@javascribble/quantum/source/main.js';
import '/source/main.js';

document.body.style.visibility = 'visible';

const root = document.querySelector('#root');
const add = (object, parent) => {
    const tree = new Tree();
    tree.name = object.name;
    for (const child of object.children) {
        add(child, tree)
    }

    parent.appendChild(tree);
};

fetch('/test/resources/tree.json').then(file => file.json()).then(objects => objects.forEach(object => add(object, root)));