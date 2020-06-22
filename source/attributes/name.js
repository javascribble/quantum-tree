import { query } from '../../references/quantum.js';

export const name = root => {
    const name = query(root, '#name');
    return value => name.innerText = value;
};