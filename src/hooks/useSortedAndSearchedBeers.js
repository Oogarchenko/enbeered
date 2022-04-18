import { ref, computed } from 'vue';

export default function useSortedAndSearchedBeers(sortedBeers) {
    const searchQuery = ref('');
    const sortedAndSearchedBeers = computed(() => {
        return sortedBeers.value.filter(beer => beer.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
    })

    return {
        searchQuery, sortedAndSearchedBeers
    }
}