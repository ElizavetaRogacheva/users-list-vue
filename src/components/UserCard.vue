<template>
  <div class="user">
    <div class="user_header">
      <p class="user_name">{{ user.name }}</p>
      <ul class="user_info">
        <li class="user_infoItem">
          <IconBase className="user_headIcon"><IconGeo></IconGeo></IconBase>
          <span>{{ user.address?.city }}</span>
        </li>
        <li class="user_infoItem">
          <IconBase className="user_headIcon"><IconCase></IconCase></IconBase>
          <span>{{ user.company?.name }}</span>
        </li>
      </ul>
    </div>
    <div class="user_data">
      <ul class="user_dataList">
        <li class="user_dataItem">
          <IconBase className="user_dataIcon" viewBox="0 0 24 24"
            ><IconMale></IconMale
          ></IconBase>
          <span>{{ user.email }}</span>
        </li>
        <li class="user_dataItem">
          <IconBase className="user_dataIcon" viewBox="0 0 24 24"
            ><IconPhone></IconPhone
          ></IconBase>
          <span>{{ user.phone }}</span>
        </li>
        <li class="user_dataItem">
          <IconBase className="user_dataIcon" viewBox="0 0 24 24"
            ><IconWeb></IconWeb
          ></IconBase>
          <span>{{ user.website }}</span>
        </li>
      </ul>
    </div>
    <ul class="user_links">
      <li class="user_linksElem">
        <a
          href="#"
          @click.prevent="
            onClickProfile({ name: 'user', params: { id: user.id } })
          "
          class="user_link"
          >Профиль</a
        >
      </li>
      <li class="user_linksElem">
        <a
          href="#"
          @click.prevent="
            onClickProfile({
              name: 'section',
              params: { id: user.id, section: personPages.ALBUMS },
            })
          "
          class="user_link"
          >Альбомы</a
        >
      </li>
      <li class="user_linksElem">
        <a
          href="#"
          @click.prevent="
            onClickProfile({
              name: 'section',
              params: { id: user.id, section: personPages.POSTS },
            })
          "
          class="user_link"
          >Посты</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
import IconBase from './IconBase.vue';
import IconCase from './icons/IconCase.vue';
import IconGeo from './icons/IconGeo.vue';
import IconMale from './icons/IconMale.vue';
import IconPhone from './icons/IconPhone.vue';
import IconWeb from './icons/IconWeb.vue';

import { PERSON_PAGES } from '../constants';

export default {
  name: 'UserCard',
  props: {
    user: Object,
  },
  components: {
    IconBase,
    IconGeo,
    IconCase,
    IconMale,
    IconPhone,
    IconWeb,
  },
  created() {
    this.personPages = PERSON_PAGES;
  },
  methods: {
    onClickProfile(params) {
      this.$router.push(params);
      this.$store.commit('setCurrentUser', this.user);
    },
  },
};
</script>

<style lang="scss" scoped>
.user {
  background-color: var(--white);
  border-radius: 7px;
  box-shadow: 1px 1px 15px 1px rgba(0, 0, 0, 0.06);

  &_header {
    background-color: var(--accent-color);
    border-top-right-radius: 7px;
    border-top-left-radius: 7px;
    padding: 20px;
    box-sizing: border-box;
    color: var(--white);
    text-shadow: 1px 1px 1px var(--text-shadow);
  }

  &_data {
    padding: 20px;
    box-sizing: border-box;
  }

  &_name {
    font-weight: bold;
    margin: 0 0 15px;
    font-size: 20px;
    letter-spacing: 0.5px;
  }

  &_infoItem,
  &_dataItem {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  &_infoItem:last-child,
  &_dataItem:last-child {
    margin-bottom: 0px;
  }

  &_headIcon {
    fill: var(--text-shadow);
    margin-right: 10px;
    width: 20px;
    height: 20px;
  }

  &_dataIcon {
    stroke: var(--main-text-color);
    margin-right: 10px;
    width: 20px;
    height: 20px;
    fill: none;
  }

  &_links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
  }

  &_linksElem {
    flex-grow: 1;
    padding: 20px;
    box-sizing: border-box;
    border-right: 1px solid var(--border-color);
  }

  &_linksElem:last-child {
    border: none;
  }

  &_link {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--main-text-color);
    text-decoration: none;
    font-size: 14px;

    &:hover {
      color: var(--accent-color);
    }
  }
}
</style>
