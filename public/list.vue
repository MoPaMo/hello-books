<template>
    <div class="bg-background text-foreground p-4 rounded-lg max-w-md mx-auto">
        <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-bold">Must-Read Books</h2>
            <a href="#" class="text-primary hover:underline">See All</a>
        </div>
        <div class="space-y-4">
            <div class="flex items-center justify-between bg-card p-2 rounded-lg">
                <div class="flex items-center space-x-4">
                    <img src="https://placehold.co/50x50" alt="Book cover for 'The Great Gatsby'"
                        class="w-12 h-12 rounded-md" />
                    <div>
                        <h3 class="text-lg font-semibold">The Great Gatsby</h3>
                        <p class="text-muted-foreground">F. Scott Fitzgerald</p>
                    </div>
                </div>
                <button
                    class="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/80">Read</button>
            </div>
            <div class="flex items-center justify-between bg-card p-2 rounded-lg">
                <div class="flex items-center space-x-4">
                    <img src="https://placehold.co/50x50" alt="Book cover for 'To Kill a Mockingbird'"
                        class="w-12 h-12 rounded-md" />
                    <div>
                        <h3 class="text-lg font-semibold">To Kill a Mockingbird</h3>
                        <p class="text-muted-foreground">Harper Lee</p>
                    </div>
                </div>
                <button
                    class="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/80">Read</button>
            </div>
            <div class="flex items-center justify-between bg-card p-2 rounded-lg">
                <div class="flex items-center space-x-4">
                    <img src="https://placehold.co/50x50" alt="Book cover for 'Pride and Prejudice'"
                        class="w-12 h-12 rounded-md" />
                    <div>
                        <h3 class="text-lg font-semibold">Pride and Prejudice</h3>
                        <p class="text-muted-foreground">Jane Austen</p>
                    </div>
                </div>
                <button
                    class="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/80">Read</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
