import UAParser from "ua-parser-js";
import responsiveHelper from "./../helpers/responsive";

export default class Page {
  constructor(el) {
    this.dom = $.extend({}, window.dom, {
      el: el
    });

    this.parser = new UAParser().getResult();
  }

  init() {
    this.setDeviceType();
  }

  setDeviceType() {
    this.dom.html
      .addClass(this.parser.os.name.toLowerCase())
      .addClass(this.parser.browser.name.toLowerCase());
  }

  bindEvents() {
    this.dom.window.on("breakpointChange", (e, breakpoint) =>
      this.onBreakpointChange(breakpoint)
    );
  }

  // eslint-disable-next-line no-unused-vars
  onBreakpointChange(breakpoint) {
    console.log(
      `%cBootstrap: ${responsiveHelper.breakpoint}`,
      "background: #573e7d; color: #fff; padding: 0 .5em;"
    );
  }
}
