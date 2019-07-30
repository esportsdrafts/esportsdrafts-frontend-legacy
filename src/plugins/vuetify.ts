import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: 'ffc857',
        secondary: 'ffe0b5',
        accent: '2e4052',
      },
    },
  },
});
