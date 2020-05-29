import { queryAll } from '@javascribble/quantum';

const attribute = 'selected';

const select = element => element.setAttribute(attribute, '');

const deselect = element => element.removeAttribute(attribute);

const selected = element => element.hasAttribute(attribute);

const toggleSelection = element => selected(element) ? deselect(element) : select(element);

export const handleSelection = (tree, event, elements) => {
    if (event.ctrlKey) {
        elements.forEach(toggleSelection);
    } else if (event.shiftKey) {
        // TODO: Add shift selection.
    } else {
        queryAll(tree, `[${attribute}]`).forEach(deselect);
        elements.forEach(select);
    }
};