import html from '../templates/tree.js';

export class Tree extends quantum.Component {
    #name;
    #icon;

    constructor() {
        super();

        this.#name = this.shadowRoot.querySelector('#name');
        this.#icon = this.shadowRoot.querySelector('#icon');

        const draggable = this.shadowRoot.querySelector('[draggable]');
        draggable.onclick = event => {
            if (this.dispatchEvent(new Event('select', { cancelable: true }))) {
                this.active = !this.active;
            }
        };

        this.#name.onclick = event => event.stopPropagation();
        this.#icon.ondblclick = event => this.toggleAll(!this.open);
        this.#icon.onclick = event => {
            this.open = !this.open;
            event.stopPropagation();
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

    addBranch(branch) {
        const tree = new Tree();
        tree.name = branch.name;
        tree.open = branch.open;
        tree.active = branch.active;
        this.appendChild(tree);
        if (Array.isArray(branch.children)) {
            for (const child of branch.children) {
                tree.addBranch(child);
            }
        }
    }

    toggleAll(value) {
        this.open = value;
        for (const [slot, elements] of this.slots) {
            for (const element of elements) {
                element.toggleAll(value);
            }
        }
    }
}

quantum.define('quantum-tree', Tree);