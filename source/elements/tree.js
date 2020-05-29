import { Component, append, clone, define, query, stopPropagation } from '@javascribble/quantum';
import { tree, parentObject, childObject } from '../templates/tree.js';
import { handleSelection } from '../utilities/selection.js';

const indent = 20;

export class Tree extends Component {
    constructor() {
        super(tree);
    }

    add(state) {
        const addObjects = (objects, element, level) => {
            const singleIndent = level * indent;
            const doubleIndent = ++level * indent;
            for (const object of objects) {
                const isParent = object.children && object.children.length > 0;
                const template = clone(isParent ? parentObject : childObject);
                if (isParent) {
                    const details = query(template, 'details');
                    const summary = query(details, 'summary');
                    summary.style.paddingLeft = `${singleIndent}px`;
                    addObjects(object.children, details, level);
                }

                const title = query(template, '.title');
                title.onclick = (event) => handleSelection(this.shadowRoot, event, [event.target]);

                const name = query(template, '.name');
                name.style.marginLeft = `${doubleIndent}px`;
                name.innerText = object.name;
                name.onclick = stopPropagation;

                const menu = query(template, '.menu');
                menu.onclick = stopPropagation;

                append(element, template);
            }
        };

        addObjects(state, this.shadowRoot, 0);
    }

    remove() {

    }
}

define(Tree);