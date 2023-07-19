<template>
  <tr>
    <td class="border px-4 py-2">{{ post.name }}</td>
    <td class="border px-4 py-2">{{ post.specialty }}</td>
    <td class="border px-4 py-2">{{ post.work_experience }}</td>
    <td class="border px-4 py-2 flex justify-center">
      <my-button
        @click="$emit('remove', post)"
      >
        Удалить
      </my-button>
      <my-button>Изменить</my-button></td>
  </tr>

</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
