<template>
    <div class="card beer text-center">
        <h5 class="card-header">{{ beer.name }}</h5>
        <div class="card-body">
            <h5 class="card-title">{{ beer.style }}</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Бренд: {{ beer.brand }}</li>
                <li class="list-group-item">Алкоголь: {{ beer.alcohol }}</li>
                <li class="list-group-item">Экстракт: {{ beer.blg }}</li>
                <li class="list-group-item">Хмель: {{ beer.hop }}</li>
                <li class="list-group-item">Солод: {{ beer.malts }}</li>
                <li class="list-group-item">Дрожжи: {{ beer.yeast }}</li>
            </ul>
            <my-button
                type="button" 
                class="btn btn-warning" 
                @click="$emit('remove', beer), $emit('toggle-flag')"
            >
                Не понравилось
            </my-button>          
        </div>
    </div>
</template>

<script>
import MyButton from '@/components/UI/MyButton.vue';
export default {
    components: { 
        MyButton
    },
    emits: ['remove', 'toggle-flag'],   
    props: {
        beer: {
            type: Object,
            required: true,
        },
    }
}
</script>

<style scoped>
    .beer {
        width: inherit;
        margin: 0 auto;
    }
    .beer__characteristics {
        list-style: none;
    }
</style>