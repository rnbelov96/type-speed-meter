import axios from 'axios';

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
      return {
        status: false,
        message: error.responce.data.message || error.message,
      };
    }
  },
};
