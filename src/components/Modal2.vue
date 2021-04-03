<template lang="">
  <div @click.self="handleCloseModal" class="dropback">
    <div class="modal">
      <h1>Set timer</h1>
      <div class="modal__button">
        <button @click="handleFull">Full test <br /> (120 min)</button>
        <button @click="handleListening">Listening only <br />  (45 min)</button>
        <button @click="handleReading">Reading only <br />  (75 min)</button>
      </div>

        <h3>{{ min }} mins</h3>
      
      <button @click.stop="handleDone">Done</button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    handleCloseModal() {
      this.$emit("close");
    },
    handleFull() {
        this.min = 120
    },
    handleListening() {
        this.min = 45
    },
    handleReading() {
        this.min = 75
    },
    handleDone() {
        this.$store.commit('getMin', this.min)
        this.$emit("close");
    }
  },
  data() {
    return {
      min: 120
    };
  }
};
</script>
<style lang="scss" scoped>
.dropback {
  height: 100vh;
  width: 100vw;

  position: absolute;
  top: 0;
  left: 0;

  background: rgba($color: #000000, $alpha: 0.5);

  display: flex;
  justify-content: center;

  z-index: 15;
  .modal {
    text-align: center;

    position: fixed;
    top: 24px;

    width: 512px;

    padding: 24px;

    background: #fff;
    color: #000;

    z-index: 20;

    .modal__button {
      display: flex;
      justify-content: space-around;
      gap: 8px;

      button {
        background: #387c6d;
        color: #fff;
        border: none;
        outline: none;
        padding: 16px;
        text-transform: uppercase;
        border-radius: 16px;
        cursor: pointer;
      }
    }
    .modal__listening-checkbox,
    .modal__reading-checkbox {
      margin-top: -16px;

      label,
      input {
        margin-bottom: 16px;
        cursor: pointer;
      }
    }

    button {
      padding: 16px;

      border: none;
      outline: none;
      border-radius: 24px;

      width: 100%;

      cursor: pointer;

      background: #3c415c;
      color: #fff;

      text-transform: uppercase;
  }

  }
}
</style>
