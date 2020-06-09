import { setTypedAttribute } from '../../references/quantum.js';

export const open = elements => value => setTypedAttribute(elements.details, 'open', value);