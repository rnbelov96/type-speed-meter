<template>
  <div class="timer">
    <p class="timer__caption">
      Осталось:
    </p>
    <div class="timer__timer-row">
      <div class="timer__timer-item">
        <p class="timer__time-number">
          {{ minutesCaption }}
        </p>
        <p class="timer__time-caption">
          минут
        </p>
      </div>
      <div class="timer__devider">
        :
      </div>
      <div class="timer__timer-item">
        <p class="timer__time-number">
          {{ secondsCaption }}
        </p>
        <p class="timer__time-caption">
          секунд
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import beautifyNumber from '../../utils/beautify-number';

const props = defineProps({
  secondsLeft: {
    type: Number,
    required: true,
  },
});

const minutesCaption = computed(() => beautifyNumber(Math.floor(props.secondsLeft / 60)));
const secondsCaption = computed(() => beautifyNumber(props.secondsLeft - (Math.floor(props.secondsLeft / 60) * 60)));
</script>

<style lang="scss" scoped>
.timer__caption {
  font-size: 1.2rem;
}

.timer__timer-row {
  display: flex;
  margin-top: 0.5rem;
  gap: 1rem;
  align-items: center;
}

.timer__time-number {
  width: 4rem;
  font-size: 3rem;
  line-height: 1.2;
  text-align: center;
}

.timer__time-caption {
  text-align: center;
}

.timer__devider {
  font-size: 1.5rem;
  position: relative;
  top: -12px;
}
</style>
