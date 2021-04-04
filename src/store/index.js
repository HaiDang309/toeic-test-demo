import { createStore } from 'vuex'

export default createStore({
  state: {
    checked: ["part1", "part2", "part3", "part4", "part5", "part6", "part7"],
    min: 120,
    correct1: [],
    correct2: [],
    correct3: [],
    correct4: [],
    correct5: [],
    correct6: [],
    correct7: [],
    shouldClear: false,
    answer: []
  },
  mutations: {
    checked(state, payload) {
      const value = [];
      payload.map((item) => {
        value.push(item.value);
      });
      state.checked = value;
    },

    getMin(state, payload) {
      state.min = payload;
    },

    getCorrect1(state, payload) {
      state.correct1 = payload;
    },
    getCorrect2(state, payload) {
      state.correct2 = payload;
    },
    getCorrect3(state, payload) {
      state.correct3 = payload;
    },
    getCorrect4(state, payload) {
      state.correct4 = payload;
    },
    getCorrect5(state, payload) {
      state.correct5 = payload;
    },
    getCorrect6(state, payload) {
      state.correct6 = payload;
    },
    getCorrect7(state, payload) {
      state.correct7 = payload;
    },
    getAnswer(state, payload) {
      state.answer = (state.answer.concat(payload))

    },
    clearResult(state) {
      state.shouldClear = !state.shouldClear;
    }
  },
  actions: {},
  modules: {},
});
