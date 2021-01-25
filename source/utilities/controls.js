import { branchDragOver, branchDrop } from '../controls/droppable.js';
import { branchDragStart } from '../controls/draggable.js';

export const enableBranchControls = branch => {
    branch.addEventListener('dragstart', branchDragStart);
    branch.addEventListener('dragover', branchDragOver);
    branch.addEventListener('drop', branchDrop);
};