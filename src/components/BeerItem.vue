<template>
    <li class="beer">
        <div class="beer__text">
            <h3>{{ beer.name }}</h3>
            <p>{{ beer.style }}</p>
            <ul class="beer__characteristics">
                <li>
                    Бренд: {{ beer.brand }}
                </li>
                <li>
                    Алкоголь: {{ beer.alcohol }}
                </li>
                <li>
                    Экстракт: {{ beer.blg }}
                </li>
                <li>
                    Хмель: {{ beer.hop }}
                </li>
                <li>
                    Солод: {{ beer.malts }}
                </li>
                <li>
                    Дрожжи: {{ beer.yeast }}
                </li>
            </ul>
        </div>
        <h4>{{ $store.state.beers }}</h4>
        <my-button 
            class="btn-delete"
            @click="$emit('remove', beer)"
        >
            Не понравилось
        </my-button>
    </li>
</template>

<script>
export default {
    emits: ['remove'],
    props: {
        beer: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style scoped>
    .beer {
        list-style-type: none;
        padding: 20px;
        border: 2px solid teal;
        margin: 1rem 1rem;
        border-radius: 2em;
    }

    .beer__characteristics {
        list-style: none;
    }
</style>