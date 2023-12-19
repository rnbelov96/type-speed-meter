<template lang="html">
  <svg
    :width="width"
    :height="height"
    aria-hidden="true"
  >
    <use :xlink:href="`/images/sprite.svg#${id}`" />
  </svg>
</template>

<script setup>
defineProps({
  id: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    required: false,
    default() {
      return null;
    },
  },
  height: {
    type: String,
    required: false,
    default() {
      return null;
    },
  },
});
</script>
