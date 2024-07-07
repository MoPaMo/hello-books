<template>
    <div
        class="fixed bottom-0 left-0 right-0 bg-white dark:bg-zinc-800 border-t dark:border-zinc-700 flex justify-around py-2">
        <button v-for="(item, index) in items" :key="index" @click="setHighlight(index)"
            class="flex flex-col items-center"
            :class="{ 'text-blue-500 dark:text-blue-400': highlightedIndex === index }">
            <img :src="item.imgSrc" :alt="item.text" />
            <span class="text-xs">{{ item.text }}</span>
        </button>
    </div>
</template>

<script>
export default {
    name: 'Bar',
    data() {
        return {
            highlightedIndex: 1,
            items: [
                { text: 'Today', imgSrc: 'https://placehold.co/24x24' },
                { text: 'Fiction', imgSrc: 'https://placehold.co/24x24?text=✨' },
                { text: 'Non-Fiction', imgSrc: 'https://placehold.co/24x24' },
                { text: 'Classics', imgSrc: 'https://placehold.co/24x24' },
                { text: 'Search', imgSrc: 'https://placehold.co/24x24' },
            ],
        }
    },
    methods: {
        setHighlight(index) {
            this.highlightedIndex = index
        },
    },
}
</script>

<style scoped></style>