import { Quantum, append, define } from '@javascribble/quantum';
import { tree } from '../templates/tree.js';
import { Branch } from './branch.js';

export class Tree extends Quantum {
    constructor() {
        super(tree);
    }

    add() {
        return append(this.shadowRoot, new Branch());
    }

    remove(branch) {

    }
}

define(Tree);