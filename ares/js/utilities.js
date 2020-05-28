export default class Utilities {
    /**
     *@description forEach polyfill for internet explorer
     *@return {void}
     */
    ieForEachPolyfill() {
        if (window.NodeList && !NodeList.prototype.forEach) {
            NodeList.prototype.forEach = Array.prototype.forEach;
        }
    }

    /**
     *@description creates html and inserts into specified location
     *@param string parent_to_append_to - selector to put new html
     *@param string html - html to add to parent
     *@param string location - where to add in relation to parent using JS method insertAdjacentHTML - arguments include beforeBegin, beforeEnd, afterBegin, afterEnd
     */
    async createHTML(html, parent_to_append_to, location) {
        return new Promise((resolve) => {
            const parent = document.querySelector(parent_to_append_to);
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
        const node_list = document.querySelectorAll(selector);

        if (!node_list) return;

        node_list.forEach((node, index) => {
            node.setAttribute(attribute, argument);
        });
    }

    /**
     *@description updates innerHTML of a node list
     *@param string selector - selector to update
     *@param string html - html to add
     */
    updateHTML(selector, html) {
        const node_list = document.querySelectorAll(selector);

        if (!node_list) return;

        node_list.forEach((node, index) => {
            node.innerHTML = html;
        });
    }

    /**
     *@description moves a child element into a parent element
     *@param string child_selector - selector to move into parent
     *@param string parentSelector - selector to move child element into
     */
    appendToParent(child_selector, parent_selector) {
        const child_element = document.querySelector(child_selector);
        const parent_element = document.querySelector(parent_selector);

        if (!child_element || !parent_element) return;

        parent_element.appendChild(child_element);
    }

    // should do this using mutationObserver
    async waitForSelectorInDOM(selector) {
        return new Promise((resolve) => {
            const interval = setInterval(() => {
                const element = document.querySelector(selector);
                if (element) {
                    resolve(element);
                    clearInterval(interval);
                    return element;
                }
            }, 500);
        });
    }

    moveElementIntoExistingWrapper(element_to_move, wrapper, adjacent_position) {
        if (!document.querySelector(wrapper) || !document.querySelector(element_to_move)) return;

        document.querySelector(wrapper).insertAdjacentElement(adjacent_position, document.querySelector(element_to_move));
    }

    // duplicate of createWrapper(), use createWrapper and move any existing use of this method to createWrapper()
    async moveOrphanedElementsIntoNewWrapper(elements_array, wrapper_id, adjacent_element_class, adjacent_position) {
        return new Promise((resolve) => {
            if (document.querySelector(adjacent_element_class)) {
                document.querySelector(adjacent_element_class).insertAdjacentHTML(adjacent_position, `<div class id="${wrapper_id}"></div>`);
                elements_array.forEach((element) => {
                    document.getElementById(wrapper_id).insertAdjacentElement('beforeEnd', element);
                    resolve();
                });
            }
        });
    }

    async createWrapper(query_selectors, wrapper_parent, new_wrapper_class, adjacent_location) {
        const wrapper = document.createElement('div');

        if (!wrapper) return;

        wrapper.setAttribute('class', new_wrapper_class);
        Array.prototype.forEach.call(document.querySelectorAll(query_selectors), (children) => {
            wrapper.appendChild(children);
        });

        document.querySelector(wrapper_parent).insertAdjacentElement(adjacent_location, wrapper);
    }

    createModal(array_of_elements_to_put_in_modal_body, modal_title, page_name, open_button_parent_selector, open_button_location) {
        if (!page_name) return;

        document.querySelector(open_button_parent_selector).insertAdjacentHTML(open_button_location, `<span class="open-modal">Show ${modal_title}</span>`);

        document.body.insertAdjacentHTML(
            'beforeEnd',
            `<div class="modal-overlay"><div class="modal-container"><div class="modal-header"><h3>${modal_title}</h3><span class="close-modal"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13"><polyline stroke="#333" fill="transparent" points="1 1,6.5 6.5,12 1"/><polyline stroke="#333" fill="transparent" points="1 12,6.5 6.5,12 12"/></svg></span></div><div class="modal-content"></div></div></div>`
        );

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

    /**
     * @description adds extra logos to the header, will only insert if window size is greater that 1200px
     * @param {object} images - an object with one or more images, their class names and insertAdjacentHtml position
     * @property {string} images[].insertPosition - position for insertAdjacentHTML to insert element into header
     * @property {string} images[].className - name of class tag for each element being insterted
     * @property {string} images[].imageUrl - url for image src
     */
    async addMultipleHeaderLogos(images) {
        await this.waitForSelectorInDOM('header');
        const header = document.querySelector('header');
        let logos_loaded;

        function widthChange(mq) {
            if (!mq.matches || logos_loaded) return;
            try {
                Object.keys(images).forEach((e) => {
                    header.insertAdjacentHTML(images[e].insertPosition, `<img class="${images[e].className}" src="${images[e].imageUrl}">`);
                    logos_loaded = true;
                });
            } catch (error) {
                console.error(error);
            }
        }
        const mq = window.matchMedia('(min-width: 1200px)');
        widthChange(mq);
        mq.addListener(widthChange);
    }

    emailVerificationSetup() {
        const script = document.createElement('script');
        script.text = `
            const DeBounce_APIKEY = 'public_T0tSVklSNEZRTEtkc1c5MFZoUWhKZz09';
            const DeBounce_BlockFreeEmails = 'false';
        `;
        document.body.appendChild(script);

        const debounce_script = document.createElement('script');
        debounce_script.setAttribute('src', 'https://cdn.debounce.io/widget/DeBounce.js');
        debounce_script.setAttribute('async', true);
        document.body.appendChild(debounce_script);
    }

    /**
     *@description creates custom tag in a properties image
     *@param string text - text of tag
     *@param int propId - property id to add the tag to
     */
    addPropThumbTag(text, propId) {
        if (!document.querySelector(`#theArnProperty${propId} .ArnPropThumb > .propThumbTag`) && document.querySelector(`#theArnProperty${propId}`)) {
            const property_thumbnail = document.querySelector(`#theArnProperty${propId} .ArnPropThumb`);
            property_thumbnail.insertAdjacentHTML('afterbegin', `<div class="propThumbTag">${text}</div>`);
        }
    }
}
