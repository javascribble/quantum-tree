export const branchDrop = event => {
    event.preventDefault();
    const { target, dataTransfer } = event;
    const id = dataTransfer.getData('id');
    const branch = document.querySelector(`#${id}`);
    target.appendChild(branch);
};

export const branchDragOver = event => {
    event.preventDefault();
    event.stopPropagation();
};