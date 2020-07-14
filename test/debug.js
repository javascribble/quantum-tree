const resources = [
    '/source/templates/tree.html'
];

Promise.all(resources.map(resource => fetch(resource).then(response => response.text().then(html => document.body.insertAdjacentHTML('beforeend', html)))));

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