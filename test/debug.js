import '/node_modules/@javascribble/quantum/bundles/main-window.js';
import '/bundles/main.js';

const parent = document.createElement('quantum-tree');
parent.name = "js test 1";
parent.open = true;
parent.active = true;

const child = document.createElement('quantum-tree');
child.name = "js test 2";
parent.appendChild(child);

const root = document.querySelector('quantum-tree');
root.addEventListener('input', console.log);
root.addEventListener('click', console.log);
root.appendChild(parent);

document.body.style.visibility = 'visible';