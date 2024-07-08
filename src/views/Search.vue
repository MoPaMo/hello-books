
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
        <li v-for="book in searchResults" :key="book.key" class="p-4 border-b last:border-b-0">
          <h3 class="font-semibold">{{ book.title }}</h3>
          <p class="text-sm text-gray-600">{{ book.author_name ? book.author_name.join(', ') : 'Unknown Author' }}</p>
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

    const handleSearch = async () => {
      if (searchQuery.value.trim() === '') {
        searchResults.value = [];
        return;
      }

      isLoading.value = true;
      try {
        const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(searchQuery.value)}`);
        const data = await response.json();
        searchResults.value = data.docs.slice(0, 10);
      } catch (error) {
        console.error('Error fetching search results:', error);
        searchResults.value = [];
      } finally {
        isLoading.value = false;
      }
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