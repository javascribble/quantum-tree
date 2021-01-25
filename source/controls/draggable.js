export const branchDragStart = event => {
    const { dataTransfer, target } = event;
    if (!target.id) {
        target.id = `id-${randomString()}`;
    }

    dataTransfer.setData('id', target.id);
};