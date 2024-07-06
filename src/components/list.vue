<template>
    <div class="bg-background text-foreground p-4 rounded-lg max-w-md mx-auto">
        <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-bold">Must-Read Books</h2>
            <a href="#" class="text-primary hover:underline">See All</a>
        </div>
        <div class="space-y-4">
            <Listitem v-for="book in books" :key="book.title" :book="book" />
        </div>
    </div>
</template>

<script>
import Listitem from '../../public/listitem.vue';

export default {
    name: 'BookList',
    props: {
        books: {
            type: Object,
            required: true
        }
    },
    components: {
        Listitem
    }
}
</script>

<style scoped></style>
