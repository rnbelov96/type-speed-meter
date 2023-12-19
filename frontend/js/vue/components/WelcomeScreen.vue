<template>
  <div class="welcome-screen">
    <h1 class="welcome-screen__title">
      Измерь скорость печати
    </h1>
    <p class="welcome-screen__subtitle">
      Данное приложение позволяет измерить скорость печати. Вам будут предложены цитаты для печати. При нажатии кнопки "Начать" запустить таймер. Необходимо за три минуты как можно быстрее напечатать цитату.
    </p>
    <BaseButton
      class="welcome-screen__btn"
      @click="startBtnClickHandler"
    >
      Начать
    </BaseButton>
  </div>
</template>

<script setup>
import BaseButton from '../ui/BaseButton.vue';
import useAppStore from '../stores/app-store';
import { APP_STATUSES } from '../../utils/constants';

const appStore = useAppStore();

const startBtnClickHandler = () => {
  appStore.changeGameStatus(APP_STATUSES.STARTED);
};
</script>

<style lang="scss" scoped>
.welcome-screen {
  width: 100%;
}
.welcome-screen__title {
  font-size: 3rem;

  @include media-breakpoint(sm) {
    font-size: 1.5rem;
    line-height: 1.2;
  }
}

.welcome-screen__subtitle {
  max-width: 60rem;
  font-size: 1.5rem;
  margin-top: 1rem;

  @include media-breakpoint(sm) {
    font-size: 1.2rem;
  }
}

.welcome-screen__btn {
  max-width: 15rem;
  margin-top: 1.5rem;
}
</style>
