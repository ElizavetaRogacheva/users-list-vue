<template>
  <div class="container">
    <h1 class="mainTitle">Список пользователей</h1>
    <LoadingScreen v-if="!isLoaded"></LoadingScreen>
    <ErrorScreen v-else-if="isError"></ErrorScreen>
    <ul v-else class="userList">
      <li class="userItem" v-for="user in users" v-bind:key="user.id">
        <UserCard v-bind:user="user"></UserCard>
      </li>
    </ul>
  </div>
</template>

<script>
import UserCard from '@/components/UserCard.vue';
import ErrorScreen from '../components/ErrorScreen.vue';
import LoadingScreen from '@/components/LoadingScreen.vue';
import { LINK_PATH } from '../constants';
export default {
  name: 'IndexPage',
  components: {
    UserCard,
    ErrorScreen,
    LoadingScreen,
  },
  data() {
    return {
      users: [],
      isError: false,
      isLoaded: true,
    };
  },
  methods: {
    fetchUsersData() {
      this.isLoaded = false;
      fetch(`${LINK_PATH}users`)
        .then((response) => response.json())
        .then((data) => (this.users = data))
        .catch(() => {
          this.isError = true;
        })
        .finally(() => (this.isLoaded = true));
    },
  },
  mounted() {
    this.fetchUsersData();
    this.$store.commit('setCurrentUser', null);
  },
};
</script>

<style lang="scss" scoped>
.userList {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

@media (max-width: 960px) {
  .userList {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 670px) {
  .userList {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
