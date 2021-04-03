<template lang="">
  <div class="part">
    <h3>Part {{part}}</h3>
    <p>{{direction}}</p>
    <table class="part__table">
      <tr>
        <th>Questions</th>
        <th>Answers</th>
        <th>Correct</th>
      </tr>
        <tr v-for="index in numOfQuestion" :key="index + start">
            <td>
                {{ index + start}}
            </td>
            <td>
                <input :id="index" type="radio" :value="index.toString() + start" :name="index.toString() + start" />
                <label :for='index'>A</label>

                <input :id="index" type="radio" :value="index.toString() + start" :name="index.toString() + start" />
                <label :for='index'>B</label>

                <input :id="index" type="radio" :value="index.toString() + start" :name="index.toString() + start" />
                <label :for='index'>C</label>

                <input :id="index" type="radio" :value="index.toString() + start" :name="index.toString() + start" />
                <label :for='index'>D</label>
            </td>
            <td>
                <input type="checkbox" :value="index" v-model="correct" />
            </td>
        </tr>
    </table>
  </div>
</template>
<script>
export default {
  props: ['part', 'direction', 'numOfQuestion', 'start'],
  data() {
    return {
      correct: []
    }
  },
  watch: {
    correct: function() {
      this.$store.commit('getCorrect', this.correct)
    }
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
