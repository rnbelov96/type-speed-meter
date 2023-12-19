<template>
  <main>
    <section class="app">
      <div class="wrapper">
        <div class="container">
          <Transition
            name="fade"
            mode="out-in"
          >
            <WelcomeScreen v-if="gameStatus === APP_STATUSES.WELCOME" />
            <GameScreen v-else-if="gameStatus === APP_STATUSES.STARTED" />
            <ResultScreen v-else />
          </Transition>
        </div>
      </div>
    </section>
  </main>
  <WarningModal />
</template>

<script setup>
import { computed } from 'vue';
import useAppStore from '../stores/app-store';
import useDataStore from '../stores/data-store';
import WelcomeScreen from './WelcomeScreen.vue';
import GameScreen from './GameScreen.vue';
import ResultScreen from './ResultScreen.vue';
import WarningModal from './WarningModal.vue';
import { APP_STATUSES } from '../../utils/constants';

const appStore = useAppStore();
const dataStore = useDataStore();

const gameStatus = computed(() => appStore.gameStatus);

dataStore.getQuote();
</script>

<style lang="scss">
main {
  overflow: clip;
}

body {
  background-color: white;
  color: $black;
  font-family: 'GothamPro', sans-serif;
  line-height: 1.5;

  &.hidden-content {
    overflow: hidden;
  }
}

.container {
  position: relative;
  z-index: 1;
  max-width: 1270px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1300px) {
    padding: 0 rem(24);
  }

  @media (max-width: 960px) {
    padding: 0 1rem;
  }
}

.visually-hidden {
  position: absolute;
  overflow: hidden;
  width: 1px;
  height: 1px;
  padding: 0;
  border: 0;
  margin: -1px;
  clip: rect(0 0 0 0);
}

.app {
  height: 100dvh;
}

.wrapper {
  height: 100%;
  overflow: auto;
  display: grid;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.3s ease;
}
.fade-enter-from {
  opacity: 0;
}
</style>
