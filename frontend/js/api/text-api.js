import axios from 'axios';

export default {
  async getQuote() {
    const data = {
      method: 'getQuote',
      format: 'json',
    };

    try {
      const result = await axios({
        method: 'post',
        url: 'https://api.forismatic.com/api/1.0/',
        data,
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      return {
        status: true,
        data: result.data,
      };
    } catch (error) {
      return {
        status: true,
        message: error.responce.data.message || error.message,
      };
    }
  },
};
