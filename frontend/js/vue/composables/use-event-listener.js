import { onMounted, onUnmounted } from 'vue';

const useEventListener = (target, event, callback) => {
  let el;
  if (typeof target === 'string') {
    el = document.querySelector(target);
  } else {
    el = target;
  }
  onMounted(() => el.addEventListener(event, callback));
  onUnmounted(() => el.removeEventListener(event, callback));
};

export default useEventListener;
