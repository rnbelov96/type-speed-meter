import { defineStore } from 'pinia';
import { ref } from 'vue';
import { LETTER_STATUSES } from '../../utils/constants';

const useDataStore = defineStore('data', () => {
  const currentQuote = ref('');
  const currentStatus = ref(LETTER_STATUSES.OK);
  const currentLetterIndex = ref(0);
  const currentSpeed = ref(0);
  const isQuoteLoading = ref(false);

  let scriptEl = null;
  let loadResolveCallback = null;

  const loadQuote = () => new Promise(res => {
    loadResolveCallback = res;

    isQuoteLoading.value = true;
    if (scriptEl) {
      scriptEl.remove();
    }
    scriptEl = document.createElement('script');
    scriptEl.src = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=setQuote';
    document.head.appendChild(scriptEl);
  });

  window.setQuote = (result) => {
    currentQuote.value = result.quoteText.replace(/—/g, '-').replace(/ё/g, 'е').trim();

    setTimeout(() => {
      currentSpeed.value = 0;
    }, 300);
    currentLetterIndex.value = 0;
    currentStatus.value = LETTER_STATUSES.OK;

    if (loadResolveCallback) {
      loadResolveCallback(true);
    }

    setTimeout(() => {
      isQuoteLoading.value = false;
    }, 2000);
  };

  const changeCurrentLetterStatus = (newStatus) => {
    currentStatus.value = newStatus;
  };

  const changeCurrentLetterIndex = (newIndex) => {
    currentLetterIndex.value = newIndex;
  };

  const changeCurrentSpeed = (newSpeed) => {
    currentSpeed.value = newSpeed;
  };

  return {
    currentQuote,
    currentStatus,
    currentLetterIndex,
    currentSpeed,
    isQuoteLoading,
    changeCurrentLetterStatus,
    changeCurrentLetterIndex,
    changeCurrentSpeed,
    loadQuote,
  };
});

export default useDataStore;
