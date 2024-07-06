<template>
    <div class="flex items-center justify-between bg-card p-2 rounded-lg">
        <div class="flex items-center space-x-4">
            <img src="https://placehold.co/50x50" alt="Book cover for '{{book.title}}'" class="w-12 h-12 rounded-md" />
            <div>
                <h3 class="text-lg font-semibold">{{ book.title }}</h3>
                <p class="text-muted-foreground">{{ book.author }}</p>
            </div>
        </div>
        <button class="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/80">Read</button>
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