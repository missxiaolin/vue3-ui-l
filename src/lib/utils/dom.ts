let dom: any = {

  /**
   * @param element 
   * @param eventType 
   * @param selector 
   * @param fn 
   * @returns 
   */
  on: function (element, eventType, selector, fn) {
    element.addEventListener(eventType, (e) => {
      let el = e.target;
      while (!el.matches(selector)) {
        if (element === el) {
          el = null;
          break;
        }
        el = el.parentNode;
      }
      el && fn.call(el, e, el);
    });
    return element;
  },

  /**
   * @param element 
   * @param fn 
   */
  onSwipe: function (element, fn) {
    let x0, y0;
    element.addEventListener("touchstart", function (e) {
      x0 = e.touches[0].clientX;
      y0 = e.touches[0].clientY;
    });
    element.addEventListener("touchmove", function (e) {
      if (!x0 || !y0) {
        return;
      }
      let xDiff = e.touches[0].clientX - x0;
      let yDiff = e.touches[0].clientY - y0;

      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
          fn.call(element, e, "right");
        } else {
          fn.call(element, e, "left");
        }
      } else {
        if (yDiff > 0) {
          fn.call(element, e, "down");
        } else {
          fn.call(element, e, "up");
        }
      }
      x0 = undefined;
      y0 = undefined;
    });
  },

  /**
   * @param element 
   * @returns 
   */
  index: function (element) {
    let siblings = element.parentNode.children;
    for (let index = 0; index < siblings.length; index++) {
      if (siblings[index] === element) {
        return index;
      }
    }
    return -1;
  },

  /**
   * @param element 
   * @param className 
   * @returns 
   */
  uniqueClass: function (element, className) {
    dom.every(element.parentNode.children, (el) => {
      el.classList.remove(className);
    });
    element.classList.add(className);
    return element;
  },

  /**
   * @param nodeList 
   * @param fn 
   * @returns 
   */
  every: function (nodeList, fn) {
    for (var i = 0; i < nodeList.length; i++) {
      fn.call(null, nodeList[i], i);
    }
    return nodeList;
  },

  /**
   * http://stackoverflow.com/a/35385518/1262580
   * @param html 
   * @param children 
   * @returns 
   */
  create: function (html, children) {
    var template = document.createElement("template");
    template.innerHTML = html.trim();
    let node = template.content.firstChild;
    if (children) {
      dom.append(node, children);
    }
    return node;
  },

  /**
   * @param parent 
   * @param children 
   * @returns 
   */
  append: function (parent, children) {
    if (children.length === undefined) {
      children = [children];
    }
    for (let i = 0; i < children.length; i++) {
      parent.appendChild(children[i]);
    }
    return parent;
  },

  /**
   * @param parent 
   * @param children 
   * @returns 
   */
  prepend: function (parent, children) {
    if (children.length === undefined) {
      children = [children];
    }
    for (let i = children.length - 1; i >= 0; i--) {
      if (parent.firstChild) {
        parent.insertBefore(children[i], parent.firstChild);
      } else {
        parent.appendChild(children[i]);
      }
    }
    return parent;
  },

  /**
   * @param element 
   * @returns 
   */
  removeChildren: function (element) {
    while (element.hasChildNodes()) {
      element.removeChild(element.lastChild);
    }
    return this;
  },

  /**
   * @param element 
   * @param eventType 
   * @param detail 
   * @returns 
   */
  dispatchEvent: function (element, eventType, detail) {
    let event = new CustomEvent(eventType, { detail });
    element.dispatchEvent(event);
    return this;
  },
};


export default dom