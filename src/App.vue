<template>
  <Header @submit="handleSubmit" />
  <div class="test">
    <Part :part="1" :direction="mockTest.part1.direction" :numOfQuestion="mockTest.part1.numOfQuestions" :start="0" v-if="show1" />
    <Part2 v-if="show2" />
    <Part :part="3" :direction="mockTest.part3.direction" :numOfQuestion="mockTest.part3.numOfQuestions" :start="31"   v-if="show3" />
    <Part :part="4" :direction="mockTest.part4.direction" :numOfQuestion="mockTest.part4.numOfQuestions" :start="70"   v-if="show4" />
    <Part :part="5" :direction="mockTest.part5.direction" :numOfQuestion="mockTest.part5.numOfQuestions" :start="100"   v-if="show5" />
    <Part :part="6" :direction="mockTest.part6.direction" :numOfQuestion="mockTest.part6.numOfQuestions" :start="130"   v-if="show6" />
    <Part :part="7" :direction="mockTest.part7.direction" :numOfQuestion="mockTest.part7.numOfQuestions" :start="146"  v-if="show7" />
  </div>
  <div @click.self="handleCloseResult" v-if="showResult" class="backdrop">
    <div class="result">
      Result
      <br />
      <span class="score"> {{ getResult }} / {{ totalQuestion }}</span>

      <button @click="handleDoAgain">Do again!</button>
    </div>
  </div>
  <div class="footer">
    The End
  </div>
</template>

<script>
import Part from "./components/Part.vue";
import Part2 from "./components/Part2.vue";
import Header from "./components/Header.vue";

import mockTest from './constant/index.js';

import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    Part,
    Part2,
    Header,
  },
  computed: {
    ...mapState(["checked", "correct1","correct2","correct3","correct4","correct5","correct6","correct7", 'answer']),
    getResult() {
      let result = this.correct1.concat(this.correct2).concat(this.correct3).concat(this.correct4).concat(this.correct5).concat(this.correct6).concat(this.correct7).map(item => item.toString());
      return Array.from(new Set(this.answer)).filter(item => result.includes(item)).length;
    }
  },
  watch: {
    checked: function() {
      this.totalQuestion = 0;
      this.checked.map(item => {
        this.totalQuestion += mockTest[item].numOfQuestions
      })

      if (this.checked.includes("part1")) {
        this.show1 = true;
      } else {
        this.show1 = false;
      }

      if (this.checked.includes("part2")) {
        this.show2 = true;
      } else {
        this.show2 = false;
      }

      if (this.checked.includes("part3")) {
        this.show3 = true;
      } else {
        this.show3 = false;
      }

      if (this.checked.includes("part4")) {
        this.show4 = true;
      } else {
        this.show4 = false;
      }

      if (this.checked.includes("part5")) {
        this.show5 = true;
      } else {
        this.show5 = false;
      }

      if (this.checked.includes("part6")) {
        this.show6 = true;
      } else {
        this.show6 = false;
      }

      if (this.checked.includes("part7")) {
        this.show7 = true;
      } else {
        this.show7 = false;
      }
    },
  },
  mounted() {
    if (this.checked.includes("part1")) {
      this.show1 = true;
    }

    if (this.checked.includes("part2")) {
      this.show2 = true;
    }

    if (this.checked.includes("part3")) {
      this.show3 = true;
    }

    if (this.checked.includes("part4")) {
      this.show4 = true;
    }

    if (this.checked.includes("part5")) {
      this.show5 = true;
    }

    if (this.checked.includes("part6")) {
      this.show6 = true;
    }

    if (this.checked.includes("part7")) {
      this.show7 = true;
    }
  },
  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      show7: false,

      mockTest: mockTest,

      showResult: false,

      totalQuestion: 200,
    };
  },
  methods: {
    handleSubmit() {
      this.showResult = true;
    },
    handleCloseResult() {
      this.showResult = false;
    },
    handleDoAgain() {
      this.showResult = false;
      this.$store.commit('clearResult');
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss">
body {
  color: white;

  background: #424642;

  min-height: 100vh;
  min-width: 100vw;

  overflow-x: hidden;
}

#root {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.test {
  margin-top: 88px;

  display: flex;
  flex-direction: column;
  gap: 8px;
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;

  height: 100%;
  width: 100%;

  background: rgba(0, 0, 0, 0.5);

  z-index: 30;

  button {
    margin-top: 24px;

    padding: 12px;

    text-transform: uppercase;

    border: none;
    outline: none;
    border-radius: 16px;

    color: #364547;
    background: #ffe268;

    cursor: pointer;
  }

  .result {
    position: fixed;
    top: 64px;

    background: #fff;

    color: #000;

    width: 128px;

    padding: 32px;

    font-size: 1.5em;
    font-weight: bold;

    text-align: center;

    z-index: 999;

    .score {
      font-weight: 200;
    }
  }
}

.footer {
  text-align: center;

  margin-top: 16px;

  font-size: 32px;

  &::before {
    content: "-----";
  }

  &::after {
    content: "-----";
  }
}
</style>
