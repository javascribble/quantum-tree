import { Quantum, define, query, preventDefault, stopPropagation } from '@javascribble/quantum';
import { handleSingleSelect } from '../controls/selection.js';
import { branch } from '../templates/branch.js';

const indent = 20;

export class Branch extends Quantum {
    constructor() {
        super(branch);

        // const singleIndent = level * indent;
        // const doubleIndent = ++level * indent;

        // const title = query(template, '.title');
        // title.onclick = (event) => handleSingleSelect(this.shadowRoot, event, [event.target]);
        // title.ondrag = event => event.dataTransfer.setData('id', `#${event.target.parentNode.id}`);
        // title.ondragover = preventDefault;
        // title.ondragleave = event => {

        // };

        // title.ondrop = event => {
        //     preventDefault(event);
        //     const element = query(this.shadowRoot, event.dataTransfer.getData('id'));
        //     event.target.parentNode.parentNode.appendChild(element);
        // };

        // const name = query(template, '.name');
        // name.style.marginLeft = `${doubleIndent}px`;
        // name.innerText = object.name;
        // name.onclick = stopPropagation;

        // const menu = query(template, '.menu');
        // menu.onclick = stopPropagation;

        // const details = query(template, 'details');
        // const summary = query(details, 'summary');
        // summary.style.paddingLeft = `${singleIndent}px`;
        // if (object.children && object.children.length > 0) {
        //     title.classList.add('summary-hack');
        //     addObjects(object.children, details, level);
        // } else {
        //     summary.style.display = 'none';
        // }



        // if (object.children && object.children.length > 0) {
        //     //branch.showSummary();
        //     addObjects(object.children, branch, level++);
        // }
    }

    static attributes = {
        title: (element, value) => {

        }
    };
}

define(Branch);