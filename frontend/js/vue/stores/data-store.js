import { defineStore } from 'pinia';
import { ref } from 'vue';
import textApi from '../../api/text-api';
import { LETTER_STATUSES } from '../../utils/constants';

const useDataStore = defineStore('data', () => {
  const currentQuote = ref('');
  const currentStatus = ref(LETTER_STATUSES.OK);
  const currentLetterIndex = ref(0);
  const currentSpeed = ref(0);

  const getQuote = async () => {
    const result = await textApi.getQuote();

    if (result.status) {
      currentQuote.value = result.data.quoteText.replace(/—/g, '-').replace(/ё/g, 'е').trim();

      setTimeout(() => {
        currentSpeed.value = 0;
      }, 300);
      currentLetterIndex.value = 0;
      currentStatus.value = LETTER_STATUSES.OK;
    }
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
    getQuote,
    changeCurrentLetterStatus,
    changeCurrentLetterIndex,
    changeCurrentSpeed,
  };
});

export default useDataStore;
