<template>
  <section class="postList section">
    <h2 class="sectionTitle">Посты</h2>
    <LoadingScreen v-if="!isLoaded"></LoadingScreen>
    <ErrorScreen v-else-if="isError"></ErrorScreen>
    <ul v-else>
      <li v-for="post in posts" v-bind:key="post.id" class="postItem">
        <PostItem v-bind:post="post"></PostItem>
      </li>
    </ul>
  </section>
</template>

<script>
import PostItem from './PostItem.vue';
import ErrorScreen from './ErrorScreen.vue';
import LoadingScreen from './LoadingScreen.vue';
import { LINK_PATH } from '../constants';
export default {
  name: 'PostList',
  props: {
    userId: null,
  },
  components: {
    PostItem,
    ErrorScreen,
    LoadingScreen,
  },
  data() {
    return {
      posts: [],
      isError: false,
      isLoaded: true,
    };
  },
  methods: {
    fetchUserPosts() {
      this.isLoaded = false;
      fetch(`${LINK_PATH}posts?userId=${this.userId}`)
        .then((response) => response.json())
        .then((data) => (this.posts = data))
        .catch(() => {
          this.isError = true;
        })
        .finally(() => (this.isLoaded = true));
    },
  },
  mounted() {
    this.fetchUserPosts();
  },
};
</script>

<style lang="scss" scoped>
.postItem {
  margin-bottom: 20px;
}
</style>
