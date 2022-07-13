import Vue from 'vue'
import App from './App.vue'
import router from './router'
import moment from 'moment'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faHouse)
library.add(faPlus)
library.add(faTrashCan)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.prototype.moment = moment;
new Vue({

  router,
  render: h => h(App),

}).$mount('#app')