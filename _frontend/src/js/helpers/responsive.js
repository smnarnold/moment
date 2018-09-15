import { throttle } from "throttle-debounce";

let possibleBreakpointsList = ["xs", "sm", "md", "lg", "xl"];

class Responsive {
  constructor() {
    this.breakpoint = null;
    this.eventName = "breakpointChange";

    this.__private = {
      window: window.jQuery(window),
      body: window.jQuery(window.document.body),
      dummyDiv: window.jQuery(window.document.createElement("div"))
    };

    this.__detectBreakpoint(false);
    this.__private.window.on(
      "resize",
      throttle(100, () => this.__detectBreakpoint(true))
    );
    this.__private.window.on("app:ready", () =>
      this.__private.window.trigger(this.eventName, this.breakpoint)
    );
  }

  __detectBreakpoint(triggerEvent) {
    this.__private.dummyDiv.appendTo(this.__private.body);

    let vpSize = null;

    for (let i = possibleBreakpointsList.length - 1; i >= 0; i--) {
      vpSize = possibleBreakpointsList[i];

      this.__private.dummyDiv.attr("class", `d-${vpSize}-none`);

      if (this.__private.dummyDiv.is(":hidden")) {
        break;
      }
    }

    this.__private.dummyDiv.detach();

    if (this.breakpoint !== vpSize) {
      this.breakpoint = vpSize;

      if (triggerEvent) {
        this.__private.window.trigger(this.eventName, this.breakpoint);
      }
    }
  }

  isBreakpointGreaterThan(compareToBreakpoint) {
    let compareIndex = possibleBreakpointsList.indexOf(compareToBreakpoint);
    if (compareIndex === -1) return false;

    let currentIndex = possibleBreakpointsList.indexOf(this.breakpoint);
    return currentIndex > compareIndex;
  }

  isBreakpointSmallerThan(compareToBreakpoint) {
    let compareIndex = possibleBreakpointsList.indexOf(compareToBreakpoint);
    if (compareIndex === -1) return false;

    let currentIndex = possibleBreakpointsList.indexOf(this.breakpoint);
    return currentIndex < compareIndex;
  }

  isBreakpointGreaterOrEqualTo(compareToBreakpoint) {
    let compareIndex = possibleBreakpointsList.indexOf(compareToBreakpoint);
    if (compareIndex === -1) return false;

    let currentIndex = possibleBreakpointsList.indexOf(this.breakpoint);

    return currentIndex >= compareIndex;
  }

  isBreakpointSmallerOrEqualTo(compareToBreakpoint) {
    let compareIndex = possibleBreakpointsList.indexOf(compareToBreakpoint);
    if (compareIndex === -1) return false;

    let currentIndex = possibleBreakpointsList.indexOf(this.breakpoint);
    return currentIndex <= compareIndex;
  }
}

export default new Responsive();
