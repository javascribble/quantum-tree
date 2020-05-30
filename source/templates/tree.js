import { template, repeat } from '@javascribble/quantum';
import name from '../markup/name.html';
import details from '../markup/details.html';
import styles from '../styles/tree.css';

const expandIcon = { code: 8794, title: "expand" };
const collapseIcon = { code: 8793, title: "collapse" };

const icon = (model) => `<span class="icon" title="${model.title}">&#${model.code};</span>`;

export const branch = template(`
<div>
    <div class="title" draggable="true">
        ${name}
        <div class="menu">${repeat(icon, [expandIcon, collapseIcon])}</div>
    </div>
    ${details}
<div>
`);

export const tree = template(``, styles);