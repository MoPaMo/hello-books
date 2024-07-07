<template>
    <div class="bg-white">
        <div class="pt-6">
            <nav aria-label="Breadcrumb">
                <ol role="list" class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <li v-for="(crumb, index) in breadcrumbs" :key="index">
                        <div class="flex items-center">
                            <a :href="crumb.href"
                                :class="crumb.current ? 'font-medium text-gray-500 hover:text-gray-600' : 'mr-2 text-sm font-medium text-gray-900'">{{
                        crumb.text }}</a>
                            <svg v-if="!crumb.current" width="16" height="20" viewBox="0 0 16 20" fill="currentColor"
                                aria-hidden="true" class="h-5 w-4 text-gray-300">
                                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                            </svg>
                        </div>
                    </li>
                </ol>
            </nav>
            <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                <div v-for="(image, index) in images" :key="index" :class="image.class">
                    <img :src="image.src" :alt="image.alt" class="h-full w-full object-cover object-center">
                </div>
            </div>
            <div
                class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                    <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{{ bookTitle }}</h1>
                </div>

                <div class="mt-4 lg:row-span-3 lg:mt-0">
                    <h2 class="sr-only">Book information</h2>
                    <p class="text-3xl tracking-tight text-gray-900">{{ price }}</p>

                    <div class="mt-6">
                        <h3 class="sr-only">Reviews</h3>
                        <div class="flex items-center">
                            <div class="flex items-center">
                                <svg v-for="n in 5" :key="n" class="h-5 w-5 flex-shrink-0"
                                    :class="n <= rating ? 'text-gray-900' : 'text-gray-200'" viewBox="0 0 20 20"
                                    fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <p class="sr-only">{{ rating }} out of 5 stars</p>
                            <a href="#" class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">{{
                        reviewCount }} reviews</a>
                        </div>
                    </div>

                    <form class="mt-10">
                        <div>
                            <h3 class="text-sm font-medium text-gray-900">Format</h3>
                            <fieldset aria-label="Choose a format" class="mt-4">
                                <div class="flex items-center space-x-3">
                                    <label v-for="format in formats" :key="format"
                                        class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-400 focus:outline-none">
                                        <input type="radio" name="format-choice" :value="format" class="sr-only"
                                            v-model="selectedFormat">
                                        <span class="text-sm font-medium text-gray-900">{{ format }}</span>
                                    </label>
                                </div>
                            </fieldset>
                        </div>

                        <div class="mt-10">
                            <h3 class="text-sm font-medium text-gray-900 mb-4">Reading Status</h3>
                            <div class="flex flex-wrap gap-2 mb-6">
                                <button v-for="status in readingStatuses" :key="status" type="button"
                                    class="flex-1 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                    {{ status }}
                                </button>
                            </div>

                            <div class="flex items-center">
                                <button type="button"
                                    class="flex-grow rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                    Add to Cart
                                </button>
                                <button type="button"
                                    class="ml-3 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                    <span class="sr-only">Open options</span>
                                    <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path
                                            d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                    <div>
                        <h3 class="sr-only">Description</h3>
                        <div class="space-y-6">
                            <p class="text-base text-gray-900">{{ description }}</p>
                        </div>
                    </div>

                    <div class="mt-10">
                        <h3 class="text-sm font-medium text-gray-900">Highlights</h3>
                        <div class="mt-4">
                            <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
                                <li v-for="highlight in highlights" :key="highlight" class="text-gray-400"><span
                                        class="text-gray-600">{{ highlight }}</span></li>
                            </ul>
                        </div>
                    </div>

                    <div class="mt-10">
                        <h2 class="text-sm font-medium text-gray-900">Details</h2>
                        <div class="mt-4 space-y-6">
                            <p class="text-sm text-gray-600">
                                Author: {{ author }}<br>
                                Publisher: {{ publisher }}<br>
                                Publication Date: {{ publicationDate }}<br>
                                Pages: {{ pages }}<br>
                                ISBN: {{ isbn }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            breadcrumbs: [
                { text: 'Fiction', href: '#', current: false },
                { text: 'Mystery', href: '#', current: false },
                { text: 'The Silent Patient', href: '#', current: true }
            ],
            images: [
                { src: 'https://example.com/book-cover-main.jpg', alt: 'Front cover of The Silent Patient.', class: 'aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block' },
                { src: 'https://example.com/book-cover-back.jpg', alt: 'Back cover of The Silent Patient.', class: 'hidden lg:grid lg:grid-cols-1 lg:gap-y-8 aspect-h-2 aspect-w-3 overflow-hidden rounded-lg' },
                { src: 'https://example.com/author-photo.jpg', alt: 'Author photo of Alex Michaelides.', class: 'hidden lg:grid lg:grid-cols-1 lg:gap-y-8 aspect-h-2 aspect-w-3 overflow-hidden rounded-lg' },
                { src: 'https://example.com/book-preview.jpg', alt: 'Preview of first pages of The Silent Patient.', class: 'aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg' }
            ],
            bookTitle: 'The Silent Patient',
            price: '$24.99',
            rating: 4.5,
            reviewCount: '1,248',
            formats: ['Hardcover', 'Paperback', 'eBook'],
            selectedFormat: 'Hardcover',
            readingStatuses: ['Want to Read', 'Currently Reading', 'Read'],
            description: "Alicia Berenson's life is seemingly perfect. A famous painter married to an in-demand fashion photographer, she lives in a grand house with big windows overlooking a park in one of London's most desirable areas. One evening her husband Gabriel returns home late from a fashion shoot, and Alicia shoots him five times in the face, and then never speaks another word.",
            highlights: [
                '#1 New York Times Bestseller',
                'USA Today Bestseller',
                'The Globe and Mail Bestseller',
                'Over 2 million copies sold worldwide'
            ],
            author: 'Alex Michaelides',
            publisher: 'Celadon Books',
            publicationDate: 'February 5, 2019',
            pages: 336,
            isbn: '978-1250301697'
        }
    }
}
</script>