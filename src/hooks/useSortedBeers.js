import { ref, computed } from 'vue';

export default function useSortedBeers(beers) {
    const selectedSort = ref('');
    const sortedBeers = computed(() => {
        return [...beers.value].sort((beer1, beer2) => beer1[selectedSort.value]?.localeCompare(beer2[selectedSort.value]))
    })

    return {
        selectedSort, sortedBeers
    }
}