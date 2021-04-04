<template lang="">
  <div @click.self="handleCloseModal" class="dropback">
    <div class="modal">
      <h1>Choose Part</h1>
      <h3>Quick actions</h3>
      <div class="modal__button">
        <button @click="handleCheckAll">Select All</button>
        <button @click="handleCheckListening">Listening only</button>
        <button @click="handleCheckReading">Reading only</button>
      </div>

      <h4>Listening:</h4>
      <div class="modal__listening-checkbox">
        <input id="1" type="checkbox" value="part1" v-model="listening1" />
        <label for="1">Part 1 (6 questions)</label>
        <br />
        <input id="2" type="checkbox" value="part2" v-model="listening2" />
        <label for="2">Part 2 (25 questions)</label>
        <br />
        <input id="3" type="checkbox" value="part3" v-model="listening3" />
        <label for="3">Part 3 (39 questions)</label>
        <br />
        <input
          checked="true"
          id="4"
          type="checkbox"
          value="part4"
          v-model="listening4"
        />
        <label for="4">Part 4 (30 questions)</label>
      </div>

      <h4>Reading:</h4>
      <div class="modal__reading-checkbox">
        <input id="5" type="checkbox" value="part5" v-model="reading1" />
        <label for="5">Part 5 (30 questions)</label>
        <br />
        <input id="6" type="checkbox" value="part6" v-model="reading2" />
        <label for="6">Part 6 (16 questions)</label>
        <br />
        <input id="7" type="checkbox" value="part7" v-model="reading3" />
        <label for="7">Part 7 (54 questions)</label>
      </div>

      <button @click="handleChoosePart">Done</button>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  methods: {
    handleCloseModal() {
      this.$emit("close");
    },
    handleCheckAll() {
      this.listening1 = true;
      this.listening2 = true;
      this.listening3 = true;
      this.listening4 = true;
      this.reading1 = true;
      this.reading2 = true;
      this.reading3 = true;
    },
    handleCheckListening() {
      this.listening1 = true;
      this.listening2 = true;
      this.listening3 = true;
      this.listening4 = true;
      this.reading1 = false;
      this.reading2 = false;
      this.reading3 = false;
    },
    handleCheckReading() {
      this.listening1 = false;
      this.listening2 = false;
      this.listening3 = false;
      this.listening4 = false;
      this.reading1 = true;
      this.reading2 = true;
      this.reading3 = true;
    },
    handleChoosePart() {
      this.checkedPart = Array.from(
        document.querySelectorAll('.modal input[type="checkbox"]')
      ).filter((item) => item.checked);
      if (this.checkedPart.length === 0) {
        alert("You have to choose at least 1 part!");
        return;
      }
      this.$store.commit("checked", this.checkedPart);
      this.$emit("close");
    },
  },
  computed: {
    ...mapState(["checked"]),
  },
  mounted() {
    this.reading1 = this.checked.includes("part5");
    this.reading2 = this.checked.includes("part6");
    this.reading3 = this.checked.includes("part7");
    this.listening1 = this.checked.includes("part1");
    this.listening2 = this.checked.includes("part2");
    this.listening3 = this.checked.includes("part3");
    this.listening4 = this.checked.includes("part4");
  },
  data() {
    return {
      reading1: true,
      reading2: true,
      reading3: true,
      listening1: true,
      listening2: true,
      listening3: true,
      listening4: true,

      checkedPart: [],
    };
  },
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

    width: 480px;

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
