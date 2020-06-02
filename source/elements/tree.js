import { Quantum, define, append, shadow, clone, query, preventDefault, stopPropagation } from '@javascribble/quantum';
import { handleSingleSelect } from '../controls/selection.js';
import { tree } from '../templates/tree.js';

export class Tree extends Quantum {
    constructor() {
        super();

        const root = shadow(this);
        append(root, clone(tree));

        const slot = root.querySelector('slot');
        slot.addEventListener('slotchange', (event) => {
            slot.assignedElements();
        });

        //const draggable = query(root, '[draggable]');
        //draggable.onclick = (event) => handleSingleSelect(this.getRootNode(), event, [event.target]);

        // const title = query(root, '.title');
        // title.onclick = (event) => handleSingleSelect(this.getRootNode(), event, [event.target]);
        // title.ondrag = event => event.dataTransfer.setData('id', `#${event.target.parentNode.id}`);
        // title.ondragover = preventDefault;
        // title.ondragleave = event => { };
        // title.ondrop = event => {
        //     preventDefault(event);
        //     const element = query(root, event.dataTransfer.getData('id'));
        //     event.target.parentNode.parentNode.appendChild(element);
        // };

        const icons = query(root, '.icons');
        icons.onclick = preventDefault; //stopPropagation

        const name = query(root, '.name');
        name.onclick = preventDefault; //stopPropagation
        this.updateName = (text) => name.innerText = text;
    }

    static attributes = {
        name: (element, value) => {
            element.updateName(value);
        }
    };
}

define(Tree);