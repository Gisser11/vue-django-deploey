import Vue from 'vue'
import App from './App.vue'
import "tailwindcss/tailwind.css"
import components from '@/components/UI'
import router from "@/router";
import vuetify from './plugins/vuetify'
import store from "@/store/store";
Vue.config.productionTip = false

components.forEach(component => Vue.component(component.name, component))

new Vue({
    store,
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')
