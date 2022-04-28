import dom from './dom'

export default class ImagePicker {
  public options: any;
  public domRefs: any;

  constructor(options) {
    let defaultOptions = {
      element: null,
      upload: {
        url: "",
        method: "",
        inputName: "",
      },
      parseResponse: null,
      fallbackImage: "",
    };
    this.options = Object.assign({}, defaultOptions, options);
    this.checkOptions();
    this.domRefs = {
      img: this.options.element.querySelector("img"),
    };
    this.initHtml();
    this.bindEvents();
  }

  checkOptions() {
    let {
      element,
      upload: { url, method, inputName },
    } = this.options;
    if (!element || !url || !method || !inputName) {
      throw new Error("Some options is required");
    }
    return this;
  }

  initHtml() {
    let { element } = this.options
    let fileInput = (this.domRefs.fileInput = dom.create('<input type="file"/>'))
    dom.append(element, fileInput)
  }

  bindEvents() {}
}
