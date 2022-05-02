import dom from "./dom";
class FullPage {
  private currentIndex: any;
  private options: any;
  private animating: boolean;

  constructor(options) {
    let defaultOptions = {
      element: "",
      duration: "1s",
    };
    this.currentIndex = 0;
    this.options = Object.assign({}, defaultOptions, options);
    this.animating = false;
    this.checkOptions().initHtml().bindEvents();
  }

  checkOptions() {
    if (!this.options.element) {
      throw new Error("element is required");
    }
    return this;
  }

  initHtml() {
    this.options.element.style.overflow = "hidden";
    dom.every(this.options.element.children, (section) => {
      section.style.transition = `transform ${this.options.duration}`;
    });
    return this;
  }

  bindEvents() {
    // 添加事件,滚轮事件
    this.options.element.addEventListener("wheel", (e) => {
      let targetIndex = this.currentIndex + (e.deltaY > 0 ? 1 : -1);
      this.goToSection(targetIndex).then(
        () => {
          this.currentIndex = targetIndex;
        },
        () => {}
      );
    });
    return this;
  }

  /**
   * 节流，以免过快出现bug
   * @param targetIndex
   */
  goToSection(targetIndex) {
    return new Promise((resolve: any, reject: any) => {
      if (this.animating) {
        // 滚动中
        reject();
      } else if (targetIndex < 0) {
        // 小于0情况
        reject();
      } else if (targetIndex >= this.options.element.children.length) {
        // 划到最后一页情况
        reject();
      } else {
        this.animating = true;
        let that = this;
        this.options.element.children[0].addEventListener(
          "transitionend",
          function callback() {
            this.removeEventListener("transitionend", callback);
            that.animating = false;
            resolve();
          }
        );
        dom.every(this.options.element.children, (section) => {
          section.style.transform = `translateY(-${100 * targetIndex}%)`;
        });
      }
    });
  }
}

export default FullPage;
