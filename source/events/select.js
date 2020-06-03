import { dispatch, preventDefault } from '@javascribble/quantum';

export const raiseSelect = element => event => {
    preventDefault(event);
    if (dispatch(element, 'select')) {
        if (event.ctrlKey) {
            element.selected = !element.selected;
        } else {
            element.selected = true;
        }
    }
};