import { Quantum, define } from '../../references/quantum.js';
import { selected } from '../attributes/selected.js';
import { name } from '../attributes/name.js';
import { open } from '../attributes/open.js';
import { collapse } from '../events/collapse.js';
import { expand } from '../events/expand.js';
import { select } from '../events/select.js';
import { tree } from '../templates/tree.js';

export class Tree extends Quantum {
    constructor() {
        super(tree);
    }

    static elements = {
        details: 'details',
        draggable: '[draggable]',
        selection: '#selection',
        collapse: '#collapse',
        expand: '#expand',
        menu: '#menu',
        name: '#name'
    };

    static attributes = {
        selected,
        name,
        open
    };

    static events = {
        collapse,
        expand,
        select
    };
}

define(Tree);