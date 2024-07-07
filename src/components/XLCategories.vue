<template>
    <div class="p-4">
        <h2 class="text-xl font-bold mb-4">Categories</h2>
        <div class="grid grid-rows-2 gap-4 overflow-x-auto pb-4 grid-flow-col snap-x">
            <div v-for="(category, index) in categories" :key="index" class="w-40 h-24"
                :class="category.bgColor + ' rounded-lg flex items-center justify-center snap-start'">
                <div class="text-center">
                    <img :aria-hidden="true" :alt="category.alt" :src="category.icon" class="mx-auto mb-2" />
                    <span class="text-lg font-semibold">{{ category.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'XLCategories',
    data() {
        return {
            categories: [
                { name: 'Strategy', icon: 'https://openui.fly.dev/openui/40x40.svg?text=🧠', alt: 'strategy-icon', bgColor: 'bg-green-200' },
                { name: 'Action', icon: 'https://openui.fly.dev/openui/40x40.svg?text=💥', alt: 'action-icon', bgColor: 'bg-orange-200' },
                { name: 'Puzzle', icon: 'https://openui.fly.dev/openui/40x40.svg?text=🧩', alt: 'puzzle-icon', bgColor: 'bg-blue-200' },
                { name: 'Card', icon: 'https://openui.fly.dev/openui/40x40.svg?text=🃏', alt: 'card-icon', bgColor: 'bg-red-200' },
                { name: 'RPG', icon: 'https://openui.fly.dev/openui/40x40.svg?text=🎭', alt: 'rpg-icon', bgColor: 'bg-purple-200' },
                { name: 'Simulation', icon: 'https://openui.fly.dev/openui/40x40.svg?text=🌍', alt: 'simulation-icon', bgColor: 'bg-yellow-200' }
            ]
        };
    }
};
</script>

<style scoped></style>
