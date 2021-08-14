require('./bootstrap');

import Vue from 'vue'
import vuetify from './plugins/vuetify'
import { createInertiaApp } from '@inertiajs/inertia-vue'

createInertiaApp({
    resolve: name => require(`./Pages/${name}`),
    setup({ el, App, props }) {
        new Vue({
            vuetify,
            render: h => h(App, props),
        }).$mount(el)

        Vue.use(Vuetify)
    },
})
