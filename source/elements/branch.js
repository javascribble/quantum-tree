import { Quantum, define, append, clone, query, preventDefault, stopPropagation } from '@javascribble/quantum';
import { handleSingleSelect } from '../controls/selection.js';
import { branch } from '../templates/branch.js';

const indent = 20;

export class Branch extends Quantum {
    constructor() {
        super();

        this.appendChild(clone(branch));
        const root = this;

        this.details = query(root, 'details');

        const title = query(root, '.title');
        title.onclick = (event) => handleSingleSelect(this.getRootNode(), event, [event.target]);
        title.ondrag = event => event.dataTransfer.setData('id', `#${event.target.parentNode.id}`);
        title.ondragover = preventDefault;
        title.ondragleave = event => { };
        title.ondrop = event => {
            preventDefault(event);
            const element = query(root, event.dataTransfer.getData('id'));
            event.target.parentNode.parentNode.appendChild(element);
        };

        const name = query(root, '.name');
        name.onclick = stopPropagation;
        this.updateName = (text) => name.innerText = text;

        const menu = query(root, '.menu');
        menu.onclick = stopPropagation;

        const summary = query(root, 'summary');
        this.showSummary = () => {
            summary.style.display = 'block';
            title.classList.add('summary-hack');
        };

        this.updateLevel = (level) => {
            this.level = level;
            name.style.marginLeft = `${(level + 1) * indent}px`;
            summary.style.paddingLeft = `${level * indent}px`;
        };
    }

    static attributes = {
        name: (element, value) => {
            element.updateName(value);
        }
    };

    add() {
        this.showSummary();
        const branch = new Branch();
        branch.updateLevel(this.level + 1);
        return append(this.details, branch);
    }

    remove(branch) {
        // TODO: Remove branch.
        // TODO: If last child set summary display: none.
    }
}

define(Branch);