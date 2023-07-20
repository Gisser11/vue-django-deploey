<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-primary-light to-primary-dark">
    <div class="p-8 bg-gray-200 shadow-lg rounded-lg">
      <h1 class="text-4xl font-bold text-gray-800 mb-4">Привет!</h1>
      <router-link to="/CRUD"><p class="text-lg text-gray-600 mb-4">Для перехода на основную страницу нажмите на меня!</p></router-link>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style>
.bg-gradient-to-br {
  background-image: linear-gradient(to bottom right, #C6F6D5, #9AE6E6);
}
</style>
