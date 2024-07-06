<template>
    <HelloWorld msg="Welcome to HelloBooks" />
    <SingleBook :book="featuredBook" />
</template>

<script>
import SingleBook from './components/SingleBook.vue'

export default {
    name: 'App',
    components: {
        SingleBook
    },
    data() {
        return {
            featuredBook: {
                title: "The Great Gatsby",
                author: "F. Scott Fitzgerald",
                coverUrl: "https://m.media-amazon.com/images/I/81QuEGw8VPL._AC_UF894,1000_QL80_.jpg",
                rating: "4.5",
                genre: "Classic Literature"
            }
        }
    }
}
</script>

<style></style>
