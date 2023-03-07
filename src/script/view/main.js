import DataSource from "../data/data-source.js";
import '../component/search-bar.js';
import '../component/quote-list.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const quoteListElement = document.querySelector('quote-List');

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.generateQuote(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = results => {
    quoteListElement.quotes = results;
  };
  
  const fallbackResult = message => {
    quoteListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;