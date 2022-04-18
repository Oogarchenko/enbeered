<template>
  <div class="wrapper">
        <my-loader v-if="isUserLoading">Кто это тут у нас...?</my-loader>
        <h1 v-else-if="!isUserLoading">Какие люди(роботы?)! {{ user.first_name }}!</h1>        
        <user-profile
            :user="user"
        />
        <my-dialogue v-model:show="dialogueVisible">
        </my-dialogue>       
        <div class="app__btns">
            <my-button 
                @click="fetchBeer"
            >
                Pick a random beer
            </my-button>
            <my-input
                :model-value="searchQuery"
                @update:model-value="this.setSearchQuery"
                placeholder="Поиск по названию..."
            />
            <my-select
                :model-value="selectedSort"
                @update:model-value="this.setSelectedSort"
                :options="sortOptions"
            />
        </div>
        <my-loader v-if="isBeerLoading">
            <h4>Дай-ка подумать...</h4>
        </my-loader>
        <h2 v-if="!isUserOldEnough">Прости, несовершеннолетним пиво не предлагаем!</h2>
        <beer-list 
            :beers="sortedAndSearchedBeers"
            @remove="removeBeer"
        />    
  </div>
</template>

<script>
import BeerList from "@/components/BeerList";
import MyDialogue from "@/components/UI/MyDialogue";
import MyButton from '@/components/UI/MyButton';
import UserProfile from '@/components/UserProfile';
import MySelect from '@/components/UI/MySelect';
import MyInput from '@/components/UI/MyInput';
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

export default {
    components: {
        BeerList, MyDialogue,
        MyButton, UserProfile, MySelect, MyInput
    },
    data () {
        return {
            dialogueVisible: false,
        }
    },
    methods: {
        ...mapMutations({
            setBeer: 'beer/setBeer', 
            setBeers: 'beer/setBeers',
            setSelectedSort: 'beer/setSelectedSort',
            setSearchQuery: 'beer/setSearchQuery',
            setUser: 'user/setUser',
            setIsUserLoading: 'user/setIsUserLoading',
            setIsUserOldEnough: 'user/setIsUserOldEnough',
            setUserAge: 'user/setUserAge',
        }),
        ...mapActions({
            fetchBeer: 'beer/fetchBeer',
            removeBeer: 'beer/removeBeer',
            fetchUser: 'user/fetchUser',
        }),
        toggleDialogue () {
            this.dialogueVisible = !this.dialogueVisible;
        },
    },
    mounted () {
        this.fetchUser();
    },
    computed: {
       ...mapState({
            beer: state => state.beer.beer,
            beers: state => state.beer.beers,
            isBeerLoading: state => state.beer.isBeerLoading,
            selectedSort: state => state.beer.selectedSort,
            searchQuery: state => state.beer.searchQuery,
            sortOptions: state => state.beer.sortOptions,
            user: state => state.user.user,
            isUserLoading: state => state.user.isUserLoading,
            isUserOldEnough: state => state.user.isUserOldEnough,
            userAge: state => state.user.userAge,
       }),
       ...mapGetters({
           sortedBeers: 'beer/sortedBeers',
           sortedAndSearchedBeers: 'beer/sortedAndSearchedBeers',
       }) 
    },
}
</script>

<style scoped>
    .app__btns {
        margin: 15px 0;
        display: flex;
        justify-content: space-between;
    } 
    .wrapper {
        max-width: 1440px;
        min-height: 50px;
        margin: 0 auto;
        padding: 1.5rem;
    }
</style>