<template>
  <button v-on="$listeners" class="mt-1.5 bg-gray-200 border-r-2 border-amber-50 px-2 py-2">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name:'my-button'
}
</script>

<style scoped>

</style>