import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import VueSimpleContextMenu from 'vue-simple-context-menu'

require('vue-simple-context-menu/dist/vue-simple-context-menu.css')
import 'bootstrap/dist/css/bootstrap.css'

import VueAwesomePaginate from 'vue-awesome-paginate'
import 'vue-awesome-paginate/dist/style.css'

import Notifications from '@kyvg/vue3-notification'
import VueTippy from "vue-tippy"

createApp(App)
    .use(router)
    .component('vue-simple-context-menu', VueSimpleContextMenu)
    .use(VueAwesomePaginate)
    .use(Notifications)
    .use(VueTippy, {
        defaultProps: {
            placement: 'left',
            delay: [0, 0],
            duration: [0, 0],
            allowHTML: true
        }
    })
    .mount('#app')
