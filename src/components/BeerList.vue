<template>
    <ul class="beers" v-show="beers.length > 0">
        <transition-group name="beers-list">
            <beer-item
                v-for="beer in beers"
                :beer="beer"
                :key="beer.id"
                @remove="$emit('remove', beer)"
            />
        </transition-group>
    </ul>
    <h2 v-show="beers.length === 0">Может пивка?</h2>
</template>

<script>
import BeerItem from '@/components/BeerItem';
export default {
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
        list-style: none;
        margin-top: 5rem;
        width: 40%;
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
</style>