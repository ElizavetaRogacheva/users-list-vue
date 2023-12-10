<template>
  <div class="post">
    <span class="post_title">{{ post.title }}</span>
    <p class="post_text">{{ post.body }}</p>
  </div>
</template>

<script>
export default {
  name: 'PostItem',
  props: {
    post: Object,
  },
};
</script>

<style lang="scss" scoped>
.post {
  background-color: var(--white);
  box-shadow: 1px 1px 15px 1px rgba(0, 0, 0, 0.06);
  border-radius: 7px;
  padding: 20px;
  box-sizing: border-box;

  &_text {
    margin-bottom: 0;
  }

  &_title {
    color: var(--accent-color);
    font-weight: bold;
    font-size: 18px;
  }
}
</style>
