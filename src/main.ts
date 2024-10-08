import { createApp } from 'vue'
import router from './router';
import Antd from "ant-design-vue";
import 'ant-design-vue/dist/reset.css';
import App from './App.vue'
import './style/index.less';

createApp(App).use(router).use(Antd).mount('#app')
