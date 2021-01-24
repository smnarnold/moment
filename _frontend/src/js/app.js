import { throttle, debounce } from "throttle-debounce";

class Site {
  constructor() {
    this.dom = {
      header: document.querySelector(".site-header"),
      main: document.querySelector("main"),
      footer: document.querySelector(".site-footer"),
      vote: document.querySelector('.js-vote')
    };

    this.previousScrollY = 0;
  }

  /**
   * Methods
   */
  init() {
    this.bindEvents();
    this.setFooter();

    if(this.dom.vote) this.setArticleVote();
  }

  setArticleVote() {
    this.dom.voteBtns = document.querySelectorAll('.vote__item');
    this.canVote = false;
    const parent = this.dom.vote.dataset.parent;
    const slug = this.dom.vote.dataset.slug;
    let key = 'smn';
    if (parent) key += `.${parent}`;
    if (slug) key += `.${slug}`;

    const status = this.getWithExpiry(key);

    if (status === null) this.canVote = true;

    this.dom.voteBtns.forEach(btn => {
      if (this.canVote) {
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

    gtag('event', 'feedback', {
      'event_category': key,
      'event_label': text,
    });

    this.dom.voteBtns.forEach(btn => {
      btn.disabled = true;
      btn.classList.add('is-disabled');
    });
  }

  bindEvents() {
    window.addEventListener(
      "scroll",
      throttle(300, () => this.setScrollDirection())
    );
    window.addEventListener("resize", debounce(300, () => this.setFooter()));
  }

  setScrollDirection() {
    let scrollY = window.pageYOffset || document.documentElement.scrollTop;
    let isScrollingDown = scrollY > this.previousScrollY ? true : false;

    document.documentElement.classList.toggle(
      "is-scrolling-down",
      isScrollingDown
    );
    document.documentElement.classList.toggle(
      "is-scrolling-up",
      !isScrollingDown
    );
    this.previousScrollY = scrollY <= 0 ? 0 : scrollY;
  }

  setFooter() {
    this.dom.main.style.marginBottom = `${this.dom.footer.offsetHeight}px`;
  }

  setWithExpiry(key, value, ttl) {
    const now = new Date()
    const item = {
      value: value,
      expiry: now.getTime() + ttl,
    };
    localStorage.setItem(key, JSON.stringify(item))
  }
  
  getWithExpiry(key) {
    const itemStr = localStorage.getItem(key)
    if (!itemStr) {
      return null
    }

    const item = JSON.parse(itemStr)
    const now = new Date()

    if (now.getTime() > item.expiry) {
      localStorage.removeItem(key)
      return null
    }

    return item.value
  }
}

var site = new Site();
site.init();
