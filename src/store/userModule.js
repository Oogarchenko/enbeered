import axios from 'axios';

export const userModule = {
    state: () => ({
        user: {},
        isUserLoading: false,
        isUserOldEnough: false,
        userAge: 0,
    }),
    mutations: {
        setUser (state, user) {
            state.user = user;
        },
        setIsUserLoading (state, bool) {
            state.isUserLoading = bool;
        },
        setUserAge (state, number) {
            state.userAge = number;
        }
    },
    actions: {
        async fetchUser ({ state, commit }) {
            try {
                commit('setIsUserLoading', true);
                const response = await axios.get('https://random-data-api.com/api/users/random_user');
                commit('setUser', response.data);
                commit('setUserAge', new Date().getFullYear() - new Date(state.user.date_of_birth).getFullYear());
            } catch (e) {
                alert(e.message);
            } finally {
                commit('setIsUserLoading', false);
            }
        }
    },
    namespaced: true
} 