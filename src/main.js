import {createApp} from 'vue'
import App from './app.vue'
import './index.less'
import {createI18n} from "vue-i18n"
import {Lazyload} from "vant"
import router from "./router/router"
import axios from "axios"
import {classified} from "./classified"
import zh from "./locales/zh.json"
import en from "./locales/en.json"

const i18n = createI18n({
    locale: "zh",
    messages: {zh, en}
})


const app = createApp(App)

axios.defaults.baseURL = classified.backendAddress
app.provide("axios", axios)

app.config.globalProperties.$changeLanguage = () => {
    console.log("switch")
    i18n.global.locale = i18n.global.locale === "zh" ? "en" : "zh";
};
app.config.globalProperties.locales = i18n.global;

// 使用懒加载
app.use(Lazyload)
// 挂载路由模块
app.use(router)
app.use(i18n)

app.mount('#app')
