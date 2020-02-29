export default class Utilities {

    /**
     *@description forEach polyfill for internet explorer
     *@return {void}
     */
    ieForEachPolyfill() {
        if ('NodeList' in window && !NodeList.prototype.forEach) {
            NodeList.prototype.forEach = function(callback, thisArg) {
                thisArg = thisArg || window;
                for (var i = 0; i < this.length; i++) {
                    callback.call(thisArg, this[i], i, this);
                }
            };
        }
    }

    /**
     *@description creates html and inserts into specified location
     *@param string parent_to_append_to - selector to put new html
     *@param string html - html to add to parent
     *@param string location - where to add in relation to parent using JS method insertAdjacentHTML - arguments include beforeBegin, beforeEnd, afterBegin, afterEnd
     */
    async createHTML(html, parent_to_append_to, location) {
        return await new Promise(resolve => {
            let parent = document.querySelector(parent_to_append_to);

            if (!parent || parent == null) return;

            parent.insertAdjacentHTML(location, html);
            resolve();
        });
    }

    /**
     *@description updates an attribute tag of a specified selector
     *@param string selector - selector to update
     *@param string argument - value to update
     *@param string attribute - which attribute to update
     */
    updateAttribute(selector, argument, attribute) {
        let node_list = document.querySelectorAll(selector);

        if (!node_list) return;

        node_list.forEach(function(node, index) {
            node.setAttribute(attribute, argument);
        });
    }

    /**
     *@description updates innerHTML of a node list
     *@param string selector - selector to update
     *@param string html - html to add
     */
    updateHTML(selector, html) {
        let node_list = document.querySelectorAll(selector);

        if (!node_list) return;

        node_list.forEach(function(node, index) {
            node.innerHTML = html;
        });
    }

    /**
     *@description moves a child element into a parent element
     *@param string child_selector - selector to move into parent
     *@param string parentSelector - selector to move child element into
     */
    appendToParent(child_selector, parent_selector) {
        let child_element = document.querySelector(child_selector);
        let parent_element = document.querySelector(parent_selector);

        if (!child_element || !parent_element) return;

        parent_element.appendChild(child_element);
    }

    async waitForSelectorInDOM(selector) {
        return await new Promise(resolve => {
            let interval = setInterval(() => {
                if (document.querySelector(selector)) {
                    resolve();
                    clearInterval(interval);
                };
            }, 100);
        });
    }

    createModal(array_of_elements_to_put_in_modal_body, modal_title, page_name, open_button_parent_selector, open_button_location) {
        if (!page_name) return;

        document.querySelector(open_button_parent_selector).insertAdjacentHTML(open_button_location, `<span class="open-modal">Show ${modal_title}</span>`);

        document.body.insertAdjacentHTML('beforeEnd', `<div class="modal-overlay"><div class="modal-container"><div class="modal-header"><h3>${modal_title}</h3><span class="close-modal"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13"><polyline stroke="#333" fill="transparent" points="1 1,6.5 6.5,12 1"/><polyline stroke="#333" fill="transparent" points="1 12,6.5 6.5,12 12"/></svg></span></div><div class="modal-content"></div></div></div>`);

        array_of_elements_to_put_in_modal_body.forEach((element) => {
            document.querySelector('.modal-content').insertAdjacentElement('beforeEnd', element);
        });

        document.querySelector('.open-modal').addEventListener('click', () => {
            document.querySelector('.modal-overlay').classList.toggle('show-modal');
        });

        document.querySelector('.close-modal').addEventListener('click', () => {
            document.querySelector('.modal-overlay').classList.toggle('show-modal');
        });
    }
}