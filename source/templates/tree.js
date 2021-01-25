export default `
<style>
    :host([open]) ::slotted(*) {
        display: block;
    }

    :host([open]) #icon {
        transform: rotate(90deg);
    }

    ::slotted(*) {
        display: none;
        border-left: solid 1px;
        margin-left: 5px;
        padding-left: 5px;
    }

    #highlight {
        background-color: var(--background-color);
        position: absolute;
        left: 0;
        right: 0;
        z-index: -1;
    }

    #icon {
        background: none;
        line-height: 1em;
        outline: none;
        border: none;
        padding: 0;
    }

    #name {
        outline: none;
    }
</style>
<div id="highlight">&nbsp;</div>
<div draggable="true">
    <button id="icon" disabled>\u25B6</button>
    <span id="name" contenteditable></span>
</div>
<slot></slot>
`;