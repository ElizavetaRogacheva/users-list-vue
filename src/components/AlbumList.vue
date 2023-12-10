<template>
  <section class="albums section">
    <h2 class="sectionTitle">Альбомы</h2>
    <LoadingScreen v-if="!isLoaded"></LoadingScreen>
    <ErrorScreen v-else-if="isError"></ErrorScreen>
    <ul v-else>
      <li v-for="album in albums" v-bind:key="album.id">
        <AlbumCarousel v-bind:album="album"></AlbumCarousel>
      </li>
    </ul>
  </section>
</template>

<script>
import AlbumCarousel from './AlbumCarousel.vue';
import ErrorScreen from './ErrorScreen.vue';
import LoadingScreen from './LoadingScreen.vue';
import { LINK_PATH } from '../constants';

export default {
  name: 'AlbumList',
  props: {
    userId: null,
  },
  components: {
    AlbumCarousel,
    ErrorScreen,
    LoadingScreen,
  },
  data() {
    return {
      albums: [],
      isError: false,
      isLoaded: true,
    };
  },
  methods: {
    fetchUserAlbums() {
      this.isLoaded = false;
      fetch(`${LINK_PATH}albums?userId=${this.userId}`)
        .then((response) => response.json())
        .then((result) => (this.albums = result))
        .catch(() => {
          this.isError = true;
        })
        .finally(() => (this.isLoaded = true));
    },
  },
  mounted() {
    this.fetchUserAlbums();
  },
};
</script>
