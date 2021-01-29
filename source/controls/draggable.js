export const branchDragStart = event => {
    const { dataTransfer, target } = event;
    if (!target.id) {
        target.id = `id-${quantum.randomString()}`;
    }

    dataTransfer.setData('id', target.id);
};