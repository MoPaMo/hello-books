<template>
    <div class="flex flex-col min-h-screen bg-gray-100">
        <header class="bg-white shadow-md py-4 px-6">
            <h1 class="text-xl font-semibold text-gray-900">Fiction Books</h1>
        </header>

        <main class="flex-1 p-4">
            <XLCategories />

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
    name: 'FictionView',
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
        this.fetchFictionBooks();
    },
    methods: {
        async fetchFictionBooks() {
            try {
                const response = await axios.get('https://openlibrary.org/subjects/fiction.json?limit=10');
                this.books = response.data.works.map(work => ({
                    id: work.cover_edition_key,
                    title: work.title,
                    author: work.authors.map(author => author.name).join(', ')
                }));
            } catch (error) {
                console.error('Error fetching fiction books:', error);
            }
        }
    }
};
</script>

<style scoped></style>