// 使用全局 Vue 对象，而不是模块导入
const { createApp } = Vue;
import App from '../App.vue'

createApp(App).mount('#app') 