<template>
  <Transition
    name="modal-apperance"
    mode="out-in"
  >
    <div
      v-if="isActive"
      class="modal"
    >
      <div
        class="modal__content modal__content_center modal__content_center"
        @click.self="closeModal"
      >
        <div class="modal__wrapper">
          <div class="modal__body">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { computed, inject } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  afterClose: {
    type: Function,
    required: false,
    default() {
      return () => {};
    },
  },
});

const $modals = inject('$modals');

const isActive = computed(() => $modals.active() === props.name);

const closeModal = () => {
  $modals.close();

  props.afterClose();
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  max-height: 10000px;
  z-index: 11;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  opacity: 1;
  pointer-events: initial;
  transition: opacity 0.5s, transform 0.5s, max-height 0.1s linear 0.5s;
  overflow: initial;
  background-color: rgba(black, 0.2);

  &.modal-apperance-enter-active {
    transition: opacity 0.5s ease;
  }

  &.modal-apperance-enter-from {
    opacity: 0;

    .modal__wrapper {
      transform: translateY(100%);
    }
  }

  &.modal-apperance-leave-active {
    transition: opacity 0.5s ease;
  }

  &.modal-apperance-leave-to {
    opacity: 0;

    .modal__wrapper {
      transform: translateY(100%);
    }
  }
}

.modal__content {
  height: 100%;
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;

  &_right {
    justify-items: flex-end;
  }

  &_center {
    align-items: center;
  }

  &_bottom {
    align-items: end;
  }
}

.modal__wrapper {
  width: 100%;
  max-width: 32.5rem;
  position: relative;
  transform: translateY(0%);
  transition: transform 0.5s;
  padding: 2rem;
  border-radius: 1rem;
  background: #FFF;
  box-shadow: -8px 0px 16px 0px rgba(0, 0, 0, 0.08), 0px 0px 4px 0px rgba(0, 0, 0, 0.04);

  @include media-breakpoint(sm) {
    padding: 1rem;
  }
}

.modal__body {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

.modal__header,
.modal__main {
  padding: 2rem;

  @include media-breakpoint(sm) {
    padding: 1rem;
  }
}

.modal__header {
  border-bottom: 1px solid #D4DEEB;
}

.modal__main {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
