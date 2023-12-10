<template>
  <section class="loading">
    <p class="loading_text">Загрузка...</p>
  </section>
</template>

<script>
export default {
  name: 'LoadingScreen',
};
</script>

<style lang="scss" scoped>
.loading {
  display: flex;
  align-items: center;
  justify-content: center;

  &_text {
    text-align: center;
    color: var(--accent-color);
    font-size: 20px;
  }
}
</style>
