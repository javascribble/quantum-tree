import { Component, append, clone, define, query, preventDefault, stopPropagation } from '@javascribble/quantum';
import { handleSingleSelect } from '../controls/selection.js';
import { tree, branch } from '../templates/tree.js';

const indent = 20;

export class Tree extends Component {
    constructor() {
        super(tree);
    }

    add(model) {
        const addObjects = (objects, element, level) => {
            const singleIndent = level * indent;
            const doubleIndent = ++level * indent;
            for (const object of objects) {
                const template = clone(branch);

                const title = query(template, '.title');
                title.onclick = (event) => handleSingleSelect(this.shadowRoot, event, [event.target]);
                // title.ondrag = event => event.dataTransfer.setData('id', `#${event.target.parentNode.id}`);
                // title.ondragover = preventDefault;
                // title.ondrop = event => {
                //     preventDefault(event);
                //     const element = query(this.shadowRoot, event.dataTransfer.getData('id'));
                //     event.target.parentNode.parentNode.appendChild(element);
                // };

                const name = query(template, '.name');
                name.style.marginLeft = `${doubleIndent}px`;
                name.innerText = object.name;
                name.onclick = stopPropagation;

                const menu = query(template, '.menu');
                menu.onclick = stopPropagation;

                const details = query(template, 'details');
                const summary = query(details, 'summary');
                summary.style.paddingLeft = `${singleIndent}px`;
                if (object.children && object.children.length > 0) {
                    title.classList.add('summary-hack');
                    addObjects(object.children, details, level);
                } else {
                    summary.style.display = 'none';
                }

                append(element, template);
            }
        };

        addObjects(model, this.shadowRoot, 0);
    }

    remove(model) {

    }
}

define(Tree);