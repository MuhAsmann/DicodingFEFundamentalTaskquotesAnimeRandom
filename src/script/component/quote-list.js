import './quote-item.js';
 
class QuoteList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }
 
  set quotes(quotes) {
    this._quotes = quotes;
    this.render();
  }
 
  renderError(message) {
    this.shadowDOM.innerHTML = `
      <style>
        .placeholder {
          font-weight: lighter;
          color: white;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      </style>
    `;
    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
 
  render() {
    this.shadowDOM.innerHTML = '' ;
    this._quotes.forEach(quote => {
      const quoteItemElement = document.createElement('quote-item');
      quoteItemElement.quote = quote;
      this.shadowDOM.appendChild(quoteItemElement);
    });
  }
}
 
customElements.define('quote-list', QuoteList);