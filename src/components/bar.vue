<template>
    <div
        class="fixed bottom-0 left-0 right-0 bg-white dark:bg-zinc-800 border-t dark:border-zinc-700 flex justify-around py-2">
        <router-link v-for="(item, index) in items" :key="index" :to="item.route" custom v-slot="{ navigate }">
            <button @click="setHighlight(index, navigate)" class="flex flex-col items-center" :class="{
            'text-blue-500 dark:text-blue-400': highlightedIndex === index,
        }">
                <img :src="item.imgSrc" :alt="item.text" />
                <span class="text-xs">{{ item.text }}</span>
            </button>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'Bar',
    data() {
        return {
            highlightedIndex: 0,
            items: [
                
                { text: 'Fiction', imgSrc: 'https://placehold.co/24x24?text=✨', route: '/fiction' },
                { text: 'Non-Fiction', imgSrc: 'https://placehold.co/24x24', route: '/non-fiction' },
                { text: 'Classics', imgSrc: 'https://placehold.co/24x24', route: '/book' },
                { text: 'Search', imgSrc: 'https://placehold.co/24x24', route: '/search' },
            ],
        }
    },
    methods: {
        setHighlight(index, navigate) {
            this.highlightedIndex = index
            navigate()
        },
    },
    mounted() {
        this.setInitialHighlight()
    },
    watch: {
        $route() {
            this.setInitialHighlight()
        },
    },
    methods: {
        setHighlight(index, navigate) {
            this.highlightedIndex = index
            navigate()
        },
        setInitialHighlight() {
            const currentRoute = this.$route.path
            const index = this.items.findIndex((item) => item.route === currentRoute)
            if (index !== -1) {
                this.highlightedIndex = index
            }
        },
    },
}
</script>

<style scoped></style>