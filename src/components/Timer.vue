<template lang="">
  <div class="wrapper">
    <div class="button-area">
      <i @click="handleStartTimer" class="fas fa-play"></i>
      <i @click="handleStopTimer" class="fas fa-stop"></i>
    </div>
    <div class="timer">
      <span class="hour">{{ hour }}</span>
      :
      <span class="minute">{{ minute }}</span>
      :
      <span class="second">{{ second }}</span>
    </div>
    <i @click="handleResetTimer" class="fas fa-undo-alt"></i>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      hour: "02",
      minute: "00",
      second: "00",
      timer: null,
    };
  },
  computed: {
    ...mapState(["min"]),
  },
  watch: {
    min: function() {
      clearInterval(this.timer)
      if (this.min === 120) {
        this.hour = "02";
        this.minute = '00';
        this.second = '00';
      }

      if (this.min === 75) {
        this.hour = "01";
        this.minute = "15";
        this.second = '00';
      }

      if (this.min === 45) {
        this.hour = "00";
        this.minute = "45";
        this.second = '00'
      }
    },
  },
  methods: {
    handleTimer() {
      let hh = parseInt(this.hour);
      let mm = parseInt(this.minute);
      let ss = parseInt(this.second);

      if (hh === 0 && mm === 0 && ss === 0) {
        alert("Time's up!");
        clearInterval(this.timer);
        return;
      }

      if (mm === 0 && hh === 0) {
        ss--;
        if (ss < 10) {
          ss = "0" + ss;
        }
        this.second = ss;
        return;
      }

      if (mm === 0) {
        mm = 60;
        hh--;
      }

      if (ss === 0) {
        ss = 60;
        mm--;
      }

      ss--;

      if (ss < 10) {
        ss = "0" + ss;
      }

      if (mm < 10) {
        mm = "0" + mm;
      }

      if (hh < 10) {
        hh = "0" + hh;
      }

      this.minute = mm;
      this.second = ss;
      this.hour = hh;
    },
    handleStartTimer() {
      this.timer = setInterval(() => {
        this.handleTimer();
      }, 1000);
    },
    handleStopTimer() {
      clearInterval(this.timer);
    },
    handleResetTimer() {
      this.hour = "02";
      this.minute = "00";
      this.second = "00";
    },
  },
};
</script>
<style lang="scss">
.wrapper {
  display: flex;
  justify-content: space-between;
  gap: 4px;

  background: #fff;

  .button-area {
    display: flex;
    flex-direction: column;
    gap: 2px;

    .fa-play {
      color: blue;

      padding: 2px 2px 2px 4px;

      cursor: pointer;
    }

    .fa-stop {
      color: red;

      padding: 2px 2px 2px 4px;

      cursor: pointer;
    }
  }

  .fa-undo-alt {
    color: black;

    padding: 2px 8px 2px 4px;

    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .timer {
    color: #fff;

    background: #364547;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 2px;
  }
}
</style>
