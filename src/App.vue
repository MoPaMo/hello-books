<template>

    <router-view></router-view>
    <br>
    <br>
    <Bar />
</template>

<script>

import Bar from './components/bar.vue'
export default {
    name: 'App',
    components: {
        Bar
    },


}
</script>

<style></style>
