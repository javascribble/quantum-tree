import { Quantum, define } from '../../references/quantum.js';
import { tree } from '../templates/tree.js';
import { selected } from '../attributes/selected.js';
import { name } from '../attributes/name.js';
import { open } from '../attributes/open.js';
import { collapse } from '../events/collapse.js';
import { expand } from '../events/expand.js';
import { select } from '../events/select.js';

export class Tree extends Quantum {
    constructor() {
        super(tree);
    }

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