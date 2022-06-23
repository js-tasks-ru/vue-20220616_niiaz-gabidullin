import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение

// const App = defineComponent({
//     data(){
//         return{
//             counter: 0
//         }
//     }
// });
// createApp(App);

const app = createApp({
  data() {
    return {
      counter: 0,
    };
  },
});

app.mount('#app');
