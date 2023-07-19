<template>
  <select :value="value" class="x-select w-full" @change="$emit('input', $event.target.value)">
    <option disabled value="">Выберите из списка</option>
    <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "mySelect",
  props: {
    value: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.x-select {
  font-size: 16px;
  border-bottom: 1px solid black;
}
.x-select:focus {
  outline: 2px;
  border-color: #bdbdbd;
  box-shadow: 0 0 0 0.1rem rgba(158, 158, 158, 0.25);
}
</style>