
class FullPage {
    private currentIndex: any;
    private options: any;
    private animating: boolean;

    constructor(options) {
        let defaultOptions = {
          element: '',
          duration: '1s',
        }
        this.currentIndex = 0
        this.options = Object.assign({}, defaultOptions, options)
        this.animating = false
        this.checkOptions().initHtml().bindEvents()
      }

      checkOptions() {
          return this
      }

      initHtml() {
          return this
      }

      bindEvents() {
          return this
      }
}

export default FullPage