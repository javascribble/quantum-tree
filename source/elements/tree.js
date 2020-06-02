import { Quantum, define, append, shadow, clone, query, preventDefault } from '@javascribble/quantum';
import { handleSingleSelect } from '../controls/selection.js';
import { tree } from '../templates/tree.js';

export class Tree extends Quantum {
    constructor() {
        super();

        const root = shadow(this);
        append(root, clone(tree));

        const slot = root.querySelector('slot');
        slot.addEventListener('slotchange', (event) => {
            for (const branch of slot.assignedElements()) {

            }
        });

        const draggable = query(root, '[draggable]');
        const highlight = query(root, '#highlight');
        draggable.onclick = (event) => {
            handleSingleSelect(this.getRootNode(), event, [highlight]);
            preventDefault(event);
        };

        // title.ondrag = event => event.dataTransfer.setData('id', `#${event.target.parentNode.id}`);
        // title.ondragover = preventDefault;
        // title.ondragleave = event => { };
        // title.ondrop = event => {
        //     preventDefault(event);
        //     const element = query(root, event.dataTransfer.getData('id'));
        //     event.target.parentNode.parentNode.appendChild(element);
        // };

        const expand = query(root, '#expand');
        expand.onclick = console.log;

        const collapse = query(root, '#collapse');
        collapse.onclick = console.log;

        const menu = query(root, '#menu');
        menu.onclick = preventDefault;

        const name = query(root, '#name');
        name.onclick = preventDefault;
        this.renderName = (text) => name.innerText = text;
    }

    static attributes = {
        name: (element, value) => {
            element.renderName(value);
        },
        selected: (element, value) => {

        },
        expanded: (element, value) => {

        }
    };

    expand() {

    }

    collapse() {

    }
}

define(Tree);