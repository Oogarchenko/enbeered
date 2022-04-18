import axios from 'axios';
import { onMounted, ref } from 'vue';

export default function useBeer () {
    const beers = ref([]);
    const beer = ref({});
    const isBeerLoading = ref(true);
    const fetchBeer = async () => {    
        try {
            isBeerLoading.value = true;
            const response = await axios.get('https://random-data-api.com/api/beer/random_beer');
            beer.value = response.data;
            beers.value = [...beers.value, beer.value];
        } catch (e) {
            alert(e.message)
        } finally {
            isBeerLoading.value = false;
        }
    };

    const removeBeer = (beer) => {
        return beers.value = beers.value.filter(b => b.id !== beer.id);
    };

    onMounted(fetchBeer)
    return {
        beers, beer, isBeerLoading, fetchBeer, removeBeer
    };
}