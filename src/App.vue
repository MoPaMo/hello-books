<template>
    <HelloWorld msg="Welcome to HelloBooks" />
    <SingleBook :book="featuredBook" />
    <BookList :books="books" />
    <XLCategories />
    <Bar />
</template>

<script>
import SingleBook from './components/SingleBook.vue'
import BookList from './components/list.vue'
import XLCategories from './components/XLCategories.vue'
import Bar from './components/bar.vue'
export default {
    name: 'App',
    components: {
        SingleBook,
        BookList,
        XLCategories,
        Bar

    },
    data() {
        return {
            featuredBook: {
                title: "The Great Gatsby",
                author: "F. Scott Fitzgerald",
                coverUrl: "https://m.media-amazon.com/images/I/81QuEGw8VPL._AC_UF894,1000_QL80_.jpg",
                rating: "4.5",
                genre: "Classic Literature"
            },
            books: [
                {
                    title: "The Great Gatsby",
                    author: "F. Scott Fitzgerald",
                    coverUrl: "https://m.media-amazon.com/images/I/81QuEGw8VPL._AC_UF894,1000_QL80_.jpg",
                    rating: "4.5",
                    genre: "Classic Literature"
                },
                {
                    title: "To Kill a Mockingbird",
                    author: "Harper Lee",
                    coverUrl: "https://m.media-amazon.com/images/I/81QuEGw8VPL._AC_UF894,1000_QL80_.jpg",
                    rating: "4.5",
                    genre: "Classic Literature"
                },
                {
                    title: "The Catcher in the Rye",
                    author: "J. D. Salinger",
                    coverUrl: "https://m.media-amazon.com/images/I/81QuEGw8VPL._AC_UF894,1000_QL80_.jpg",
                    rating: "4.5",
                    genre: "Classic Literature"
                }
            ]
        }
    }
}
</script>

<style></style>
