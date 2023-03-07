class QuoteItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set quote(quote) {
    this._quote = quote;
    this.render();
  }
 
  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :host {
          display: block;
          margin-bottom: 18px;
          border-radius: 10px;
          overflow: hidden;
        }
        /*.quote-info {
          padding: 24px;
        }*/
        .quote-info > h2 {
          font-weight: lighter;
        }
        
        .quote-info > p {
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 10; /* number of lines to show */
        }
        .quote{
          font-weight:bold;
          tex
        }

                @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;800&display=swap');
        /* demo setup */
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box }
        body { min-height: 100vh; padding: 2rem; background-color: #EBEBEB; font-family: 'Open Sans', sans-serif; }
        body > * + *  { margin-top: 1.5em }
        h3{ text-align: center; font-weight: 800; color: white; text-transform: uppercase }
        blockquote { max-width: 100%; margin-inline: auto }

        /* blockquote card colors */
        blockquote.q-card-color-1{
          --accent-color: rgb(32 32 54);
          --bg-color: rgb(30 145 254);
          --dot-color: rgb(255 255 255 / .35);
          --text-color: rgb(243 243 243);
          --text-color-author: rgb(243 243 243);
        }

        blockquote.q-card-color-2{
          --accent-color: rgb(243 243 243);
          --bg-color: rgb(33 29 30);
          --dot-color: rgb(255 255 255 / .125);
          --text-color: rgb(243 243 243);
          --text-color-author: rgb(33 29 30);
        }

        blockquote.q-card-color-3{
          --accent-color: rgb(30 145 254);
          --bg-color: rgb(32 32 54);
          --dot-color: rgb(255 255 255 / .125);
          --text-color: rgb(243 243 243);
          --text-color-author: rgb(243 243 243);
        }

        /* blockquote card setup*/
        blockquote.q-card{
          --padding: 1rem;
          padding: var(--padding);
          color: var(--text-color, black);
          font-weight: 600;
          background-color: var(--bg-color, white);
          display: grid;
          gap: 1rem;
          background-image: radial-gradient( circle, var(--dot-color, rgb(0 0 0 / .125)) calc(25% - 1px), transparent 25% );
          background-size: 0.5rem 0.5rem;
          border-radius: 0.25rem;
          box-shadow: 0.5rem 0.5rem 2rem rgb(0 0 0 / .5)
          
        }
        blockquote.q-card::before{
          --qHeight: 4rem;
          content: "";
          margin-left: calc(var(--padding) * -1);
          margin-top: calc(var(--padding) * -1);
          height: var(--qHeight);
          width: calc(var(--qHeight) * 1.1);
          background-image:
            radial-gradient(
              circle at bottom right,
              transparent calc(var(--qHeight) / 4 - 1px),
              var(--accent-color, black) calc(var(--qHeight) / 4) calc(var(--qHeight) / 2), 
              transparent calc(var(--qHeight) / 2 + 1px)
            ),
            linear-gradient(var(--accent-color, black), var(--accent-color, black));
          background-size: calc(var(--qHeight) / 2) calc(var(--qHeight) / 2);
          background-position: top left, bottom left;
          background-repeat: space no-repeat
        }

        blockquote.q-card > .author{
          color: var(--text-color-author, white);
          background-color: var(--accent-color, black);
          justify-self: end;
          font-size: 0.75em;  
          padding: 0.5em 1em;
          border-radius: 0.25rem;
        }
        blockquote.q-card > .author::before{
          content: "- "
        }

      </style>
      
      <div class="quote-info">
        <blockquote class="q-card q-card-color-1">
          <div class="content">${this._quote.quote}</div>
          <div class='author'>${this._quote.character}</div>
        </blockquote>
      </div>
    `;
  }
}
 
customElements.define('quote-item', QuoteItem);