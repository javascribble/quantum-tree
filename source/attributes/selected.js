import { setTyped } from '@javascribble/quantum';

export const renderSelected = (element, value) => setTyped(element.selectionElement, 'selected', value);