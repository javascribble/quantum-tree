import { preventDefault } from '@javascribble/quantum';

export const select = (component, elements, dispatcher) => {
    elements.name.onclick = preventDefault;
    elements.menu.onclick = preventDefault;
    elements.draggable.onclick = event => {
        preventDefault(event);
        if (dispatcher()) {
            if (event.ctrlKey) {
                component.selected = !component.selected;
            } else {
                component.selected = true;
            }
        }
    };
};