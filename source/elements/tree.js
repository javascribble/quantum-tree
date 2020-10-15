import html from '../templates/tree.js';

export class Tree extends quantum.Component {
    #name;

    constructor() {
        super();

        this.#name = this.shadowRoot.querySelector('#name');
        this.#name.onclick = event => event.stopPropagation();

        const icon = this.shadowRoot.querySelector('#icon');
        icon.ondblclick = event => this.#doubleClick(!this.open);
        icon.onclick = event => {
            this.open = !this.open;
            event.stopPropagation();
        };

        const draggable = this.shadowRoot.querySelector('[draggable]');
        draggable.onclick = event => {
            if (this.dispatchEvent(new Event('select', { cancelable: true }))) {
                this.active = !this.active;
            }
        };
    }

    static template = quantum.template(html);

    static get observedAttributes() { return ['name', 'open', 'active']; }

    attributeChangedCallback(attribute, previousValue, currentValue) {
        switch (attribute) {
            case 'name':
                this.#name.innerText = currentValue;
                break;
        }
    }

    #doubleClick(open) {
        this.open = open;
        for (const [slot, elements] of this.slots) {
            for (const element of elements) {
                element.toggle(open);
            }
        }
    }
}

quantum.define('quantum-tree', Tree);