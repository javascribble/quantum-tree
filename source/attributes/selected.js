import { setTypedAttribute } from '@javascribble/quantum';

export const selected = elements => value => setTypedAttribute(elements.selection, 'selected', value);