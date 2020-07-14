import { Component, setAttribute } from '../../references/quantum.js';

export class Tree extends Component {
    #name;
    #details;
    #selection;

    constructor() {
        super();

        this.#name = this.shadowRoot.querySelector('#name');
        this.#details = this.shadowRoot.querySelector('details');
        this.#selection = this.shadowRoot.querySelector('#selection');

        this.shadowRoot.querySelector('#collapse').onclick = event => event.preventDefault();
        this.shadowRoot.querySelector('#expand').onclick = event => event.preventDefault();
        this.shadowRoot.querySelector('#menu').onclick = event => event.preventDefault();
        this.#name.onclick = preventDefault;

        this.shadowRoot.querySelector('[draggable]').onclick = event => {
            preventDefault(event);
            this.dispatchEvent(new Event('select'));
        };
    }

    static template = document.querySelector('#quantum-tree');

    static attributes = [
        'selected',
        'name',
        'open'
    ];

    nameChangedCallback(value) {
        this.#name.innerText = value;
    }

    openChangedCallback(value) {
        setAttribute(this.#details, 'open', value);
    }

    selectedChangedCallback(value) {
        setAttribute(this.#selection, 'selected', value);
    }
}

customElements.define('quantum-tree', Tree);