export const recurse = (parent, delegate) => {
    delegate(parent);
    parent.slots.get('').forEach(child => recurse(child, delegate));
};