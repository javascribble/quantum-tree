import { preventDefault } from '@javascribble/quantum';

export const select = (dispatcher, elements, attributes) => {
    elements.name.onclick = preventDefault;
    elements.menu.onclick = preventDefault;
    elements.draggable.onclick = event => {
        preventDefault(event);
        if (dispatcher()) {
            if (event.ctrlKey) {
                attributes.selected = !attributes.selected;
            } else {
                attributes.selected = true;
            }
        }
    };
};