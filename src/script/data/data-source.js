const baseURL = "https://api.jikan.moe/v3"

class DataSource {
    
    static async loadMovies(){
        try{
            const response = await fetch(`${baseURL}/top/anime/1/movie`)
            const responseJson = await response.json()
            if(responseJson.error){
                this.showResponseMessage(responseJson.message)
            } else {
                return responseJson.top
            }
        } catch(e){
            this.showResponseMessage(e)
        }
    }

    static showResponseMessage(message = "Check your internet connection"){
        alert(message);
    };
}

export default DataSource;