<template>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to HelloBooks" />
    <SingleBook :book="featuredBook" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SingleBook from './components/SingleBook.vue'

export default {
    name: 'App',
    components: {
        HelloWorld,
        SingleBook
    },
    data() {
        return {
            featuredBook: {
                title: "The Great Gatsby",
                author: "F. Scott Fitzgerald",
                coverUrl: "/images/great-gatsby-cover.jpg",
                rating: "4.5",
                genre: "Classic Literature"
            }
        }
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
