import html from '../templates/tree.js';

export class Tree extends quantum.Component {
    static template = quantum.template(html);
}

quantum.define('quantum-tree', Tree);