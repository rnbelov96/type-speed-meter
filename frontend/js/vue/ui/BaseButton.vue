<template>
  <button class="button">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button {
  display: block;
  width: 100%;
  border-radius: 1rem;
  border: 1px solid #146680;
  background: #105267;
  height: 3.5rem;
  padding: 1rem;
  text-align: center;
  color: #FFF;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  transition: 0.5s;

  &:hover,
  &:focus {
    border-radius: 1rem;
    border: 1px solid #146680;
    background: #378199;
  }

  &.-white {
    border: 2px solid #146680;
    background-color: white;
    color: black;
  }

  &.-sign-in {
    height: 3rem;
    min-width: 8.5rem;
  }
}
</style>
