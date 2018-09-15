import Module from "../base/Module";
import URLSearchParams from "url-search-params";

export default class extends Module {
  constructor(el) {
    super(el);

    this.dom = $.extend({}, this.dom, {
      selects: el.find("select"),
      submit: el.find("button")
    });
  }

  // -- Methods
  // --------------------------------------------------------------
  init() {
    this.bindEvents();
  }

  bindEvents() {
    this.dom.submit.on("click", e => this.changeUrl(e));
  }

  changeUrl(e) {
    e.preventDefault();
    let params = new URLSearchParams();
    let root = this.dom.el.data("root");

    this.dom.selects.each((i, el) => {
      let $el = $(el);
      let taxonomy = $el.data("taxonomy");
      let value = $el.val();

      if (!taxonomy || value === "all") return;

      params.set(taxonomy, value);
    });

    window.location = params.toString() !== "" ? root + "?" + params : root;
  }
}
