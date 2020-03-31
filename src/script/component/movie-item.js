class MovieItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
           <style>
               :host {
                    padding: 10px 20px;
                    box-sizing: border-box;
               }
              
               .poster{
                    position: relative;
                }
                
                .poster img{
                    width: 100%;
                    height: 284px;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8);
                }
            
                
                .score{
                    height: 50px;
                    width: 50px;
                    font-size: 20px;
                    color: #ffffff;
                    background-color: #d67c06;
                    border-radius: 50%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8);
                    position: absolute;
                    bottom: 30px;
                    right: -25px;
                }

                @media screen and (max-width: 720px){
                    .poster img{
                        height: 252px
                    }
                }

                @media screen and (max-width: 540px){
                    .poster img{
                        height: 200px
                    }
                    .score{
                        height: 35px;
                        width: 35px;
                        font-size: 15px;
                        bottom: 20px;
                        right: -18px;
                    }
                }
                
                .title{
                    color: #3e2d54;
                    font-weight: 600;
                    font-size: 18px;
                    margin: 10px 5px 5px;
                }

           </style>


           <div class="poster">
                <img src=${this._movie.image_url}>
                <div class="score">${this._movie.score}</div>
            </div>
            <div class="title">${this._movie.title}</div>
            
           `;

    }
}

customElements.define("movie-item", MovieItem);