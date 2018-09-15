import Module from "../base/Module";
import "intersection-observer";
import scrollama from "scrollama";
import { debounce } from "throttle-debounce";

export default class extends Module {
  constructor(el) {
    super(el);

    // -- Properties
    // --------------------------------------------------------------
    this.dom = $.extend({}, this.dom, {
      siteHeader: this.dom.body.find(".site-header"),
      select: el.find(".js-anchors"),
      list: el.find(".js-list"),
      line: el.find(".anchors-menu__line"),
      references: this.dom.body.find(".js-anchor")
    });

    this.navScroller = scrollama();
    this.anchorsScroller = scrollama();
  }

  // -- Methods
  // --------------------------------------------------------------
  init() {
    if (this.dom.references.length < 1) {
      this.dom.el.remove();
      return;
    }

    this.populate();
    this.setNavScroller();
    this.setAnchorsScroller();
    this.bindEvents();
  }

  bindEvents() {
    this.dom.window.on("resize", debounce(250, () => this.resize()));
  }

  get mode() {
    return window.innerWidth < 992 ? "mobile" : "desktop";
  }

  resize() {
    this.navScroller.offsetTrigger(this.anchorsOffset).resize();
    this.anchorsScroller.resize();
  }

  populate() {
    let select = "";
    let list = "";

    for (let x = 0; x < this.dom.references.length; x++) {
      let reference = this.dom.references.eq(x);
      let id = reference.attr("id");
      let name = reference.data("name");

      select += `<option value="${id}">${name}</option>`;
      list += `<li class="anchors-menu__item">
                 <a href="#${id}" class="anchors-menu__link js-scroll-to">${name}</a>
               </li>`;
    }

    this.dom.siteHeader.find(".site-header__anchor-nav").append(select);
    this.dom.select.append(select);
    this.dom.list.append(list);
  }

  setNavScroller() {
    this.navScroller
      .setup({
        step: '[data-module="AnchorsMenu"]',
        container: "[data-page]",
        offset: this.navScrollerOffset,
        debug: false
      })
      .onStepEnter(e => {
        if (e.direction === "down") {
          this.dom.el.addClass("is-docked");
          this.dom.siteHeader.addClass("is-merged");
        }
      })
      .onStepExit(e => {
        if (e.direction === "up") {
          this.dom.el.removeClass("is-docked");
          this.dom.siteHeader.removeClass("is-merged");
        }
      });
  }

  setAnchorsScroller() {
    this.anchorsScroller
      .setup({
        step: ".js-anchor",
        container: "[data-page]",
        offset: this.anchorsOffset,
        debug: false
      })
      .onStepEnter(e => {
        if (e.direction === "down") {
          this.updateNav(e.element.id);
        }
      })
      .onStepExit(e => {
        if (e.direction === "up") {
          let el = this.dom.body.find(
            `[href="#${e.element.id}"].anchors-menu__link`
          );
          let prev = el
            .parent()
            .prev()
            .children();

          if (prev.length) {
            el = prev;
          }

          this.updateNav(el.attr("href").substring(1));
        }
      });
  }

  get anchorsOffset() {
    let headerHeight = this.dom.siteHeader.outerHeight() / window.innerHeight;
    if (this.mode === "desktop") {
      headerHeight = headerHeight * 2;
    }
    return headerHeight;
  }

  get navScrollerOffset() {
    let navOffset = 0.001; // Because 0 doesn't work :S

    if (this.mode === "desktop") {
      navOffset = this.dom.siteHeader.outerHeight() / window.innerHeight;
    }

    return navOffset;
  }

  updateNav(id) {
    this.dom.body.find(".js-anchors").val(id);

    let el = this.dom.el.find(`[href="#${id}"]`);

    if (el.length) {
      this.dom.line.css({
        width: el.width(),
        transform: `translateX(${el.position().left}px)`
      });
    }
  }
}
