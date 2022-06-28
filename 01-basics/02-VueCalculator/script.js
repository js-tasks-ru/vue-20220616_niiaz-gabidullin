import { result } from 'lodash';
import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение

const app = createApp({
  data() {
    return {
      number1: 0,
      number2: 1,
      operation: 'sum',
    };
  },

  //   watch: {
  //     operation() {
  //       this.saveResult();
  //     },
  //     number1() {
  //       this.saveResult();
  //     },
  //     number2() {
  //       this.saveResult();
  //     },
  //   },

  // saveResult() {
  //   this.result = this.returnResult();
  // },

  computed: {
    result() {
      if (this.operation === 'sum') {
        return this.number1 + this.number2;
      } else if (this.operation === 'subtract') {
        return this.number1 - this.number2;
      } else if (this.operation === 'multiply') {
        return this.number1 * this.number2;
      } else if (this.operation === 'divide') {
        return this.number1 / this.number2;
      } else return undefined;
    },
  },
});

app.mount('#app');
