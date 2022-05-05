interface Options {
  element: HTMLDivElement;
  currentPage: number;
  totalPage: number;
}

class Pager {
  private options: any;
  private domRefs: any;
  private currentPage: number;

  constructor(options: Options) {
    let defaultOptions = {
      element: null,
      buttonCount: 10,
      currentPage: 1,
      totalPage: 1,
      pageQuery: "", // 'page'
      templates: {
        number: "<span>%page%</span>",
        prev: "<button class=prev>上一页</button>",
        next: "<button class=next>下一页</button>",
        first: "<button class=first>首页</button>",
        last: "<button class=last>末页</button>",
      },
    };
    this.options = Object.assign({}, defaultOptions, options);
    this.domRefs = {};
    this.currentPage = parseInt(this.options.currentPage, 10) || 1;
    this.checkOptions().initHtml().bindEvents();
  }

  checkOptions() {
    if (!this.options.element) {
      throw new Error("element is required");
    }
    return this;
  }

  initHtml() {
    return this;
  }

  bindEvents() {
    return this;
  }
}

export default Pager;
