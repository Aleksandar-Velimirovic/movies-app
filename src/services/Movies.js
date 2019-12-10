import axios from 'axios'

export default class Movie {
    constructor () {
      axios.defaults.baseURL = 'http://localhost:3000/api'
    }

    getAll(){

        return axios.get('movies')
    }

    getId(id){
        return axios.get(`movies/${id}`)
    }

    addMovie(movie){
        return axios.post('movies', movie)
    }

    editMovie(movie){
        return axios.post(`movies/${movie.id}`, movie)
    }
}

export const movies = new Movie()

