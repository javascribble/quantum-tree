import '/node_modules/@javascribble/quantum/source/main.js';
import '/node_modules/@javascribble/quantum-loader/source/main.js';
import { Tree } from '/source/main.js';

const parent = new Tree();
parent.name = "json test 1";
parent.open = true;
parent.active = true;

const child = new Tree();
child.name = "json test 2";
parent.appendChild(child);

const root = document.querySelector('#root');
root.addEventListener('input', console.log);
root.appendChild(parent);

document.body.style.visibility = 'visible';