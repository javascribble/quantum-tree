import { Component, template, define } from '../import.js';
import html from '../templates/tree.js';

export class Tree extends Component {
    #name;

    constructor() {
        super();

        this.#name = this.shadowRoot.querySelector('#name');
        this.#name.addEventListener('click', event => event.stopPropagation());

        const icon = this.shadowRoot.querySelector('#icon');
        icon.addEventListener('click', event => {
            if (event.detail === 2) {
                this.toggleAll(this.open);
            } else {
                this.open = !this.open;
            }

            event.stopPropagation();
        });

        const draggable = this.shadowRoot.querySelector('[draggable]');
        draggable.addEventListener('click', event => {
            if (this.dispatchEvent(new Event('select', { cancelable: true }))) {
                this.active = !this.active;
            }
        });
    }

    static template = template(html);

    static get observedAttributes() { return ['name', 'open', 'active']; }

    attributeChangedCallback(attribute, previousValue, currentValue) {
        switch (attribute) {
            case 'name':
                this.#name.innerText = currentValue;
                break;
        }
    }

    toggleAll(open) {
        this.open = open;
        for (const [slot, elements] of this.slots) {
            for (const element of elements) {
                element.toggleAll(open);
            }
        }
    }
}

define('quantum-tree', Tree);