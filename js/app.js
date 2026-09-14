(function () {
  'use strict';

  var LANGS = { ru: RU, en: EN };
  var LANG_KEY = 'sh-lang';

  var RU_ZONES = /^(Europe\/(Moscow|Kaliningrad|Samara|Volgograd|Astrakhan|Saratov|Ulyanovsk|Kirov|Minsk)|Asia\/(Yekaterinburg|Omsk|Novosibirsk|Barnaul|Tomsk|Novokuznetsk|Krasnoyarsk|Irkutsk|Chita|Yakutsk|Khandyga|Vladivostok|Ust-Nera|Magadan|Sakhalin|Srednekolymsk|Kamchatka|Anadyr|Almaty|Aqtobe|Aqtau|Atyrau|Oral|Qostanay|Qyzylorda|Bishkek))$/;

  function guessLang() {
    var list = navigator.languages || [navigator.language || ''];

    for (var i = 0; i < list.length; i++) {
      var code = String(list[i]).toLowerCase();
      if (code.indexOf('ru') === 0) return 'ru';
      if (code.indexOf('en') === 0) return 'en';
    }

    var zone = '';
    try { zone = Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch (e) {}
    return RU_ZONES.test(zone) ? 'ru' : 'en';
  }

  var lang = (function () {
    var saved = null;
    try { saved = localStorage.getItem(LANG_KEY); } catch (e) { saved = null; }
    return LANGS[saved] ? saved : guessLang();
  })();

  function fallback(base, over) {
    if (over === undefined) return base;
    if (base === null || typeof base !== 'object' || Array.isArray(base)) return over;

    var out = {};
    Object.keys(base).forEach(function (k) { out[k] = fallback(base[k], over[k]); });
    Object.keys(over).forEach(function (k) { if (!(k in out)) out[k] = over[k]; });
    return out;
  }

  var TEXT = lang === 'ru' ? RU : fallback(RU, EN);

  function join(list, texts) {
    return list.map(function (item) {
      var out = {}, t = (texts || {})[item.id] || {};
      Object.keys(item).forEach(function (k) { out[k] = item[k]; });
      Object.keys(t).forEach(function (k) { out[k] = t[k]; });
      return out;
    });
  }

  var PERSON = {
    name: TEXT.person.name,
    role: TEXT.person.role,
    photo: ASSETS.photo,
    contacts: SCHEMA.contacts.map(function (c) {
      return {
        icon: c.icon, href: c.href, action: c.action, copy: c.copy,
        label: TEXT.contacts[c.id]
      };
    })
  };

  var NAV = SCHEMA.nav.map(function (n) {
    var other = (lang === 'ru' ? EN : RU).nav || {};
    return {
      id: n.id, ready: n.ready,
      label: TEXT.nav[n.id],
      alt: other[n.id] || ''
    };
  });

  var ABOUT = { stats: join(SCHEMA.stats, TEXT.about.stats) };

  var STACK = {
    common: TEXT.stack.common,
    items: join(SCHEMA.stack.items, TEXT.stack.items)
  };

  var ECOSYSTEM = {
    stack: SCHEMA.projects.stack,
    common: TEXT.projects.common,
    items: join(SCHEMA.projects.items, TEXT.projects.items),
    edges: SCHEMA.projects.edges
  };

  var CAREER = {
    title: TEXT.career.title,
    lede: TEXT.career.lede,
    traits: TEXT.career.traits,
    common: TEXT.career.common,
    items: join(SCHEMA.career.items, TEXT.career.items)
  };

  var $  = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  var el = function (tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text != null) node.textContent = text;
    return node;
  };

  var svg = function (name) { return document.createElementNS('http://www.w3.org/2000/svg', name); };

  function renderSprite() {
    var box = svg('svg');
    box.setAttribute('class', 'sprite');
    box.setAttribute('aria-hidden', 'true');
    box.setAttribute('focusable', 'false');

    box.innerHTML = Object.keys(ICONS).map(function (name) {
      var it = ICONS[name];
      if (typeof it === 'string') it = { body: it };

      return '<symbol id="i-' + name + '" viewBox="' + (it.view || '0 0 24 24') + '"' +
             (it.fill ? ' fill="currentColor" stroke="none"' : '') + '>' +
             it.body +
             '</symbol>';
    }).join('');

    document.body.insertBefore(box, document.body.firstChild);
  }

  var icon = function (id) {
    var node = svg('svg');
    node.setAttribute('class', 'icon');
    node.setAttribute('aria-hidden', 'true');
    node.setAttribute('focusable', 'false');
    var use = svg('use');
    use.setAttribute('href', '#i-' + id);
    node.appendChild(use);
    return node;
  };

  var plate = function (base, id, fallback) {
    var badge = el('span', base);
    var logo = ASSETS.icons[id];

    if (logo) {
      var img = el('img');
      img.src = logo;
      img.alt = '';
      badge.classList.add(base + '--logo');
      badge.appendChild(img);
    } else {
      badge.appendChild(icon(fallback));
    }
    return badge;
  };

  var mount = function (name) { return $('[data-render="' + name + '"]'); };

  var setText = function (name, text) {
    $$('[data-bind="' + name + '"]').forEach(function (n) { n.textContent = text; });
  };

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function disclosure(cls, bodyId) {
    var root = el('div', cls);

    var head = el('button', cls + '__toggle');
    head.type = 'button';
    head.setAttribute('aria-expanded', 'false');
    head.setAttribute('aria-controls', bodyId);

    var body = el('div', cls + '__body');
    body.id = bodyId;
    var inner = el('div', cls + '__inner');
    body.appendChild(inner);

    head.addEventListener('click', function () {
      var open = root.classList.toggle('is-open');
      head.setAttribute('aria-expanded', String(open));
    });

    root.appendChild(head);
    root.appendChild(body);
    return { root: root, head: head, body: inner };
  }

  function headline(cls, title) {
    var top = el('div', cls + '__top');
    top.appendChild(el('span', cls + '__title', title));
    var sign = el('span', cls + '__sign');
    sign.setAttribute('aria-hidden', 'true');
    top.appendChild(sign);
    return top;
  }

  var tabs = {};
  var ready = NAV.filter(function (n) { return n.ready; });

  function renderNav() {
    var box = mount('nav');

    NAV.forEach(function (item) {
      var li = el('li');
      li.setAttribute('role', 'presentation');

      var btn = el('button', 'navlink');
      btn.appendChild(el('span', 'navlink__text', item.label));

      [item.label, item.alt].forEach(function (word, i) {
        if (!word || (i && word === item.label)) return;
        var ghost = el('span', 'navlink__ghost', word);
        ghost.setAttribute('aria-hidden', 'true');
        btn.appendChild(ghost);
      });

      btn.type = 'button';
      btn.id = 'tab-' + item.id;
      btn.dataset.tab = item.id;
      btn.setAttribute('role', 'tab');

      if (!item.ready) {
        btn.classList.add('navlink--soon');
        btn.disabled = true;
        btn.setAttribute('aria-disabled', 'true');
      } else {
        btn.setAttribute('aria-controls', 'panel-' + item.id);
        btn.setAttribute('aria-selected', 'false');
        btn.tabIndex = -1;
        btn.addEventListener('click', function () { go(item.id); });
        tabs[item.id] = btn;
      }

      li.appendChild(btn);
      box.appendChild(li);
    });

    box.addEventListener('keydown', onTabKey);
  }

  function onTabKey(e) {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    var ids = ready.map(function (n) { return n.id; });
    var i = ids.indexOf(current);
    if (i === -1) return;
    e.preventDefault();
    var next = ids[(i + (e.key === 'ArrowRight' ? 1 : ids.length - 1)) % ids.length];
    go(next);
    tabs[next].focus();
  }

  var current = null;

  function show(id) {
    NAV.forEach(function (item) {
      var on = item.id === id;
      var panel = $('[data-panel="' + item.id + '"]');
      if (panel) panel.hidden = !on;

      var btn = tabs[item.id];
      if (!btn) return;
      btn.setAttribute('aria-selected', String(on));
      btn.classList.toggle('is-current', on);
      btn.tabIndex = on ? 0 : -1;
    });

    boards.forEach(function (b) { b.reset(false); });

    current = id;
    window.scrollTo(0, 0);
  }

  function go(id) {
    if (id === current) return;
    location.hash = '#' + id;
  }

  function fromHash() {
    var id = location.hash.replace(/^#/, '');
    var ok = ready.some(function (n) { return n.id === id; });
    return ok ? id : ready[0].id;
  }

  function initTabs() {
    renderNav();
    show(fromHash());
    window.addEventListener('hashchange', function () { show(fromHash()); });
  }

  function renderLang() {
    var btn = $('#lang');
    var other = lang === 'ru' ? EN : RU;
    setText('lang', other.lang.label);
    btn.setAttribute('aria-label', TEXT.ui.switchLang);

    btn.addEventListener('click', function () {
      try { localStorage.setItem(LANG_KEY, lang === 'ru' ? 'en' : 'ru'); } catch (e) {}
      location.reload();
    });
  }

  function renderHead() {
    document.documentElement.lang = TEXT.lang.code;
    document.title = TEXT.meta.title;

    var desc = $('meta[name="description"]');
    if (desc) desc.setAttribute('content', TEXT.meta.description);

    var link = $('link[rel="icon"]');
    if (link && ASSETS.favicon) link.setAttribute('href', ASSETS.favicon);

    var nav = $('.navbar');
    if (nav) nav.setAttribute('aria-label', TEXT.ui.sections);
  }

  function renderIntro() {
    setText('name', PERSON.name);
    setText('role', PERSON.role);
  }

  function initials(name) {
    return name.split(/\s+/).slice(0, 2).map(function (w) {
      return w.charAt(0).toUpperCase();
    }).join('');
  }

  function renderPhoto() {
    var box = mount('photo');

    if (!PERSON.photo) {
      box.classList.add('photo--empty');
      box.appendChild(el('span', 'photo__initials', initials(PERSON.name)));
      return;
    }

    var img = el('img', 'photo__img');
    img.src = PERSON.photo;
    img.alt = PERSON.name;
    img.loading = 'eager';
    img.decoding = 'async';
    box.appendChild(img);
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }

    return new Promise(function (ok, fail) {
      var area = el('textarea');
      area.value = text;
      area.setAttribute('readonly', '');
      area.style.cssText = 'position:fixed;top:-100vh;left:0;opacity:0';
      document.body.appendChild(area);
      area.select();
      area.setSelectionRange(0, text.length);

      var done = false;
      try { done = document.execCommand('copy'); } catch (e) { done = false; }
      document.body.removeChild(area);

      done ? ok() : fail();
    });
  }

  var toastBox = null;
  var toastTimer = null;

  function toast(title, body, ok) {
    if (!toastBox) {
      toastBox = el('div', 'toast');
      toastBox.setAttribute('role', 'status');
      toastBox.setAttribute('aria-live', 'polite');
      document.body.appendChild(toastBox);
    }

    toastBox.textContent = '';
    if (ok) toastBox.appendChild(icon('check'));

    var text = el('span', 'toast__text');
    text.appendChild(el('span', 'toast__title', title));
    if (body) text.appendChild(el('span', 'toast__body', body));
    toastBox.appendChild(text);

    toastBox.classList.remove('is-on');
    void toastBox.offsetWidth;
    toastBox.classList.add('is-on');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastBox.classList.remove('is-on'); }, 2600);
  }

  function renderContacts() {
    var box = mount('contacts');

    PERSON.contacts.forEach(function (c) {
      var li = el('li');

      var link = c.href && !c.action;
      var node = link ? el('a', 'contact') : el('button', 'contact');

      if (link) {
        node.href = c.href;
        if (c.href.indexOf('http') === 0) { node.target = '_blank'; node.rel = 'noopener'; }
      } else {
        node.type = 'button';
      }

      if (c.action === 'print') {
        node.addEventListener('click', function () { window.print(); });
      }

      if (c.action === 'copy') {
        node.setAttribute('aria-label', TEXT.ui.copyMail);
        node.addEventListener('click', function () {
          copyText(c.copy).then(
            function () { toast(TEXT.ui.copied, c.copy, true); },
            function () { toast(TEXT.ui.copyFail, c.copy, false); }
          );
        });
      } else {
        node.setAttribute('aria-label', c.label);
      }

      node.appendChild(icon(c.icon));
      node.appendChild(el('span', 'contact__label', c.label));

      li.appendChild(node);
      box.appendChild(li);
    });
  }

  function countUp(node, target, suffix) {
    var duration = 900;
    var start = null;

    var step = function (now) {
      if (start === null) start = now;
      var t = Math.min((now - start) / duration, 1);
      var eased = 1 - Math.pow(1 - t, 3);
      node.textContent = Math.round(target * eased) + suffix;
      if (t < 1) requestAnimationFrame(step);
    };

    node.textContent = '0' + suffix;
    requestAnimationFrame(step);
  }

  function renderStats() {
    var box = mount('stats');

    ABOUT.stats.forEach(function (s) {
      var suffix = s.suffix || '';
      var li = el('li', 'stat');

      var value = el('span', 'stat__value', s.value + suffix);
      value.dataset.value = s.value;
      value.dataset.suffix = suffix;

      li.appendChild(value);
      li.appendChild(el('span', 'stat__label', s.label));
      if (s.note) li.appendChild(el('span', 'stat__note', s.note));
      box.appendChild(li);
    });

    if (reducedMotion || !('IntersectionObserver' in window)) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        io.unobserve(entry.target);
        countUp(entry.target, Number(entry.target.dataset.value), entry.target.dataset.suffix);
      });
    }, { threshold: 0.6 });

    $$('.stat__value', box).forEach(function (n) { io.observe(n); });
  }

  function renderCommon() {
    var box = mount('common');
    var data = STACK.common;

    var d = disclosure('common', 'common-body');
    d.head.appendChild(headline('common', data.title));
    d.head.appendChild(el('p', 'common__lede', data.lede));

    var ul = el('ul', 'common__list');
    data.items.forEach(function (t) { ul.appendChild(el('li', null, t)); });
    d.body.appendChild(ul);

    box.appendChild(d.root);
  }

  function list(items) {
    var ul = el('ul', 'card__list');
    items.forEach(function (t) { ul.appendChild(el('li', null, t)); });
    return ul;
  }

  function buildDetails(v) {
    var frag = document.createDocumentFragment();

    if (v.meta) frag.appendChild(el('p', 'card__meta', v.meta));

    if (v.links) {
      var links = el('div', 'card__links');
      v.links.forEach(function (l) {
        var a = el('a', 'card__link', l.name);
        a.href = l.href;
        a.target = '_blank';
        a.rel = 'noopener';
        links.appendChild(a);
      });
      frag.appendChild(links);
    }

    if (v.summary) frag.appendChild(el('p', 'card__summary', v.summary));

    if (v.groups) {
      v.groups.forEach(function (g) {
        frag.appendChild(el('h4', 'card__group', g.title));
        frag.appendChild(list(g.items));
      });
    } else if (v.details) {
      frag.appendChild(list(v.details));
    }

    if (v.note) frag.appendChild(el('p', 'card__note', v.note));

    if (v.stack) {
      var stack = el('div', 'card__stack');
      v.stack.forEach(function (t) { stack.appendChild(el('span', 'tag', t)); });
      frag.appendChild(stack);
    }

    return frag;
  }

  var narrow = window.matchMedia('(max-width: 1000px)');
  var boards = [];

  function board(cfg) {
    var sheetId = cfg.name + '-sheet';
    var titleId = cfg.name + '-sheet-title';
    var grow = cfg.dock === 'grow';
    var overlay = grow || cfg.dock === 'overlay';

    var s = {
      root: null, layout: null, title: null,
      body: null, close: null, scrim: null,
      open: null
    };

    var targets = [];

    function buildSheet() {
      var root = el('aside', 'sheet'
        + (grow ? ' sheet--grow' : overlay ? ' sheet--overlay' : ''));
      root.id = sheetId;
      root.setAttribute('aria-labelledby', titleId);

      var sticky = el('div', 'sheet__sticky');
      var inner = el('div', 'sheet__inner');

      var head = el('div', 'sheet__head');
      var title = el('h3', 'sheet__title');
      title.id = titleId;
      head.appendChild(title);

      var close = el('button', 'sheet__close');
      close.type = 'button';
      close.setAttribute('aria-label', TEXT.ui.close);
      close.addEventListener('click', function () { reset(true); });
      head.appendChild(close);

      inner.appendChild(head);

      var body = el('div', 'sheet__body');
      inner.appendChild(body);

      sticky.appendChild(inner);
      root.appendChild(sticky);

      var scrim = el('div', 'scrim');
      scrim.addEventListener('click', function () { reset(true); });

      s.root = root;
      s.title = title;
      s.body = body;
      s.close = close;
      s.scrim = scrim;
    }

    function hidden() {
      return overlay ? !s.open : (narrow.matches && !s.open);
    }
    function syncInert() { s.root.inert = hidden(); }

    function locks() { return !!s.open && narrow.matches; }

    function viewOf(item) { return cfg.view ? cfg.view(item) : item; }

    function fill(v) {
      var was = anchor();
      s.open = v.id || null;

      // a panel that lives over the page is never read holding the fallback —
      // it only ever shows a picked entry. Repainting it on the way out swaps
      // the text under the closing fade, which reads as a blink, so leave the
      // last entry in place and let it fade out as itself.
      if (s.open || !overlay) {
        s.title.textContent = '';
        if (cfg.badge && v.id) s.title.appendChild(cfg.badge(v));
        else if (v.icon) s.title.appendChild(icon(v.icon));
        s.title.appendChild(document.createTextNode(v.title));

        s.body.textContent = '';
        s.body.appendChild(buildDetails(v));
      }

      s.close.hidden = !overlay && !s.open;

      s.layout.classList.toggle('is-open', !!s.open);
      document.body.classList.toggle('is-locked', locks());
      syncInert();
      mark();

      if (grow) {
        if (s.open) place(true);
        else if (was) collapse(was);
      }
    }

    function anchor() {
      return s.open && targets.filter(function (n) {
        return n.dataset.id === s.open;
      })[0];
    }

    function place(fresh) {
      var node = anchor();
      if (!node) return;

      var box = s.root.style;

      if (narrow.matches) {
        box.left = box.top = box.width = box.clipPath = '';
        s.root.classList.remove('sheet--up');
        return;
      }

      var rem = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
      var gap = rem;
      var r = node.getBoundingClientRect();

      var w = Math.max(Math.min(24 * rem, window.innerWidth - gap - r.left), r.width);
      box.left = Math.min(r.left, window.innerWidth - gap - w) + 'px';
      box.width = w + 'px';

      // downwards by default; upwards when the panel would run past the fold
      // and there is more room over the node than under it, so the node's own
      // row ends up along the bottom of the panel
      // the panel is pinned to the viewport, so it never lengthens the page:
      // no tab is meant to scroll. It opens upwards when it would miss the
      // fold below and fits whole in the room above, measured to the navbar.
      var h = s.root.offsetHeight;
      var under = window.innerHeight - r.top - gap;
      var over = r.bottom - 5.6 * rem;
      var up = h > under && over >= h;

      s.root.classList.toggle('sheet--up', up);
      box.top = (up ? r.bottom - h : r.top) + 'px';

      if (fresh) reveal(r, up);
    }

    // closing runs the opening in reverse: the panel shrinks back into the card
    // it grew out of, ending exactly on the node it is hiding, so there is
    // nothing left to blink when it goes
    function collapse(node) {
      if (narrow.matches) { s.root.style.clipPath = ''; return; }

      var r = node.getBoundingClientRect();
      var box = s.root.getBoundingClientRect();
      var side = Math.max(0, box.width - r.width);
      var rest = Math.max(0, box.height - r.height);

      s.root.style.clipPath = s.root.classList.contains('sheet--up')
        ? 'inset(' + rest + 'px ' + side + 'px 0px 0px round var(--radius))'
        : 'inset(0px ' + side + 'px ' + rest + 'px 0px round var(--radius))';
    }

    function reveal(r, up) {
      var side = Math.max(0, s.root.offsetWidth - r.width);
      var rest = Math.max(0, s.root.offsetHeight - r.height);

      s.root.style.transition = 'none';
      s.root.style.clipPath = up
        ? 'inset(' + rest + 'px ' + side + 'px 0px 0px round var(--radius))'
        : 'inset(0px ' + side + 'px ' + rest + 'px 0px round var(--radius))';
      void s.root.offsetWidth;
      s.root.style.transition = '';
      s.root.style.clipPath = 'inset(0px 0px 0px 0px round var(--radius))';
    }

    function mark() {
      targets.forEach(function (n) {
        var on = !!s.open && n.dataset.id === s.open;
        n.classList.toggle('is-current', on);
        n.setAttribute('aria-pressed', String(on));
      });
    }

    function open(item) {
      var was = s.open;
      fill(viewOf(item));

      if (!was && (overlay || narrow.matches)) s.close.focus();
    }

    function reset(focusBack) {
      var node = s.open && targets.filter(function (n) {
        return n.dataset.id === s.open;
      })[0];

      fill(cfg.fallback);
      if (focusBack && node) node.focus();
    }

    function hook(node, item) {
      node.dataset.id = item.id;
      if (node.tagName === 'BUTTON') node.type = 'button';
      node.setAttribute('aria-pressed', 'false');
      node.setAttribute('aria-controls', sheetId);
      node.addEventListener('click', function () {
        if (s.open === item.id) reset(false);
        else open(item);
      });
      targets.push(node);
      return node;
    }

    function buildPrint() {
      var box = el('div', 'printout');
      cfg.items.forEach(function (item) {
        var v = viewOf(item);
        var block = el('section', 'printout__item');
        block.appendChild(el('h3', 'printout__title', v.title));
        block.appendChild(buildDetails(v));
        box.appendChild(block);
      });
      return box;
    }

    function render() {
      cfg.surface(mount(cfg.name), hook);

      s.layout = mount(cfg.name + '-layout');
      buildSheet();
      s.layout.appendChild(s.root);
      s.layout.appendChild(s.scrim);
      s.layout.appendChild(buildPrint());

      fill(cfg.fallback);

      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && s.open) reset(true);
      });

      var onBreak = function () {
        document.body.classList.toggle('is-locked', locks());
        syncInert();
        if (grow) place(false);
      };
      if (grow) window.addEventListener('resize', function () { place(false); });
      if (narrow.addEventListener) narrow.addEventListener('change', onBreak);
      else narrow.addListener(onBreak);
    }

    var api = { render: render, reset: reset };
    boards.push(api);
    return api;
  }

  var stackBoard = board({
    name: 'stack',
    dock: 'column',
    items: STACK.items,
    fallback: {
      title: STACK.common.title,
      summary: STACK.common.lede,
      details: STACK.common.items
    },
    surface: function (box, hook) {
      STACK.items.forEach(function (p) {
        var card = el('button', 'card');

        card.appendChild(plate('card__icon', p.id, p.icon));

        card.appendChild(el('span', 'card__title', p.title));
        box.appendChild(hook(card, p));
      });
    }
  });

  function wiring(map, nodes, edges) {
    var layer = svg('svg');
    layer.setAttribute('class', 'wires');
    layer.setAttribute('aria-hidden', 'true');
    layer.setAttribute('preserveAspectRatio', 'none');

    var defs = svg('defs');
    ['wire-tip', 'wire-tip-live'].forEach(function (id) {
      var marker = svg('marker');
      marker.setAttribute('id', id);
      marker.setAttribute('viewBox', '0 0 8 8');
      marker.setAttribute('refX', '7.5');
      marker.setAttribute('refY', '4');
      marker.setAttribute('markerWidth', '7');
      marker.setAttribute('markerHeight', '7');
      marker.setAttribute('markerUnits', 'userSpaceOnUse');
      marker.setAttribute('orient', 'auto-start-reverse');

      var head = svg('path');
      head.setAttribute('class', 'tip' + (id === 'wire-tip-live' ? ' tip--live' : ''));
      head.setAttribute('d', 'M0 0 L8 4 L0 8 Z');
      marker.appendChild(head);

      defs.appendChild(marker);
    });
    layer.appendChild(defs);

    var lines = svg('g');
    layer.appendChild(lines);
    map.insertBefore(layer, map.firstChild);

    function rect(node, base) {
      var r = node.getBoundingClientRect();
      return {
        l: r.left - base.left, t: r.top - base.top,
        r: r.right - base.left, b: r.bottom - base.top,
        cx: r.left - base.left + r.width / 2,
        cy: r.top - base.top + r.height / 2
      };
    }

    function route(a, z, ay, zy) {
      var w = 2;

      if (z.l - a.r > 8) {
        var x1 = a.r + w, x2 = z.l - w, dx = Math.max(20, (x2 - x1) * 0.55);
        return 'M' + x1 + ' ' + ay +
               ' C' + (x1 + dx) + ' ' + ay + ',' + (x2 - dx) + ' ' + zy +
               ',' + x2 + ' ' + zy;
      }

      var y1 = a.b + w, y2 = z.t - w, dy = Math.max(18, (y2 - y1) * 0.5);
      return 'M' + a.cx + ' ' + y1 +
             ' C' + a.cx + ' ' + (y1 + dy) + ',' + z.cx + ' ' + (y2 - dy) +
             ',' + z.cx + ' ' + y2;
    }

    function fan(r, count, i) {
      if (count < 2) return r.cy;
      var band = Math.min((r.b - r.t) * 0.7, (count - 1) * 11);
      return r.cy - band / 2 + band * i / (count - 1);
    }

    function has(list, id) {
      return !!list && list.split(',').indexOf(id) !== -1;
    }

    function lit() {
      var current = map.querySelector('.node.is-current');
      var id = current ? current.dataset.id : null;

      $$('.wire', lines).forEach(function (p) {
        var on = !!id && (has(p.dataset.from, id) || has(p.dataset.to, id));
        p.classList.toggle('is-live', on);
        p.setAttribute('marker-end', 'url(#' + (on ? 'wire-tip-live' : 'wire-tip') + ')');
        if (p.dataset.both) {
          p.setAttribute('marker-start', 'url(#' + (on ? 'wire-tip-live' : 'wire-tip') + ')');
        }
      });
      map.classList.toggle('is-picked', !!id);
    }

    function draw() {
      var base = map.getBoundingClientRect();
      if (!base.width || !base.height) return;

      layer.setAttribute('viewBox', '0 0 ' + base.width + ' ' + base.height);
      layer.setAttribute('width', base.width);
      layer.setAttribute('height', base.height);
      lines.textContent = '';

      var box = {};
      Object.keys(nodes).forEach(function (id) { box[id] = rect(nodes[id], base); });

      var links = edges.filter(function (e) { return box[e[0]] && box[e[1]]; })
        .map(function (e) {
          return { from: e[0], to: e[1], both: e[2] === 'both' };
        });

      var out = {}, into = {};
      links.forEach(function (e) {
        (out[e.from] || (out[e.from] = [])).push(e);
        (into[e.to] || (into[e.to] = [])).push(e);
      });

      var order = function (group, key, by) {
        Object.keys(group).forEach(function (id) {
          var list = group[id].slice().sort(function (p, q) {
            return box[by(p)].cy - box[by(q)].cy;
          });
          list.forEach(function (e, i) { e[key] = i; e[key + 'n'] = list.length; });
        });
      };
      order(out,  'oi', function (e) { return e.to; });
      order(into, 'ii', function (e) { return e.from; });

      links.forEach(function (e) {
        var a = box[e.from], z = box[e.to];

        var p = svg('path');
        p.setAttribute('class', 'wire');
        p.setAttribute('d', route(a, z, fan(a, e.oin, e.oi), fan(z, e.iin, e.ii)));
        p.dataset.from = e.from;
        p.dataset.to = e.to;
        if (e.both) p.dataset.both = '1';
        lines.appendChild(p);
      });

      lit();
    }

    if (window.ResizeObserver) new ResizeObserver(draw).observe(map);
    window.addEventListener('resize', draw);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(draw);

    if (window.MutationObserver) {
      var watch = new MutationObserver(lit);
      Object.keys(nodes).forEach(function (id) {
        watch.observe(nodes[id], { attributes: true, attributeFilter: ['class'] });
      });
    }

    draw();
  }

  var worksBoard = board({
    name: 'projects',
    dock: 'grow',
    badge: function (v) { return plate('node__icon', v.id, v.icon); },
    items: ECOSYSTEM.items,
    fallback: {
      title: ECOSYSTEM.common.title,
      summary: ECOSYSTEM.common.lede,
      details: ECOSYSTEM.common.items,
      stack: ECOSYSTEM.stack
    },
    surface: function (box, hook) {
      var map = el('div', 'map');
      var nodes = {};

      var column = function (kind, label) {
        var col = el('div', 'map__col map__col--' + kind);
        col.dataset.label = label;

        ECOSYSTEM.items.filter(function (w) { return w.tier === kind; })
          .forEach(function (w) {
            var node = el('button', 'node');

            node.appendChild(plate('node__icon', w.id, w.icon));
            node.appendChild(el('span', 'node__name', w.title));

            nodes[w.id] = hook(node, w);
            col.appendChild(node);
          });

        return col;
      };

      map.appendChild(column('platform', 'Площадка'));
      map.appendChild(column('app', 'Сервисы'));
      map.appendChild(column('auth', 'Единый вход'));
      box.appendChild(map);

      wiring(map, nodes, ECOSYSTEM.edges);
    }
  });

  var careerBoard = board({
    name: 'career',
    dock: 'column',
    items: CAREER.items,
    fallback: {
      title: CAREER.common.title,
      summary: CAREER.common.lede,
      details: CAREER.common.items
    },
    view: function (r) {
      return {
        id: r.id, title: r.role, meta: r.period, links: r.links,
        summary: r.summary, groups: r.groups, note: r.note, stack: r.stack
      };
    },
    surface: function (box, hook) {
      box.appendChild(el('h2', 'lead__title', CAREER.title));
      box.appendChild(el('p', 'lead__text', CAREER.lede));

      var track = el('ol', 'track');
      var list = el('ul', 'roster__list');

      CAREER.items.slice().reverse().forEach(function (r) {
        var pin = el('button', 'pin');
        pin.appendChild(el('span', 'pin__role', r.stage));
        pin.appendChild(el('span', 'pin__mark', r.mark));

        var dot = el('span', 'pin__dot');
        dot.setAttribute('aria-hidden', 'true');
        pin.appendChild(dot);

        var step = el('li', 'track__item');
        step.appendChild(hook(pin, r));
        track.appendChild(step);

        var slot = el('button', 'slot');
        slot.appendChild(el('span', 'slot__span', r.span));
        slot.appendChild(el('span', 'slot__role', r.role));

        var row = el('li', 'roster__item');
        row.appendChild(hook(slot, r));
        list.appendChild(row);
      });

      box.appendChild(track);
      mount('career-roster').appendChild(list);

      var traits = el('ul', 'traits');
      CAREER.traits.forEach(function (t) {
        var li = el('li', 'trait');
        li.appendChild(el('h3', 'trait__title', t.title));
        li.appendChild(el('p', 'trait__text', t.text));
        traits.appendChild(li);
      });
      mount('career-traits').appendChild(traits);
    }
  });

  function init() {
    renderHead();
    renderSprite();

    renderIntro();
    renderPhoto();
    renderContacts();
    renderStats();

    renderCommon();
    stackBoard.render();
    worksBoard.render();
    careerBoard.render();

    initTabs();
    renderLang();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
