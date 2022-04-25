<script setup>
const {data} = await useFetch("/api/test")
</script>

<template>
  <div class="hello">
    <div>{{data}}</div>
  </div>
</template>

<style scoped>
.hello {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3rem;
  padding: 10rem;
}
</style>
