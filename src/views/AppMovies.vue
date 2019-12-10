<template>
    <div>
        <h1>Movies</h1>
        <MovieRow v-for="movie in movies" :key="movie.id" :movie="movie"/>
        <MovieSearch :movies="movies"/>
    </div>
</template>

<script>
import MovieRow from './MovieRow'
import MovieSearch from './MovieSearch'
import { movies } from '../services/Movies'

export default {

    components:{
        MovieRow,
        MovieSearch
    },

    data(){
        return{
            movies: {}
        }
    },
    
    beforeRouteEnter (to, from, next) {
      movies.getAll()
        .then(response => {
            next(vm => (vm.movies = response.data) )
        })
    }
}
</script>

<style>

</style>