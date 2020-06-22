import { query, setTypedAttribute } from '../../references/quantum.js';

export const open = root => {
    const details = query(root, 'details');
    return value => setTypedAttribute(details, 'open', value);
};