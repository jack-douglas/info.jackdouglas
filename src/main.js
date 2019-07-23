import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import VueTippy from 'vue-tippy';
Vue.use(VueTippy);

new Vue({
  render: h => h(App),
}).$mount('#app')
