export default class Vote {
  constructor(el) {
    this.dom = {
      el,
      btnsList: el.querySelectorAll('.vote__item'),
      metaTitle: document.head.querySelector('[property="og:title"]'),
    };

    this.settings = {
      canVote: false,
      parent: undefined,
      slug: undefined,
      type: 'feedback',
      storage: {
        prefix: 'smn',
        key: '',
        value: null,
        delay: 86400000, // 24h
      },
      name: this.dom.metaTitle.content,
    };
  }

  // -- Methods
  //--------------------------------------------------------------
  init() {
    this.setVars();
    this.bindEvents();
  }

  setVars() {
    if (this.dom.el.dataset.parent) this.settings.parent = this.dom.el.dataset.parent;
    if (this.dom.el.dataset.slug) this.settings.slug = this.dom.el.dataset.slug;
    if (this.dom.el.dataset.type) this.settings.type = this.dom.el.dataset.type;

    // key
    this.settings.storage.key = this.settings.storage.prefix;
    if (this.settings.parent) this.settings.storage.key += `.${this.settings.parent}`;
    if (this.settings.slug) this.settings.storage.key += `.${this.settings.slug}`;

    // Can vote?
    this.settings.storage.value = this.getExpiry(this.settings.storage.key);
    this.setVotePermission(this.settings.storage.value === null);
  }

  bindEvents() {
    this.dom.btnsList.forEach((btn) => btn.addEventListener('click', () => this.vote(btn)));
  }

  setVotePermission(status = false) {
    this.settings.canVote = status;

    this.dom.btnsList.forEach((btn) => {
      // eslint-disable-next-line no-param-reassign
      btn.disabled = !this.settings.canVote;
      btn.classList.toggle('is-disabled', !this.settings.canVote);
    });

    if (!this.settings.canVote) {
      this.dom.btnsList.forEach((btn) => {
        const text = btn.querySelector('.vote__desc').innerText.replace('\n', ' ').toLowerCase();
        if (text.includes(this.settings.storage.value)) {
          btn.classList.add('is-voted');
        }
      });
    }
  }

  vote(btn) {
    if (this.settings.canVote) {
      const text = btn.querySelector('.vote__desc').innerText.replace('\n', ' ').toLowerCase();
      this.setExpiry(this.settings.storage.key, text, this.settings.storage.delay);

      // eslint-disable-next-line no-undef
      gtag('event', this.settings.type, {
        event_category: text,
        event_label: this.settings.name,
      });

      this.setVotePermission(false);
    }
  }

  setExpiry(key, value, ttl = this.settings.storage.delay) {
    const now = new Date();
    const item = {
      value,
      expiry: now.getTime() + ttl,
    };
    localStorage.setItem(key, JSON.stringify(item));
  }

  getExpiry(key) {
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
