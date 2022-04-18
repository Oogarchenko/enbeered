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
                v-model="searchQuery"                
                placeholder="Поиск по названию..."
            />
            <my-select
                v-model="selectedSort"
                :options="sortOptions"
            />
        </div>
        <my-loader v-if="isBeerLoading">
            <h4>Дай-ка подумать...</h4>
        </my-loader>
        <!-- <h2 v-if="!isUserOldEnough">Прости, несовершеннолетним пиво не предлагаем!</h2> -->
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
import useBeer from '@/hooks/useBeer';
import useUser from '@/hooks/useUser';
import useSortedBeers from '@/hooks/useSortedBeers';
import useSortedAndSearchedBeers from '@/hooks/useSortedAndSearchedBeers'
export default {
    components: {
        BeerList, MyDialogue,
        MyButton, UserProfile, MySelect, MyInput
    },
    data () {
        return {
            dialogueVisible: false,
            sortOptions: [
                {value: 'brand', name: 'По бренду'},
                {value: 'style', name: 'По виду'},
            ]
        }
    },
    setup (props) {
        const { user, isUserLoading, fetchUser } = useUser();
        const { beer, beers, isBeerLoading, fetchBeer, removeBeer } = useBeer();
        const { selectedSort, sortedBeers } = useSortedBeers(beers);
        const { searchQuery, sortedAndSearchedBeers } = useSortedAndSearchedBeers(sortedBeers);
        return {
            user,
            fetchUser,
            isUserLoading,
            beer, 
            beers, 
            isBeerLoading, 
            fetchBeer, 
            removeBeer,
            searchQuery, 
            sortedAndSearchedBeers,
            selectedSort,
            sortedBeers 
        }
    },
     mounted () {
        this.fetchUser();
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