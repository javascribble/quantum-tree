import '/node_modules/@javascribble/quantum/source/main.js';
import '/source/main.js';

const model = {
    name: 'json test 1',
    data: {},
    children: [{
        name: 'json test 2',
        data: {},
        children: []
    }]
};

const root = document.querySelector('quantum-tree');
root.import(model);

const parent = document.createElement('quantum-tree');
parent.name = "js test 1";
parent.open = true;
parent.active = true;

const child = document.createElement('quantum-tree');
child.name = "js test 2";
parent.appendChild(child);

root.appendChild(parent);

document.body.style.visibility = 'visible';