import { enableBranchControls } from '../utilities/controls.js';
import { recurse } from '../utilities/recurse.js';
import html from '../templates/tree.js';

const { Component, template, define } = quantum;

export class Tree extends Component {
    #name = this.shadowRoot.querySelector('#name');
    #icon = this.shadowRoot.querySelector('#icon');

    constructor() {
        super();

        this.#name.addEventListener('click', event => event.stopPropagation());
        this.#icon.addEventListener('click', event => {
            event.stopPropagation();
            if (event.detail === 2) {
                recurse(this, element => element.open = this.open);
            } else {
                this.open = !this.open;
            }
        });

        const draggable = this.shadowRoot.querySelector('[draggable]');
        draggable.addEventListener('click', event => this.active = !this.active);

        enableBranchControls(this);
    }

    static template = template(html);

    static get observedAttributes() { return ['name', 'open', 'active']; }

    attributeChangedCallback(attribute, previousValue, currentValue) {
        if (attribute === 'name') {
            this.#name.innerText = currentValue;;
        }
    }

    slotChangedCallback(slot, addedElements, deletedElements, currentElements) {
        this.#icon.disabled = currentElements.length === 0;
    }
}

define('quantum-tree', Tree);