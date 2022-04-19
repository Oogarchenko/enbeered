import axios from 'axios';

export const beerModule = {
    state: () => ({
        beer: {},
        beers: [],
        isBeerLoading: false,
        selectedSort: '',
        searchQuery: '',
        sortOptions: [
            {value: 'brand', name: 'Сортировать по бренду'},
            {value: 'style', name: 'Сортировать по виду'},
        ],
    }),
    getters: {
        sortedBeers (state) {
            return [...state.beers].sort((beer1, beer2) => beer1[state.selectedSort]?.localeCompare(beer2[state.selectedSort]));
        },
        sortedAndSearchedBeers (state, getters) {
            return getters.sortedBeers.filter(beer => beer.name.toLowerCase().includes(state.searchQuery.toLowerCase()));
        },
    },
    mutations: {
        setBeer (state, beer) {
            state.beer = beer;
        },
        setLoading(state, bool) {
            state.isBeerLoading = bool;
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort;
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery;
        },
        setBeers(state, beers) {
            state.beers = beers;
        },
    }, 
    actions: {
        async fetchBeer ({state, commit}) {
            try {
                commit('setLoading', true);
                const response = await axios.get('https://random-data-api.com/api/beer/random_beer');
                commit('setBeer', response.data);
                commit('setBeers', [...state.beers, response.data]);
            } catch (e) {
                alert(e.message);
            } finally {
                commit('setLoading', false);
            }
        },      
        removeBeer ({state, commit}, context) {
            const newBeersState = [...state.beers].filter(b => b.id !== context.id);
            commit('setBeers', newBeersState);
        },
    },
    namespaced: true,
};
