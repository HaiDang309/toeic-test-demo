<template lang="">
  <div class="part">
    <h3>Part {{ part }}</h3>
    <p>{{ direction }}</p>
    <table class="part__table">
      <tr>
        <th>Questions</th>
        <th>Answers</th>
        <th>Correct</th>
      </tr>
      <tr v-for="index in numOfQuestion" :key="index + start">
        <td>
          {{ index + start }}
        </td>
        <td>
          <input
            :id="index + start"
            type="radio"
            :value="index + start + 'a'"
            :name="index + start"
            @change="handleChangeRadio($event)"
          />
          <label :for="index + start">A</label>

          <input
            :id="index + start"
            type="radio"
            :value="index + start + 'b'"
            :name="index + start"
            @change="handleChangeRadio($event)"
          />
          <label :for="index + start">B</label>

          <input
            :id="index + start"
            type="radio"
            :value="index + start + 'c'"
            :name="index + start"
            @change="handleChangeRadio($event)"
          />
          <label :for="index + start">C</label>

          <input
            :id="index + start"
            type="radio"
            :value="index + start + 'd'"
            :name="index + start"
            @change="handleChangeRadio($event)"
          />
          <label :for="index + start">D</label>
        </td>
        <td>
          <input type="checkbox" :value="index + start" v-model="correct" />
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  props: ["part", "direction", "numOfQuestion", "start"],
  data() {
    return {
      correct: [],
      answer: [],
    };
  },
  computed: {
    ...mapState(["shouldClear"]),
  },
  watch: {
    correct: function() {
      this.$store.commit("getCorrect" + this.part, this.correct);
    },
    shouldClear: function() {
      const radios = Array.from(
        document.querySelectorAll('.part__table input[type="radio"]')
      );
      const checkboxs = Array.from(
        document.querySelectorAll('.part__table input[type="checkbox"]')
      );
      checkboxs.map((checkbox) => {
        checkbox.checked = false;
      });
      radios.map((radio) => {
        radio.checked = false;
      });
      this.correct = [];
      this.answer = [];
    },
  },
  methods: {
    handleChangeRadio(e) {
      let realAnswer = e.target.value.split(/[a-z]/)[0];
      if (this.answer.includes(realAnswer)) {
        return;
      } else {
        this.answer.push(realAnswer);
      }
      this.$store.commit("getAnswer", this.answer);
    },
  },
};
</script>

<style lang="scss">
$border-edge: rgba(0, 0, 0, 0.1);
.part {
  padding: 24px;
  margin-left: 16px;
  margin-right: 48px;

  background: #f3f4ed;

  color: #536162;

  border-radius: 16px;

  table {
    width: 100%;

    text-align: center;

    th {
      font-size: 1.3em;

      padding: 8px 0;

      border-top: 1px solid $border-edge;
      border-bottom: 4px solid $border-edge;
    }

    td {
      border-bottom: 1px solid $border-edge;

      padding: 8px 0;
    }
  }

  input[type="radio"] {
    cursor: pointer;

    width: 16px;
    height: 16px;
  }

  label {
    margin-right: 8px;

    font-size: 20px;
  }

  input[type="checkbox"] {
    width: 24px;
    height: 24px;

    cursor: pointer;
  }
}
</style>
