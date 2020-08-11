import html from '../templates/branch.js';

export class Branch extends quantum.Component {
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

    addBranch(options) {
        const branch = new Branch();
        branch.name = options.name;
        branch.open = options.open;
        branch.active = options.active;
        this.appendChild(branch);
        if (Array.isArray(options.children)) {
            for (const child of options.children) {
                branch.addBranch(child);
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

quantum.define('quantum-branch', Branch);