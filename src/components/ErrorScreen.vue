<template>
  <section class="error">
    <p class="error_text">Ой, что-то пошло не так, попробуйте позже :(</p>
  </section>
</template>

<script>
export default {
  name: 'ErrorScreen',
};
</script>

<style lang="scss" scoped>
.error {
  display: flex;
  align-items: center;
  justify-content: center;

  &_text {
    text-align: center;
    color: var(--error-color);
    font-size: 20px;
  }
}
</style>
