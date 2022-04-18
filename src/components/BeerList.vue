<template>
    <div class="beers container container-fluid" v-show="beers.length > 0">
        <transition-group name="beers-list">
            <beer-item
                class="beer"
                v-for="beer in beers"
                :beer="beer"
                :key="beer.id"
                @remove="$emit('remove', beer)"
                @toggle-flag="$emit ('toggle-flag')"
            />
        </transition-group>
    </div>
</template>

<script>
import BeerItem from '@/components/BeerItem';
export default {
    emits: ['remove', 'toggle-flag'],
    components: { BeerItem },
    props: { 
        beers: { 
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
    .beers {
        display: flex;
        flex-wrap: wrap;
        margin-top: 3rem;
    }
    .beers-list-item {
        display: inline-block;
        margin-right: 10px;
    }
    .beers-list-enter-active,
    .beers-list-leave-active {
        transition: all 0.5s ease;
    }
    .beers-list-enter-from,
    .beers-list-leave-to {
        opacity: 0;
        transform: translateX(30px);
    }
    .beers-list-move {
        transition: transform 0.3s ease;
    }
    .beer {
        width: 23rem;
        margin-top: 1.5rem;
    }
</style>