<template lang="">
  <div class="header">
    <div class="header__left">
      <i @click="handleOpenDrawer" class="fas fa-cog"></i>
      |
      <button @click="this.$emit('submit')">Summary</button>
      |
      <button @click="handleClear">Clear</button>
    </div>

    <div class="header__right">
      <Timer />
    </div>
  </div>
  <Drawer v-if="openDrawer" @close="handleCloseDrawer" />
</template>
<script>
import Drawer from "./Drawer.vue";
import Timer from "./Timer.vue";

export default {
  components: {
    Drawer,
    Timer,
  },
  data() {
    return {
      openDrawer: false,
    };
  },
  methods: {
    handleOpenDrawer() {
      this.openDrawer = true;
    },
    handleCloseDrawer() {
      this.openDrawer = false;
    },
    handleClear() {
      this.$store.commit('clearResult');
    },
  },
};
</script>
<style lang="scss">
#top {
    position: absolute;
    top: 0;
}

.header {
  display: flex;
  justify-content: space-between;

  background: #c06014;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 4;

  width: 100%;

  padding: 16px 0;

  .header__left {
    padding-left: 32px;

    font-size: 24px;

    display: flex;
    align-items: center;
    gap: 8px;

    height: 100%;

    button {
      cursor: pointer;

      text-transform: uppercase;

      background: inherit;

      color: #fff;

      padding: 8px;

      border: none;
      outline: none;

      position: relative;

      height: 100%;

      &:hover {
        background: #fff;
        color: #000;
      }
    }

    i {
      cursor: pointer;
    }
  }

  .header__right {
    padding-right: 32px;
  }
}
</style>
