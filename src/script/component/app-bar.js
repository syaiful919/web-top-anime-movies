class AppBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
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
               position: sticky;
               top: 0;
               z-index: 2;
               width: 100%;
               background-color: #172d77;
               color: #ffffff;
               box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
           }
           h2 {
               padding: 16px;
           }
       </style>
       <h2>Top 50 Anime Movie</h2>
       `;
    }
}

customElements.define("app-bar", AppBar);