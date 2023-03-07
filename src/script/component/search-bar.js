class SearchBar extends HTMLElement {
  constructor() {
  super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render();
  }
  
  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }
 
  get value() {
    return this.shadowDOM.querySelector('#searchElement').value;
  }
 
  render() {
    this.shadowDOM.innerHTML = `
      <style>
      .search-container {
        max-width: 800px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        padding: 16px;
        border-radius: 5px;
        display: flex;
        position: sticky;
        top: 10px;
        /*background-color: white;*/
      }
      
      .search-container > input {
        width: 95%;
        padding: 16px;
        border: 0;
        border-bottom: 1px solid cornflowerblue;
        font-weight: bold;
      }
      
      @media screen and (max-width: 550px){
        .search-container {
          flex-direction: column;
          position: static;
        }
        
        .search-container > input {
          width: 100%;
          margin-bottom: 12px;
        }
        
        .search-container > button {
          width: 100%;
        }
      }


      /* css searchbar */
      @import url(https://fonts.googleapis.com/css?family=Cabin:400);

      input {
      background: #222;	
      background: linear-gradient(#333, #222);	
      border: 1px solid #444;
      border-radius: 5px 0 0 5px;
      box-shadow: 0 2px 0 #000;
      color: #888;
      display: block;
      float: left;
      font-family: 'Cabin', helvetica, arial, sans-serif;
      font-size: 13px;
      font-weight: 400;
      height: 40px;
      margin: 0;
      padding: 0 10px;
      text-shadow: 0 -1px 0 #000;
      width: 200px;
    }

    .ie   input {
      line-height: 40px;
    }

      input::-webkit-input-placeholder {
      color: #888;
    }

      input:-moz-placeholder {
      color: #888;
    }

      input:focus {
      animation: glow 800ms ease-out infinite alternate;
      background: #222922;
      background: linear-gradient(#333933, #222922);
      border-color: #393;
      box-shadow: 0 0 5px rgba(0,255,0,.2), inset 0 0 5px rgba(0,255,0,.1), 0 2px 0 #000;
      color: #efe;
      outline: none;
    }

      input:focus::-webkit-input-placeholder { 
      color: #efe;
    }

      input:focus:-moz-placeholder {
      color: #efe;
    }

      button {
      background: #222;
      background: linear-gradient(#333, #222);
      box-sizing: border-box;
      border: 1px solid #444;
      border-left-color: #000;
      border-radius: 0 5px 5px 0;
      box-shadow: 0 2px 0 #000;
      color: #fff;
      display: block;
      float: left;
      font-family: 'Cabin', helvetica, arial, sans-serif;
      font-size: 13px;
      font-weight: 400;
      height: 40px;
      line-height: 40px;
      margin: 0;
      padding: 0;
      position: relative;
      text-shadow: 0 -1px 0 #000;
      width: 80px;
    }	

      button:hover,
      button:focus {
      background: #292929;
      background: linear-gradient(#393939, #292929);
      color: #5f5;
      outline: none;
    }

      button:active {
      background: #292929;
      background: linear-gradient(#393939, #292929);
      box-shadow: 0 1px 0 #000, inset 1px 0 1px #222;
      top: 1px;
    }

    @keyframes glow {
        0% {
        border-color: #393;
        box-shadow: 0 0 5px rgba(0,255,0,.2), inset 0 0 5px rgba(0,255,0,.1), 0 2px 0 #000;
        }	
        100% {
        border-color: #6f6;
        box-shadow: 0 0 20px rgba(0,255,0,.6), inset 0 0 10px rgba(0,255,0,.4), 0 2px 0 #000;
        }
    }
      </style>

        <div id="search-container" class="search-container" >		    
          <input id="searchElement" type="search" placeholder="Masukan Nama Character (ex. Saitama)">		    	
          <button id="searchButtonElement" type="submit">Search</button>
        </div>
    `;
 
    this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
  }
}
 
customElements.define('search-bar', SearchBar);