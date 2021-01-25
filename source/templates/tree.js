export default `
<style>
    :host([open]) #icon {
        transform: rotate(90deg);
    }

    :host([active]) #title {
        background-color: var(--active-color);
    }    

    :host([open]) ::slotted(*) {
        display: block;
    }

    ::slotted(*) {
        display: none;
        padding-left: 10px;
    }
    
    #title:hover {
        background-color: var(--hover-color);
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
<div id="title" draggable="true">
    <button id="icon" disabled>\u25B6</button>
    <span id="name" contenteditable></span>
</div>
<slot></slot>
`;