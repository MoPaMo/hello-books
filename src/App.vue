<template>

    <router-view></router-view>
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
