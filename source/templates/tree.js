import { template } from '../../references/quantum.js';

const html = `
<details>
    <summary>
        <div id="title">
            <div id="name" contenteditable></div>
            <div draggable="true"></div>
            <div id="menu">
                <span id="expand" class="icon" title="expand">&#8794;</span>
                <span id="collapse" class="icon" title="collapse">&#8793;</span>
            </div>
        </div>
        <div id="selection">&nbsp;</div>
    </summary>
    <slot></slot>
</details>
`;

const css = `
* {
    user-select: none;
}

::slotted(*) {
    display: inline-block;
    border-left: solid 1px;
    margin-left: 5px;
    padding-left: 5px;
    width: calc(100% - 11px);
}

[selected] {
    background-color: var(--primary-selection-color);
}

[draggable] {
    flex-grow: 1;
}

summary, #name {
    outline: none;
}

#title {
    display: inline-flex;
    justify-content: space-between;
    width: calc(100% - 21px);
}

#name {
    min-width: 20px;
}

#menu {
    padding-right: 5px;
}

#selection { 
    display: inline-block;
    position: absolute;
    left: 0;
    right: 0;
    z-index: -1;
}

.icon {
    font-size: small;
    vertical-align: bottom;
}
`;

export const tree = template(html, css);