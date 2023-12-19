<template>
  <div class="result-screen">
    <p class="result-screen__speed-text">
      Ваша скорость: {{ speed }} зн./мин
    </p>
    <BaseButton
      class="result-screen__btn"
      @click="appStore.restartGame"
    >
      Начать заново
    </BaseButton>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import useDataStore from '../stores/data-store';
import useAppStore from '../stores/app-store';
import BaseButton from '../ui/BaseButton.vue';

const dataStore = useDataStore();
const appStore = useAppStore();

const speed = computed(() => dataStore.currentSpeed);
</script>

<style lang="scss" scoped>
.result-screen__speed-text {
  font-size: 1.5rem;
  text-align: center;

  @include media-breakpoint(sm) {
    font-size: 1.2rem;
  }
}

.result-screen__btn {
  margin-top: 1.5rem;
  max-width: 15rem;
  margin-left: auto;
  margin-right: auto;
  display: block;
}
</style>
