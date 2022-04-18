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
        setIsUserOldEnough (state, bool) {
            state.isUserOldEnough = bool;
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
                commit('setIsUserOldEnough', state.userAge > 18);
            } catch (e) {
                alert(e.message);
            } finally {
                commit('setIsUserLoading', false);
            }
        }
    },
    namespaced: true
} 