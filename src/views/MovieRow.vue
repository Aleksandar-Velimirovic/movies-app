<template>
  <div>
      <ul>
          <li>{{movie.title}}</li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'MovieRow',
    props: {
        movie: {
            type: Object,
            required: true
        }
    }   
}
</script>

<style>

</style>