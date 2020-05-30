const create = (tag) => document.createElement(tag);

const append = (element, child) => element.appendChild(child);

const query = (element, selector) => element.querySelector(selector);

const queryAll = (element, selector) => element.querySelectorAll(selector);

const shadow = (element, options = { mode: 'open' }) => element.attachShadow(options);

const clone = (element, deep = true) => (element.content || element).cloneNode(deep);

const stopPropagation = (event) => event.stopPropagation();

class Component extends HTMLElement {
    constructor(template) {
        super();

        append(shadow(this), clone(template));
    }
}

const typeName = (type) => type.name.toLowerCase();

const typeKebab = (type) => type === Component ? typeName(type) : `${typeName(type)}-${typeKebab(Object.getPrototypeOf(type))}`;

const define = (type) => customElements.define(typeKebab(type), type);

const template = (html, ...css) => {
    if (css.length > 0) {
        html = `<style>${css.join('')}</style>${html}`;
    }

    const template = create('template');
    template.innerHTML = html;
    return template;
};

const repeat = (interpolation, models, delimiter) => models.map(interpolation).join(delimiter || '');

var name = `<span class="name" contenteditable></span>`;

var details = `<details>
    <summary>&nbsp;</summary>
</details>`;

var styles = `* { 
    user-select: none; 
}

[selected] { 
    background-color: var(--primary-selection-color); 
}

summary { 
    position: relative; 
    outline: none;
    width: 21px;
}

.title { 
    display: flex; 
    justify-content: space-between;
}

.name {
    outline: none;
}

.icon {
    font-size: 0.95em;
}

.container { 
    position: absolute; 
    width: 100%; 
}`;

const expandIcon = { code: 8794, title: "expand" };
const collapseIcon = { code: 8793, title: "collapse" };

const childIcons = [expandIcon];
const parentIcons = [expandIcon, collapseIcon];

const icon = (model) => `<span class="icon" title="${model.title}">&#${model.code};</span>`;

const menu = (models) => `${name}<div class="menu">${repeat(icon, models)}</div>`;

const childObject = template(`<div class="title">${menu(childIcons)}</div>`);

const parentObject = template(`<div class="title container">${menu(parentIcons)}</div>${details}`);

const tree = template(``, styles);

const attribute = 'selected';

const select = element => element.setAttribute(attribute, '');

const deselect = element => element.removeAttribute(attribute);

const selected = element => element.hasAttribute(attribute);

const toggleSelection = element => selected(element) ? deselect(element) : select(element);

const handleSelection = (tree, event, elements) => {
    if (event.ctrlKey) {
        elements.forEach(toggleSelection);
    } else if (event.shiftKey) ; else {
        queryAll(tree, `[${attribute}]`).forEach(deselect);
        elements.forEach(select);
    }
};

const indent = 20;

class Tree extends Component {
    constructor() {
        super(tree);
    }

    add(state) {
        const addObjects = (objects, element, level) => {
            const singleIndent = level * indent;
            const doubleIndent = ++level * indent;
            for (const object of objects) {
                const isParent = object.children && object.children.length > 0;
                const template = clone(isParent ? parentObject : childObject);
                if (isParent) {
                    const details = query(template, 'details');
                    const summary = query(details, 'summary');
                    summary.style.paddingLeft = `${singleIndent}px`;
                    addObjects(object.children, details, level);
                }

                const title = query(template, '.title');
                title.onclick = (event) => handleSelection(this.shadowRoot, event, [event.target]);

                const name = query(template, '.name');
                name.style.marginLeft = `${doubleIndent}px`;
                name.innerText = object.name;
                name.onclick = stopPropagation;

                const menu = query(template, '.menu');
                menu.onclick = stopPropagation;

                append(element, template);
            }
        };

        addObjects(state, this.shadowRoot, 0);
    }

    remove() {

    }
}

define(Tree);

export { Tree };
