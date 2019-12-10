<template>
    <div>
        <label>Search </label>
        <input type="text" v-model="searchedMovie.title" placeholder="Search">
        <button @click="searchTermUpdated()">Search</button>
        <ul v-if="searchedMovies.length">
            <div v-for="(searchedMovie, index) in searchedMovies" :key="index">
                {{searchedMovie}}
            </div>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            searchedMovie: {},
            searchedMovies: [],
            movieSearchError: 'No such movie!'
        }
    },

    methods:{
        searchTermUpdated(){
            if(this.movie.title == this.searchedMovie.title){
                this.searchedMovies.push(this.movie)
                // console.log(this.movie)
                // console.log( this.searchedMovies)

            }else{
                return this.movieSearchError
                // console.log('error')
            }

            this.searchedMovie = {}
        }
    },

    props: {
        movies: {
            required: true
        }
    }   
}
</script>

<style>

</style>