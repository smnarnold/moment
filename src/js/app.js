/* CSS file Entry point */
import '../scss/main.scss';

/* Helpers */
import 'mdn-polyfills/CustomEvent';
import 'mdn-polyfills/NodeList.prototype.forEach';
import { throttle, debounce } from 'lodash';
import smoothscroll from 'smoothscroll-polyfill';
import DetectKeyboardUser from 'detect-keyboard-user';
import JSvh from './helpers/JSvh';
import UserAgentParser from './helpers/UserAgentParser';

/* eslint-disable global-require */
new UserAgentParser().addClasses();
/* eslint-disable-next-line */
const vh = new JSvh();
/* eslint-disable-next-line */
const myDKU = new DetectKeyboardUser();

smoothscroll.polyfill();

/* eslint-disable global-require */

const Modules = {
  Youtube: require('./Youtube').default,
};

window.dom = {
  body: document.body,
  html: document.documentElement,
};

window.init = function init() {
  const items = document.documentElement.querySelectorAll('[data-module]');
  const styles = 'background: \'#18314f\'; color: #fff; padding: 0 0.25em;';

  items.forEach((item) => {
    const list = item.getAttribute('data-module').split(/\s+/);

    list.forEach((name) => {
      if (Modules[name] !== undefined) {
        console.log(`%c✔️${name}%O`, styles, { el: item });
        new Modules[name](item).init();
      } else if (Modules.Default !== undefined) {
        console.warn(`%c⚠️${name}%O`, styles, { el: item });
        new Modules.Default(item).init();
      } else {
        console.error(`%c❌️${name}%O`, styles, { el: item });
      }
    });
  });
};

if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
  window.init();
} else {
  document.addEventListener('DOMContentLoaded', window.init(window.dom.body));
}

class Site {
  constructor() {
    this.dom = {
      header: document.querySelector('.site-header'),
      main: document.querySelector('main'),
      footer: document.querySelector('.site-footer'),
      vote: document.querySelector('.js-vote'),
    };

    this.previousScrollY = 0;
  }

  /**
   * Methods
   */
  init() {
    this.bindEvents();
    this.setFooter();

    if (this.dom.vote) this.setArticleVote();
  }

  setArticleVote() {
    this.dom.voteBtns = document.querySelectorAll('.vote__item');
    this.canVote = false;
    const { parent } = this.dom.vote.dataset;
    const { slug } = this.dom.vote.dataset;
    let key = 'smn';
    if (parent) key += `.${parent}`;
    if (slug) key += `.${slug}`;

    const status = this.getWithExpiry(key);

    if (status === null) this.canVote = true;

    this.dom.voteBtns.forEach((btn) => {
      if (this.canVote) {
        // eslint-disable-next-line no-param-reassign
        btn.disabled = false;
        btn.classList.remove('is-disabled');
      }

      const text = btn.querySelector('.vote__desc').innerText.replace('\n', ' ').toLowerCase();
      btn.addEventListener('click', () => {
        if (this.canVote) this.castVote(key, text);
      });
    });
  }

  castVote(key, text) {
    this.canVote = false;
    this.setWithExpiry(key, text, 86400000); // 24h

    // eslint-disable-next-line no-undef
    gtag('event', 'feedback', {
      event_category: key,
      event_label: text,
    });

    /* eslint-disable no-param-reassign */
    this.dom.voteBtns.forEach((btn) => {
      btn.disabled = true;
      btn.classList.add('is-disabled');
    });
    /* eslint-enable no-param-reassign */
  }

  bindEvents() {
    window.addEventListener('scroll', throttle(() => this.setScrollDirection(), 300), { passive: true });
    window.addEventListener('resize', debounce(() => this.setFooter(), 300), { passive: true });
  }

  setScrollDirection() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const isScrollingDown = scrollY > this.previousScrollY;

    document.documentElement.classList.toggle(
      'is-scrolling-down',
      isScrollingDown,
    );
    document.documentElement.classList.toggle(
      'is-scrolling-up',
      !isScrollingDown,
    );
    this.previousScrollY = scrollY <= 0 ? 0 : scrollY;
  }

  setFooter() {
    this.dom.main.style.marginBottom = `${this.dom.footer.offsetHeight}px`;
  }

  setWithExpiry(key, value, ttl) {
    const now = new Date();
    const item = {
      value,
      expiry: now.getTime() + ttl,
    };
    localStorage.setItem(key, JSON.stringify(item));
  }

  getWithExpiry(key) {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) {
      return null;
    }

    const item = JSON.parse(itemStr);
    const now = new Date();

    if (now.getTime() > item.expiry) {
      localStorage.removeItem(key);
      return null;
    }

    return item.value;
  }
}

const site = new Site();
site.init();
