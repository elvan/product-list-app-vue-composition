import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import AddProduct from './pages/AddProduct.vue';
import AllProducts from './pages/AllProducts.vue';
import ProductDetails from './pages/ProductDetails.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/products' },
    { path: '/products', component: AllProducts },
    { path: '/products/:pid', component: ProductDetails },
    { path: '/products/add', component: AddProduct },
  ],
});

const app = createApp(App);

app.use(router);

app.mount('#app');
