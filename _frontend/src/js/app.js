const Modules = {
  AnchorsMenu: require("./modules/AnchorsMenu").default,
  Filters: require("./modules/Filters").default,
  SiteHeader: require("./modules/SiteHeader").default
};

const Pages = {
  Default: require("./pages/Default").default,
  Home: require("./pages/Home").default
};

$(() => {
  window.dom = {
    body: $("body"),
    document: $(document),
    html: $("html"),
    window: $(window)
  };

  initClasses(window.dom.body, "page"); // Pages
  initClasses(window.dom.body, "module"); // Modules
  window.dom.window.trigger("app:ready");
});

window.initClasses = function(context = window.dom.body, selector = "module") {
  let attr = `data-${selector}`;
  let classes = selector === "page" ? Pages : Modules;
  let items = context[0].querySelectorAll(`[${attr}]`);
  let styles = `background: ${
    selector === "page" ? "#8bbeb2" : "#18314f"
  }; color: #fff; padding: 0 0.25em;`;

  for (let i = 0; i < items.length; i++) {
    // ex: all [data-page]
    let item = items[i]; // ex: [data-page="Home"]
    let list = item.getAttribute(attr).split(/\s+/); // ex: Home

    for (let j = 0; j < list.length; j++) {
      let name = list[j];

      if (classes[name] !== undefined) {
        console.log(`%c✔️${name}%O`, styles, { el: item });
        new classes[name]($(item)).init();
      } else if (classes.Default !== undefined) {
        console.warn(`%c⚠️${name}%O`, styles, { el: item });
        new classes.Default($(item)).init();
      } else {
        console.error(`%c❌️${name}%O`, styles, { el: item });
      }
    }
  }
};
