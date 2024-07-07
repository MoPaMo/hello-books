<template>

    <router-view></router-view>
    <Bar />
</template>

<script>

import Bar from './components/bar.vue'
export default {
    name: 'App',
    components: {
        SingleBook,
        BookList,
        XLCategories,
        Bar,
        BookPage


    },


}
</script>

<style></style>
