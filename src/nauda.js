export const $ = (selector) => {
    return document.querySelector(selector);
}

export const $$ = (selector) => {
    return document.querySelectorAll(selector);
}

export const element = (tagName) => {
    return document.createElement(tagName);
}

export const addClass = (el, className) => {
    el.classList.add(className);
}

export const toggleClass = (el, className) => {
    el.classList.toggle(className);
}

export const removeClass = (el, className) => {
    el.classList.remove(className);
}

export const insertAfter = (el1, el2) => {
    el1.parentNode.insertBefore(el2, el1.nextSibling);
}

export const prepend = (root, el) => {
    root.prepend(el);
}

export const append = (root, el) => {
    root.appendChild(el);
}
