import { query, preventDefault } from '../../references/quantum.js';

export const select = (root, dispatch) => {
    query(root, '#name').onclick = preventDefault;
    query(root, '#menu').onclick = preventDefault;
    query(root, '[draggable]').onclick = event => {
        preventDefault(event);
        dispatch();
    };
};