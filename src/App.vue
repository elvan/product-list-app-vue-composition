<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import { provide, ref } from 'vue';

import TheHeader from './components/TheHeader.vue';

export default {
  components: {
    TheHeader,
  },
  setup() {
    const products = ref([
      {
        id: 'p1',
        title: 'A Carpet',
        description: 'A nice looking, maybe a little bit used carpet.',
        price: 15.99,
      },
      {
        id: 'p2',
        title: 'A Book',
        description: 'You can read it. Maybe you should read it.',
        price: 12.99,
      },
    ]);

    function addProduct(productData) {
      const newProduct = {
        id: new Date().toISOString(),
        title: productData.title,
        description: productData.description,
        price: productData.price,
      };
      products.value.push(newProduct);
    }

    provide('products', products);
    provide('addProduct', addProduct);
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  max-width: 30rem;
  margin: 3rem auto;
  padding: 1rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>
