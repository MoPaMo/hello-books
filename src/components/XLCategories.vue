<template>
    <div class="p-4">
        <h2 class="text-xl font-bold mb-4">Categories</h2>
        <div class="grid grid-rows-2 gap-4 overflow-x-auto pb-4 grid-flow-col snap-x">
            <div class="w-40 h-24 bg-green-200 rounded-lg flex items-center justify-center snap-start">
                <div class="text-center">
                    <img aria-hidden="true" alt="strategy-icon" src="https://openui.fly.dev/openui/40x40.svg?text=🧠"
                        class="mx-auto mb-2" />
                    <span class="text-lg font-semibold">Strategy</span>
                </div>
            </div>
            <div class="w-40 h-24 bg-orange-200 rounded-lg flex items-center justify-center snap-start">
                <div class="text-center">
                    <img aria-hidden="true" alt="action-icon" src="https://openui.fly.dev/openui/40x40.svg?text=💥"
                        class="mx-auto mb-2" />
                    <span class="text-lg font-semibold">Action</span>
                </div>
            </div>
            <div class="w-40 h-24 bg-blue-200 rounded-lg flex items-center justify-center snap-start">
                <div class="text-center">
                    <img aria-hidden="true" alt="puzzle-icon" src="https://openui.fly.dev/openui/40x40.svg?text=🧩"
                        class="mx-auto mb-2" />
                    <span class="text-lg font-semibold">Puzzle</span>
                </div>
            </div>
            <div class="w-40 h-24 bg-red-200 rounded-lg flex items-center justify-center snap-start">
                <div class="text-center">
                    <img aria-hidden="true" alt="card-icon" src="https://openui.fly.dev/openui/40x40.svg?text=🃏"
                        class="mx-auto mb-2" />
                    <span class="text-lg font-semibold">Card</span>
                </div>
            </div>
            <div class="w-40 h-24 bg-purple-200 rounded-lg flex items-center justify-center snap-start">
                <div class="text-center">
                    <img aria-hidden="true" alt="rpg-icon" src="https://openui.fly.dev/openui/40x40.svg?text=🎭"
                        class="mx-auto mb-2" />
                    <span class="text-lg font-semibold">RPG</span>
                </div>
            </div>
            <div class="w-40 h-24 bg-yellow-200 rounded-lg flex items-center justify-center snap-start">
                <div class="text-center">
                    <img aria-hidden="true" alt="simulation-icon" src="https://openui.fly.dev/openui/40x40.svg?text=🌍"
                        class="mx-auto mb-2" />
                    <span class="text-lg font-semibold">Simulation</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'XLCategories',
    props: {
        books: {
            type: Object,
            required: true
        }
    },
    components: {
    }
}
</script>

<style scoped></style>
