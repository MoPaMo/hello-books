<template>
    <div
        class="fixed bottom-0 left-0 right-0 bg-white dark:bg-zinc-800 border-t dark:border-zinc-700 flex justify-around py-2">
        <button class="flex flex-col items-center">
            <img src="https://placehold.co/24x24" alt="Today" />
            <span class="text-xs">Today</span>
        </button>
        <button class="flex flex-col items-center text-blue-500 dark:text-blue-400">
            <img src="https://placehold.co/24x24?text=✨" alt="Fiction" />
            <span class="text-xs">Fiction</span>
        </button>
        <button class="flex flex-col items-center">
            <img src="https://placehold.co/24x24" alt="Non-Fictio" />
            <span class="text-xs">Non-Fiction</span>
        </button>
        <button class="flex flex-col items-center">
            <img src="https://placehold.co/24x24" alt="Classics" />
            <span class="text-xs">Classics</span>
        </button>
        <button class="flex flex-col items-center">
            <img src="https://placehold.co/24x24" alt="Search" />
            <span class="text-xs">Search</span>
        </button>
    </div>
</template>

<script>
export default {
    name: 'Bar'
}
</script>

<style scoped></style>