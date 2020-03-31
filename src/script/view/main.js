import '../component/movie-list';
import DataSource from '../data/data-source.js';

const main = () => {

    const movieListElement = document.querySelector("movie-list")

    const renderMovies = async () => {
        try{
            const movies = await DataSource.loadMovies();
            movieListElement.movie = movies
        } catch (message) {
            console.log(">>>", message)
        }
    }
    renderMovies()
 
    
    
};

export default main;