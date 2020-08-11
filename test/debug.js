import '/node_modules/@javascribble/quantum/source/main.js';
import '/node_modules/@javascribble/quantum-loader/source/main.js';
import '/source/main.js';

const branch = {
    open: true,
    active: true,
    name: "json test 1",
    children: [
        {
            name: "json test 2"
        }
    ]
};

document.querySelector('#root').addBranch(branch);
document.querySelectorAll('quantum-branch').forEach(element => {
    element.addEventListener('input', console.log);
});
document.body.style.visibility = 'visible';