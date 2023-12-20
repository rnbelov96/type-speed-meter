import axios from 'axios';
import getRandomNumberBetweenRange from '../utils/get-random-number-between-range';

const quoteList = [
  'Когда накормишь убогого, считай, что себя накормил. Такого свойства это дело: данное нами к нам же вернется.',
  'Есть вершины, взобравшись на которые ты больше не спускаешься вниз, а, расправив крылья, летишь ввысь.',
  'Воображение важнее знания.',
  'Люди стремятся исключительно к успеху; если же им выпадает счастье потерпеть неудачу, то только потому, что мудрость и сила Природы превосходит их практический ум. Один только Бог знает, когда и как ошибиться мудро и проиграть с пользой.',
  'Никогда не слушай тех, у кого есть дурная привычка ко всему относиться негативно и пессимистично, потому что они крадут у тебя твои самые прекрасные мечты и надежды, которые ты хранишь в своем сердце.',
  'Поймай и удержи мир глубоко в себе и направь его в клетки своего тела. С миром к тебе вернется здоровье.',
  'Думай, что ты способен на то или иное свершение, или думай, что не способен: так или иначе ты окажешься прав.',
  'Ты говоришь, что вокруг тебя все дурные люди. Если ты так думаешь, то это верный признак того, что ты сам очень плох.',
  'Поймай и удержи мир глубоко в себе и направь его в клетки своего тела. С миром к тебе вернется здоровье.',
];
let currentQuoteIndex = 0;

let controller;

export default {
  async getQuote() {
    const data = {
      method: 'getQuote',
      format: 'json',
    };

    if (controller) {
      controller.abort();
    }
    controller = new AbortController();

    try {
      const result = await axios({
        method: 'post',
        url: 'https://api.forismatic.com/api/1.0/',
        data,
        headers: { 'Content-Type': 'multipart/form-data' },
        signal: controller.signal,
      });

      return {
        status: true,
        data: result.data,
      };
    } catch (error) {
      console.error(error);

      currentQuoteIndex = getRandomNumberBetweenRange(0, quoteList.length - 1, currentQuoteIndex);
      return {
        status: true,
        data: {
          quoteText: quoteList[currentQuoteIndex],
        },
      };
    }
  },
};
