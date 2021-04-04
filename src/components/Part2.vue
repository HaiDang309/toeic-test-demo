<template lang="">
  <div class="part">
    <h3>Part 2</h3>
    <p>
      Directions: You will hear a question or statement and three responses
      spoken in English. They will not be printed in your test book and will be
      spoken only one time. Select the best response to the question or
      statement and mark the letter (A), (B), or (C) on your answer sheet.
    </p>
    <table class="part__table">
      <tr>
        <th>Questions</th>
        <th>Answers</th>
        <th>Correct</th>
      </tr>
      <tr v-for="index in 25" :key="index">
        <td>
          {{ index + 6 }}
        </td>
        <td>
          <input
            id="a"
            type="radio"
            :value="index + 6 + 'a'"
            :name="index + 6"
            @change="handleChangeRadio($event)"
          />
          <label for="a">A</label>

          <input
            id="b"
            type="radio"
            :value="index + 6 + 'b'"
            :name="index + 6"
            @change="handleChangeRadio($event)"
          />
          <label for="b">B</label>

          <input
            id="c"
            type="radio"
            :value="index + 6 + 'c'"
            :name="index + 6"
            @change="handleChangeRadio($event)"
          />
          <label for="c">C</label>
        </td>
        <td>
          <input type="checkbox" :value="index + 6" v-model="correct" />
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
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
      this.$store.commit("getCorrect2", this.correct);
    },
    shouldClear: function() {
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
