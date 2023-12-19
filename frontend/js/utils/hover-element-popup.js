function getElementSelector(element) {
  let selector = element.tagName.toLowerCase();
  const classes = element.classList.toString();
  const id = element.getAttribute('id');

  if (classes !== '') {
    selector += `.${classes.replace(/\s+/g, '.')}`;
  }

  if (id) {
    selector += `#${id}`;
  }

  const siblings = element.parentNode.querySelectorAll(selector);
  if (siblings.length > 1) {
    selector += `:nth-of-type(${Array.from(siblings).indexOf(element) + 1})`;
  }

  return selector;
}

class HoverElementPopup {
  constructor(options) {
    this._parentEl = typeof options.parentEl === 'string'
      ? document.querySelector(options.parentEl)
      : options.parentEl;

    if (!this._parentEl) {
      return;
    }
    this._triggerElList = options.triggerElList;
    this._popupEl = options.popupEl;
    this._breakpoint = options.breakpoint;
    this._offsetX = options.offsetX;
    this._offsetY = options.offsetY;
    this._beforeOpenCallback = options.beforeOpenCallback;
    this._afterCloseCallback = options.afterCloseCallback;

    this._isTouchDevise = 'ontouchstart' in window;

    if (this._breakpoint) {
      this._isPositioningStop = window.matchMedia(
        `(max-width: ${this._breakpoint}px)`,
      ).matches;
      window.addEventListener('resize', () => {
        this._isPositioningStop = window.matchMedia(
          `(max-width: ${this._breakpoint}px)`,
        ).matches;
      });
    }

    this._setup();
  }

  _calculateCoords = () => {
    const rect = this._currentTriggerEl.getBoundingClientRect();
    const elementWidth = rect.width;
    const elementHeight = rect.height;

    const parentRect = this._parentEl.getBoundingClientRect();
    const parentTop = parentRect.top;

    const popupWidth = this._popupEl.offsetWidth;
    const popupHeight = this._popupEl.offsetHeight;

    const left = Math.max(
      rect.left - parentRect.left + elementWidth / 2 - popupWidth / 2,
      -parentRect.left + (Number(this._offsetX) || 0),
    );
    const topWhenDown = rect.top - parentTop + elementHeight + (Number(this._offsetY) || 0);
    const topWhenUp = rect.top - parentTop - popupHeight - (Number(this._offsetY) || 0);

    if (!this._isPositioningStop) {
      this._popupEl.style.left = `${left}px`;
      this._popupEl.style.top = `${topWhenDown}px`;
      const downOffset = window.innerHeight - this._popupEl.getBoundingClientRect().bottom;
      this._popupEl.style.top = `${topWhenUp}px`;
      const upOffset = this._popupEl.getBoundingClientRect().top;

      const minOffset = Math.max(downOffset, upOffset);

      if (downOffset < 0 && minOffset === upOffset) {
        this._popupEl.style.top = `${topWhenUp}px`;
      } else {
        this._popupEl.style.top = `${topWhenDown}px`;
      }
    } else {
      this._popupEl.style.removeProperty('top');
      this._popupEl.style.removeProperty('left');
    }
  };

  _closePopup = e => {
    if (e.touches) {
      if (
        e.target.closest(getElementSelector(this._popupEl))
        || e.target === this._currentTriggerEl
        || Math.abs(this._startYTouchPostiton - this._endYTouchPostiton) > 30
      ) {
        return;
      }
    }
    if (this._afterCloseCallback) {
      this._afterCloseCallback();
    }
    this._popupEl.classList.remove('-active');
  };

  _openPopup = triggerEl => {
    this._currentTriggerEl = triggerEl;
    window.removeEventListener('scroll', this._calculateCoords);
    window.removeEventListener('resize', this._calculateCoords);

    if (this._beforeOpenCallback) {
      this._beforeOpenCallback();
    }

    this._calculateCoords();

    window.addEventListener('scroll', this._calculateCoords);
    window.addEventListener('resize', this._calculateCoords);

    this._popupEl.classList.add('-active');
  };

  _setStartYTouchPosition = e => {
    this._startYTouchPostiton = e.touches[0].clientY;
  };

  _setEndYTouchPosition = e => {
    this._endYTouchPostiton = e.changedTouches[0].clientY;
  };

  _setup() {
    this._triggerElList.forEach(triggerEl => {
      if (this._isTouchDevise) {
        triggerEl.addEventListener('touchstart', e => {
          e.stopPropagation();
          this._openPopup(triggerEl);
        });
        document.addEventListener('touchstart', this._setStartYTouchPosition);
        document.addEventListener('touchend', this._setEndYTouchPosition);
        document.addEventListener('touchend', this._closePopup);
      } else {
        triggerEl.addEventListener('mouseover', e => {
          e.stopPropagation();
          this._openPopup(triggerEl);
        });
        triggerEl.addEventListener('mouseleave', this._closePopup);
      }
    });
  }
}

new HoverElementPopup({
  parentEl: document.querySelector('.desc__container'),
  triggerElList: document.querySelectorAll('.js-popup-trigger-1'),
  popupEl: document.querySelector('.js-popup-1'),
  offsetY: '10',
  offsetX: 10,
});
