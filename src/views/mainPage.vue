<template>
  <div class="h-screen" @keydown.left="moveLeft" @keydown.right="moveRight" tabindex="0">
    <transition name="slide-left">
      <div class="left-panel" :class="{ active: activePanel === 'left', 'slide-left': slideLeft }">
        Левая часть
      </div>
    </transition>
    <transition name="slide-right">
      <div class="right-panel" :class="{ active: activePanel === 'right', 'slide-right': slideRight }">
        Правая часть
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activePanel: 'left',
      slideLeft: false,
      slideRight: false,
    };
  },
  methods: {
    moveLeft() {
      console.log(1)
      this.slideLeft = true;
      this.slideRight = false;
      this.activePanel = 'left';
      setTimeout(() => {
        this.slideLeft = false;
      }, 1000);
    },
    moveRight() {
      this.slideLeft = false;
      this.slideRight = true;
      this.activePanel = 'right';
      setTimeout(() => {
        this.slideRight = false;
      }, 1000);
    },
  },
};
</script>

<style scoped>
.h-screen {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f1f1f1;
}

.left-panel,
.right-panel {
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  transition: opacity 0.3s ease;
}

.left-panel {
  background-color: #ff0000;
}

.right-panel {
  background-color: #ffff00;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 1s;
}

.slide-left-enter,
.slide-left-leave-to,
.slide-right-enter,
.slide-right-leave-to {
  transform: translateX(100%);
}

.slide-left-leave-active,
.slide-right-leave-active {
  position: absolute;
}

.slide-left.slide-left-enter,
.slide-left.slide-left-leave-to {
  transform: translateX(0);
}

.slide-right.slide-right-enter,
.slide-right.slide-right-leave-to {
  transform: translateX(0);
}
</style>
