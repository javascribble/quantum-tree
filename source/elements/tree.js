import { Quantum, define, append, shadow, clone, query, preventDefault } from '@javascribble/quantum';
import { renderSelected } from '../attributes/selected.js';
import { renderName } from '../attributes/name.js';
import { renderOpen } from '../attributes/open.js';
import { raiseSelect } from '../events/select.js';
import { tree } from '../templates/tree.js';

export class Tree extends Quantum {
    static attributes = {
        name: renderName,
        open: renderOpen,
        selected: renderSelected,
    };

    constructor() {
        super();

        const root = shadow(this);
        append(root, clone(tree));

        query(root, '[draggable]').onclick = raiseSelect(this);
        query(root, '#menu').onclick = preventDefault;
        query(root, '#expand').onclick = (event) => this.open = true;
        query(root, '#collapse').onclick = (event) => this.open = false;

        this.detailsElement = query(root, 'details');
        this.selectionElement = query(root, '#selection');
        this.nameElement = query(root, '#name');
        this.nameElement.onclick = preventDefault;
    }
}

define(Tree);