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
            books: [
                // sample book data
                { id: 1, title: '1984', author: 'George Orwell' },
                { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
                { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
            ]
        };
    }
};
</script>

<style scoped></style>