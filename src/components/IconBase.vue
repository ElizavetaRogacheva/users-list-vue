<template>
  <svg xmlns="http://www.w3.org/2000/svg" :viewBox="viewBox" :class="className">
    <slot></slot>
  </svg>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
    },
    viewBox: {
      type: String,
      default: '0 0 16 16',
    },
  },
};
</script>
