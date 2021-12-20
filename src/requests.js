const API_KEY = "1694d151ddd67c42652a2f8766c61104";

const requests = {
    
  fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en=us`,
  fetchNetflixOriginals : `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en=us`,
  fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_generes=28`,
  fetchComedyMovies : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies : `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies : `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries : `/discover/movie?api_key=${API_KEY}&with_genres=99`

}

export default requests;