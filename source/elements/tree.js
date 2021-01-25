import html from '../templates/tree.js';

export class Tree extends Component {
    #name = this.shadowRoot.querySelector('#name');
    #icon = this.shadowRoot.querySelector('#icon');

    constructor() {
        super();

        this.#name.addEventListener('click', event => event.stopPropagation());
        this.#icon.addEventListener('click', event => {
            event.stopPropagation();
            if (event.detail === 2) {
                this.toggleAll(this.open);
            } else {
                this.open = !this.open;
            }
        });

        const draggable = this.shadowRoot.querySelector('[draggable]');
        draggable.addEventListener('click', event => {
            this.active = !this.active;
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

    slotChangedCallback(slot, addedElements, deletedElements, currentElements) {
        this.#icon.disabled = currentElements.length === 0;
    }

    toggleAll(open) {
        this.open = open;
        for (const [slot, elements] of this.slots) {
            for (const element of elements) {
                element.toggleAll?.(open);
            }
        }
    }
}

define('quantum-tree', Tree);