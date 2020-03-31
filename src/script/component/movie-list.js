import './movie-item'

class MovieList extends HTMLElement {

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
                :host{
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    flex-wrap: wrap;
                    width: 100%;
                    background-color: #ffffff;
                    border-radius: 50px;
                    padding: 30px 20px !important;
                    box-shadow: 0px 0px 20px 0 rgba(255, 255, 255, 0.5);
                }
                movie-item{
                    width: 25%;
                }
                movie-item:hover{
                    -webkit-animation-name: pulse;
                    animation-name: pulse;
                    -webkit-animation-duration: 1s;
                    animation-duration: 1s;
                    -webkit-animation-fill-mode: both;
                    animation-fill-mode: both;
                }

                @-webkit-keyframes pulse {
                    0% {
                    -webkit-transform: scale3d(1, 1, 1);
                    transform: scale3d(1, 1, 1);
                    }
                    50% {
                    -webkit-transform: scale3d(1.05, 1.05, 1.05);
                    transform: scale3d(1.05, 1.05, 1.05);
                    }
                    100% {
                    -webkit-transform: scale3d(1, 1, 1);
                    transform: scale3d(1, 1, 1);
                    }
                }
                @keyframes pulse {
                    0% {
                    -webkit-transform: scale3d(1, 1, 1);
                    transform: scale3d(1, 1, 1);
                    }
                    50% {
                    -webkit-transform: scale3d(1.05, 1.05, 1.05);
                    transform: scale3d(1.05, 1.05, 1.05);
                    }
                    100% {
                    -webkit-transform: scale3d(1, 1, 1);
                    transform: scale3d(1, 1, 1);
                    }
                } 
                @media screen and (max-width: 960px){
                    movie-item{
                        width: 30%
                    }
                }
                @media screen and (max-width: 720px){
                    movie-item{
                        width: 35%
                    }
                }
                @media screen and (max-width: 540px){
                    movie-item{
                        width: 50%
                    }
                    :host{
                        padding: 10px 5px !important;
                        border-radius: 25px;
                    }
                }
            </style>
        `;
        this._movie.forEach(movie => {
            const movieItemElement = document.createElement("movie-item");
            movieItemElement.movie = movie;
            this.shadowDOM.appendChild(movieItemElement);
        })
    }

}

customElements.define("movie-list", MovieList);