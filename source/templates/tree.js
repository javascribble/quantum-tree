export default `
<style>
    :host([open]) ::slotted(*) {
        display: block;
    }

    :host([open]) #icon::before {
        transform: rotate(90deg);
    }

    :host([active]) #highlight {
        background-color: var(--background-color);
    }

    ::slotted(*) {
        display: none;
        border-left: solid 1px;
        margin-left: 6px;
        padding-left: 5px;
    }

    #name {
        outline: none;
        user-select: none;
    }

    #icon::before {
        cursor: pointer;
        content: '\u25B6';
        display: inline-block;
        line-height: 1em;
    }

    #highlight {
        display: inline-block;
        position: absolute;
        left: 0;
        right: 0;
        z-index: -1;
    }
</style>
<div id="highlight">&nbsp;</div>
<div draggable="true">
    <span id="icon"></span>
    <span id="name" contenteditable></span>
</div>
<slot></slot>
`;