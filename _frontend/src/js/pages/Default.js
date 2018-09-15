import Page from "../base/Page";

export default class extends Page {
  constructor(el) {
    super(el);

    this.dom = $.extend({}, this.dom, {});
  }

  init() {
    super.init();
    this.bindEvents();
  }

  bindEvents() {
    super.bindEvents();
  }
}
