import { createStore } from 'vuex'

export default createStore({
  state: {
    checked: ['part1', 'part2', 'part3', 'part4', 'part5', 'part6', 'part7'],
    min: 120,
    correct: []
  },
  mutations: {
    checked(state, payload) {
      const value = []
      payload.map(item => {
        value.push(item.value)
      })
      state.checked = value;
    },

    getMin(state, payload) {
      state.min = payload;
    },

    getCorrect(state, payload) {
      state.correct = payload
    }
  },
  actions: {},
  modules: {},
});
