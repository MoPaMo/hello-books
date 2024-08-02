<template>
    <div class="bg-white">
        <div class="pt-6">
            <NavBreadcrumb :breadcrumbs="breadcrumbs" />
            <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                <div v-for="(image, index) in images" :key="index" :class="image.class">
                    <img :src="image.src" :alt="image.alt" class="h-full w-full object-cover object-center">
                </div>
            </div>
            <div class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                    <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{{ bookTitle }}</h1>
                </div>

                <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                    <div>
                        <h3 class="sr-only">Description</h3>
                        <div class="space-y-6">
                            <p class="text-base text-gray-900">{{ description }}</p>
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
import NavBreadcrumb from './breadcrumb.vue';

export default {
    name: 'BookPage',
    components: { NavBreadcrumb },
    data() {
        return {
            breadcrumbs: [],
            images: [],
            bookTitle: '',
            description: '',
            highlights: [],
            author: '',
            publisher: '',
            publicationDate: '',
            pages: '',
            isbn: ''
        }
    },
    created() {
        this.fetchBookData();
    },
    methods: {
        async fetchBookData() {
            const openlibraryKey = this.$route.params.openlibraryKey;
            try {
                const response = await fetch(`https://openlibrary.org/works/${openlibraryKey}.json`);
                const data = await response.json();
                console.log(data); // Log the fetched data to inspect its structure
                this.updateBookData(data);
            } catch (error) {
                console.error('Error fetching book data:', error);
            }
        },
        async fetchAuthorData(authorKey) {
            try {
                const response = await fetch(`https://openlibrary.org${authorKey}.json`);
                const data = await response.json();
                return data.name || '';
            } catch (error) {
                console.error('Error fetching author data:', error);
                return '';
            }
        },
        async updateBookData(data) {
            this.breadcrumbs = [
                { text: 'Home', href: '/', current: false },
                { text: 'Books', href: '/books', current: false },
                { text: data.title, href: '#', current: true }
            ];
            this.bookTitle = data.title || 'Unknown Title';
            this.description = data.description ? data.description.value || data.description : 'No description available';

            if (data.authors && data.authors.length > 0) {
                const authorData = await this.fetchAuthorData(data.authors[0].author.key);
                this.author = authorData;
            } else {
                this.author = 'Unknown Author';
            }

            this.publisher = data.publishers ? data.publishers[0] : 'Unknown Publisher';
            this.publicationDate = data.created ? new Date(data.created.value).toLocaleDateString() : 'Unknown Publication Date';
            this.pages = data.number_of_pages || 'Unknown Page Count';
            this.isbn = data.isbn_13 ? data.isbn_13[0] : data.isbn_10 ? data.isbn_10[0] : 'No ISBN available';
            this.images = data.covers ? data.covers.map(cover => ({
                src: `https://covers.openlibrary.org/b/id/${cover}-L.jpg`,
                alt: `Cover image of ${data.title}`,
                class: 'aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block'
            })) : [];
            this.highlights = data.subjects ? data.subjects.map(subject => subject.name) : [];
        }
    }
}
</script>

<style scoped>
</style>