<template>
  <BaseModal name="warning">
    <BaseIcon
      id="warning"
      class="warning-modal__icon"
      width="84"
      height="84"
    />
    <p class="warning-modal__title">
      Oops...
    </p>
    <p class="warning-modal__subtitle">
      Пожалуйста, смените раскладку клавиатуры
    </p>
    <BaseButton
      class="warning-modal__btn"
      @click="acceptBtnClick"
    >
      Ок
    </BaseButton>
  </BaseModal>
</template>

<script setup>
import { inject } from 'vue';
import BaseModal from '../plugins/modals/BaseModal.vue';
import BaseButton from '../ui/BaseButton.vue';
import BaseIcon from '../ui/BaseIcon.vue';

const $modals = inject(['$modals']);

const acceptBtnClick = () => {
  $modals.close();
};
</script>

<style lang="scss" scoped>
.warning-modal__icon {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.warning-modal__title {
  font-weight: 600;
  font-size: 2rem;
  line-height: 1.2;
  text-align: center;
  margin-top: 2rem;
}

.warning-modal__subtitle {
  text-align: center;
  margin-top: 0.5rem;
}

.warning-modal__btn {
  width: fit-content;
  margin-top: 1rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
