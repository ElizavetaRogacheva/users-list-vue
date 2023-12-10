<template>
  <div class="userPage">
    <LoadingScreen v-if="!isLoaded"></LoadingScreen>
    <ErrorScreen v-else-if="isError" class="container"></ErrorScreen>
    <div v-else class="container">
      <h1 class="mainTitle">{{ userName }}</h1>
      <router-link to="/users-list-vue" class="button">На главную</router-link>
      <div v-if="userSection === personPages.ALBUMS" class="userPage_section">
        <AlbumList v-bind:userId="userId" :key="userId"></AlbumList>
      </div>
      <div
        v-else-if="userSection === personPages.POSTS"
        class="userPage_section"
      >
        <PostList v-bind:userId="userId" :key="userId"></PostList>
      </div>
      <div v-else class="userPage_wrapper" :key="userId">
        <PostList v-bind:userId="userId"></PostList>
        <AlbumList v-bind:userId="userId"></AlbumList>
      </div>
    </div>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue';
import AlbumList from '../components/AlbumList.vue';
import ErrorScreen from '@/components/ErrorScreen.vue';
import LoadingScreen from '@/components/LoadingScreen.vue';

import { PERSON_PAGES, LINK_PATH } from '../constants';

export default {
  name: 'UserPage',
  components: {
    PostList,
    AlbumList,
    ErrorScreen,
    LoadingScreen,
  },
  data() {
    return {
      userId: this.$route.params.id,
      userSection: this.$route.params.section,
      userName: this.$store.state.currentUser?.name,
      isError: false,
      isLoaded: true,
    };
  },
  created() {
    this.personPages = PERSON_PAGES;
  },
  methods: {
    fetchUserData() {
      this.isLoaded = false;
      fetch(`${LINK_PATH}users?id=${this.userId}`)
        .then((response) => response.json())
        .then((data) => {
          this.$store.commit('setCurrentUser', data[0]);
          this.userName = this.$store.state.currentUser?.name;
          this.userId = this.$route.params.id;
        })
        .catch(() => {
          this.isError = true;
        })
        .finally(() => (this.isLoaded = true));
    },
  },
  mounted() {
    if (!this.userName) {
      this.fetchUserData();
    }
  },
  watch: {
    $route(to, from) {
      this.userId = this.$route.params.id;
      this.userSection = this.$route.params.section;
      if (to.params.id !== from.params.id) {
        this.fetchUserData();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.userPage {
  &_wrapper {
    display: grid;
    grid-template-columns: 1fr 50%;
    gap: 30px;
  }
}

@media (max-width: 960px) {
  .userPage {
    &_wrapper {
      grid-template-columns: 100%;
    }
  }
}
</style>
