<template>
  <section>
    <h2>All products</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        <h3>{{ product.title }}</h3>
        <h4>${{ product.price }}</h4>
        <p>{{ product.description }}</p>
        <router-link :to="'/products/' + product.id">View Details</router-link>
      </li>
    </ul>
  </section>
</template>

<script>
import { inject } from 'vue';

export default {
  setup() {
    const loadedProducts = inject('products');

    return { products: loadedProducts };
  },
};
</script>

<style scoped>
section {
  max-width: 40rem;
  margin: 3rem auto;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid #ccc;
}

h3,
h4 {
  margin: 0.5rem 0;
}
</style>
