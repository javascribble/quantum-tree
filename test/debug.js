import '/node_modules/@javascribble/quantum/source/global.js';
import '/source/global.js';

const parent = document.createElement('quantum-tree');
parent.name = "json test 1";
parent.open = true;
parent.active = true;

const child = document.createElement('quantum-tree');
child.name = "json test 2";
parent.appendChild(child);

const root = document.querySelector('quantum-tree');
root.addEventListener('input', console.log);
root.appendChild(parent);

document.body.style.visibility = 'visible';