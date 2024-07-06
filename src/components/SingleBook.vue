<template>

    <div class="bg-card p-4 rounded-lg shadow-md max-w-md mx-auto">
        <h2 class="text-primary text-sm font-semibold mb-1">WHAT TO READ</h2>
        <h1 class="text-foreground text-2xl font-bold">{{ book.title }}</h1>
        <h3 class="text-muted-foreground text-lg mb-4">{{ book.author }}</h3>
        <img class="w-full h-48 object-cover rounded-lg mb-4" :src="book.coverUrl" :alt="book.title" />
        <div class="flex items-center justify-between">
            <div>
                <p class="text-card-foreground font-semibold">{{ book.title }}: A Classic Novel</p>
                <p class="text-muted-foreground text-sm">{{ book.genre }}</p>
            </div>
            <button class="bg-primary text-primary-foreground py-2 px-4 rounded-lg">Get</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BookItem',
    props: {
        book: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped></style>