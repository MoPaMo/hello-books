<template>
    <div
        class="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8 text-center">
            <div class="bg-white rounded-3xl shadow-xl overflow-hidden p-10">
                <h1 class="text-6xl font-bold text-gray-900 mb-4">404</h1>
                <h2 class="text-3xl font-semibold text-gray-800 mb-6">Page Not Found</h2>
                <p class="text-gray-600 mb-8">The page you are looking for does not exist.</p>
                <a href="/"
                    class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
                    Go Home
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NotFound'
};
</script>