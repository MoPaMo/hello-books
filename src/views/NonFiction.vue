<template>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <header class="bg-white shadow-md py-4 px-6">
      <h1 class="text-xl font-semibold text-gray-900">Nonfiction Books</h1>
    </header>
    <main class="flex-1 p-4">
      <XLCategories :category="'Nonfiction'" />
      <div class="mt-6">
        <list :books="books" />
      </div>
    </main>
  </div>
</template>

<script>
import XLCategories from '@/components/XLCategories.vue';
import list from '@/components/list.vue';

export default {
  name: 'NonFictionView',
  components: {
    XLCategories,
    list
  },
  data() {
    return {
      books: [
        { id: 1, title: 'Sapiens: A Brief History of Humankind', author: 'Yuval Noah Harari' },
        { id: 2, title: 'Educated', author: 'Tara Westover' },
        { id: 3, title: 'The Immortal Life of Henrietta Lacks', author: 'Rebecca Skloot' }
      ]
    };
  }
};
</script>

<style scoped>
</style>