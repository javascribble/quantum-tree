import html from '../templates/tree.js';

export class Tree extends quantum.Component {
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

    static template = quantum.template(html);

    static get observedAttributes() { ['name', 'selected', 'open']; }

    attributeChangedCallback(attribute, previousValue, currentValue) {
        switch (attribute) {
            case 'name':
                this.#name.innerText = currentValue;
                break;
            case 'selected':
                quantum.setAttribute(this.#selection, attribute, value);
                break;
            case 'open':
                quantum.setAttribute(this.#details, attribute, value);
                break;
        }
    }
}

quantum.define('quantum-tree', Tree);