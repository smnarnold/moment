import Module from "../base/Module";

export default class extends Module {
  constructor(el) {
    super(el);

    this.dom = $.extend({}, this.dom, {
      overlay: el.find(".site-header__overlay"),
      menu: el.find(".site-header__menu"),
      toggle: el.find(".site-header__toggle")
    });

    this.menuIsOpened = false;
  }

  // -- Methods
  // --------------------------------------------------------------
  init() {
    this.bindEvents();
  }

  bindEvents() {
    this.dom.body.on("click touchend", () => this.closeMenu());
    this.dom.el.on("click touchend", e => e.stopPropagation());
    this.dom.overlay.on("click", () => this.closeMenu());
    this.dom.toggle.on("click", () => this.toggleMenu());
  }

  toggleMenu() {
    if (this.menuIsOpened) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  openMenu() {
    this.dom.el.addClass("is-opened");
    this.dom.toggle.addClass("is-active");
    this.menuIsOpened = true;
  }

  closeMenu() {
    this.dom.el.removeClass("is-opened");
    this.dom.toggle.removeClass("is-active");
    this.menuIsOpened = false;
  }
}
