class DataSource {
  static generateQuote(keyword) {
    return fetch(`https://animechan.vercel.app/api/quotes/character?name=${keyword}`)
        .then(response => {
          return response.json();
        })
        .then(responseJson => {
          if (responseJson) {
            return Promise.resolve(responseJson);
          } else {
            return Promise.reject(`${keyword} is not found`);
          }
        });
  }
}

export default DataSource;




