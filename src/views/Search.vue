<template>
  <div class="min-h-screen bg-gray-100 p-4">
    <div class="mb-4">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search books..."
        class="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        @input="handleSearch"
      >
    </div>

    <div v-if="searchResults.length > 0">
      <h2 class="text-lg font-semibold mb-2">Search Results</h2>
      <ul class="bg-white rounded-lg shadow">
        <li v-for="book in searchResults" :key="book.id" class="p-4 border-b last:border-b-0">
          <h3 class="font-semibold">{{ book.title }}</h3>
          <p class="text-sm text-gray-600">{{ book.author }}</p>
        </li>
      </ul>
    </div>

    <div v-else-if="searchQuery && !isLoading" class="text-center text-gray-600 mt-8">
      No results found for "{{ searchQuery }}"
    </div>

    <div v-if="isLoading" class="text-center mt-8">
      <div class="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'SearchPage',
  setup() {
    const searchQuery = ref('');
    const searchResults = ref([]);
    const isLoading = ref(false);

    const handleSearch = () => {
      isLoading.value = true;
      setTimeout(() => {
        searchResults.value = [
          { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
          { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
          { id: 3, title: '1984', author: 'George Orwell' },
        ].filter(book => 
          book.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
          book.author.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
        isLoading.value = false;
      }, 500);
    };

    return {
      searchQuery,
      searchResults,
      isLoading,
      handleSearch,
    };
  },
};
</script>