<template>
  <div class="container">
    <div class="notFound">
      <p class="notFound_text notFound_head">404</p>
      <p class="notFound_text">Этой страницы не существует</p>
      <router-link to="/users-list-vue" class="button">На главную</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style lang="scss" scoped>
.notFound {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;

  &_text {
    color: var(--error-color);
    font-size: 30px;
  }

  &_head {
    font-size: 60px;
    font-weight: bold;
    margin-bottom: 30px;
  }
}
</style>
