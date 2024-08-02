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
import axios from 'axios';
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
      books: []
    };
  },
  created() {
    this.fetchNonfictionBooks();
  },
  methods: {
    async fetchNonfictionBooks() {
      try {
        const response = await axios.get('https://openlibrary.org/subjects/nonfiction.json?limit=10');
        this.books = response.data.works.map(book => ({
          id: book.key.split("/").pop(),
          title: book.title,
          author: book.authors ? book.authors[0].name : 'Unknown Author'
        }));
      } catch (error) {
        console.error('Error fetching nonfiction books:', error);
      }
    }
  }
};
</script>

<style scoped>
</style>