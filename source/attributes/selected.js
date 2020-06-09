import { setTypedAttribute } from '../../references/quantum.js';

export const selected = elements => value => setTypedAttribute(elements.selection, 'selected', value);