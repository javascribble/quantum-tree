import { setTypedAttribute } from '@javascribble/quantum';

export const open = elements => value => setTypedAttribute(elements.details, 'open', value);