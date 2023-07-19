<template>
  <div v-if="show" class="top-0 bottom-0 left-0 right-0 flex fixed x-bg" @click="hideDialog">
    <div @click.stop class="m-auto bg-white border rounded-br-2xl rounded-tl-2xl p-5">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyDialog',
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    hideDialog: function () {
      this.$emit('update:show', false);
    }
  },
  updated() {
    if (!this.show) {
      this.$emit('update:show', false);
    }
  }
};
</script>

<style scoped>
.x-bg {
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
}
</style>
