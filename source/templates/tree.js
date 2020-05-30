import { template, repeat } from '@javascribble/quantum';
import name from '../markup/name.html';
import details from '../markup/details.html';
import styles from '../styles/tree.css';

const expandIcon = { code: 8794, title: "expand" };
const collapseIcon = { code: 8793, title: "collapse" };

const childIcons = [expandIcon];
const parentIcons = [expandIcon, collapseIcon];

const icon = (model) => `<span class="icon" title="${model.title}">&#${model.code};</span>`;

const menu = (models) => `${name}<div class="menu">${repeat(icon, models)}</div>`;

export const childObject = template(`<div class="title">${menu(childIcons)}</div>`);

export const parentObject = template(`<div class="title container">${menu(parentIcons)}</div>${details}`);

export const tree = template(``, styles);