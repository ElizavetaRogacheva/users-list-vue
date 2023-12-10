<template>
  <LoadingScreen v-if="!isLoaded"></LoadingScreen>
  <ErrorScreen v-else-if="isError"></ErrorScreen>
  <div v-else class="photos">
    <h3 class="blockTitle">{{ album.title }}</h3>
    <VueSlickCarousel
      v-if="photos.length > 0"
      :slidesToShow="3"
      :autoplay="true"
      :arrows="false"
      :infinite="true"
      :responsive="[
        {
          breakpoint: 670,
          settings: {
            slidesToShow: 2,
          },
        },
      ]"
    >
      <div v-for="photo in photos" :key="photo.id" class="photos_slide">
        <img :src="photo.url" class="photos_img" />
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import ErrorScreen from './ErrorScreen.vue';
import LoadingScreen from './LoadingScreen.vue';
import { LINK_PATH, PHOTOS_LIMIT } from '../constants';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';

export default {
  name: 'AlbumCarousel',
  props: {
    album: Object,
  },
  components: {
    VueSlickCarousel,
    ErrorScreen,
    LoadingScreen,
  },
  data() {
    return {
      photos: [],
      isError: false,
      isLoaded: true,
    };
  },
  methods: {
    fetchPhotos() {
      this.isLoaded = false;
      fetch(
        `${LINK_PATH}photos?albumId=${this.album.id}&_limit=${PHOTOS_LIMIT}`,
      )
        .then((response) => response.json())
        .then((data) => (this.photos = data))
        .catch(() => {
          this.isError = true;
        })
        .finally(() => (this.isLoaded = true));
    },
  },
  mounted() {
    this.fetchPhotos();
  },
};
</script>

<style lang="scss" scoped>
.photos {
  margin-bottom: 20px;
  &_img {
    max-width: 100%;
    object-fit: contain;
  }
  &_slide {
    padding-right: 20px;
    box-sizing: border-box;
  }
  &_nav {
    display: flex;
  }
}

.slick-slider {
  position: relative;
}
</style>
