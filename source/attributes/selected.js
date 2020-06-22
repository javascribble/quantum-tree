import { query, setTypedAttribute } from '../../references/quantum.js';

export const selected = root => {
    const selection = query(root, '#selection');
    return value => setTypedAttribute(selection, 'selected', value);
};