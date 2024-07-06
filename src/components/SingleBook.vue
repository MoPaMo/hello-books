<template>
    <div class="book-item">
        <div class="what-to-read">WHAT TO READ</div>
        <h2 class="book-title">{{ book.title }}</h2>
        <h3 class="book-author">{{ book.author }}</h3>
        <div class="book-cover">
            <img :src="book.coverUrl" :alt="book.title">
            <div class="book-rating">
                {{ book.rating }}
                <span class="rating-label">Rating</span>
            </div>
        </div>
        <div class="book-info">
            <span class="book-genre">{{ book.genre }}</span>
            <button class="get-button">Get</button>
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

<style scoped>
.book-item {
    background-color: #1e1e1e;
    color: white;
    padding: 20px;
    border-radius: 10px;
}

.what-to-read {
    color: #3a8eff;
    font-size: 0.8em;
    margin-bottom: 10px;
}

.book-title {
    font-size: 1.8em;
    margin: 5px 0;
}

.book-author {
    font-size: 1.2em;
    color: #a0a0a0;
    margin: 5px 0 15px 0;
}

.book-cover {
    position: relative;
    margin-bottom: 15px;
}

.book-cover img {
    width: 100%;
    border-radius: 5px;
}

.book-rating {
    position: absolute;
    bottom: 10px;
    left: 10px;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 5px 10px;
    border-radius: 15px;
    font-size: 1.2em;
}

.rating-label {
    font-size: 0.7em;
    display: block;
}

.book-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.book-genre {
    font-size: 0.9em;
}

.get-button {
    background-color: #3a8eff;
    color: white;
    border: none;
    padding: 8px 20px;
    border-radius: 20px;
    font-size: 1em;
    cursor: pointer;
}
</style>