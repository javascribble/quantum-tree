import { Quantum, define, append, shadow, clone } from '@javascribble/quantum';
import { tree } from '../templates/tree.js';
import { Branch } from './branch.js';

export class Tree extends Quantum {
    constructor() {
        super();

        append(shadow(this), clone(tree));
    }

    add() {
        const branch = new Branch();
        branch.updateLevel(0);
        return append(this.shadowRoot, branch);
    }

    remove(branch) {

    }
}

define(Tree);