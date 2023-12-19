import { reactive } from 'vue';
import { lockScroll, unlockScroll } from '../../../utils/scroll-lock';

const current = reactive({
  name: '',
  options: {},
});

const api = {
  active() {
    return current.name;
  },

  options() {
    return current.options;
  },

  show(name, options) {
    current.name = name;

    current.options = options || {};

    if (!current.options.unlockScroll) {
      lockScroll();
    }
  },

  close() {
    current.name = '';
    unlockScroll();
  },
};

const plugin = {
  install: (App) => {
    App.provide('$modals', api);
  },
};

export default plugin;
