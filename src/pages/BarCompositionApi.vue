<template>
    <div class="moes-bar wrapper">
        <my-loader v-if="isUserLoading"/>
        <div class="main-section container container-fluid">           
            <div class="row">
                <div class="col mb-3">
                    <div class="card text-center bartender mb-3">
                        <img src="@/assets/images/Moe.webp" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">У меня кое что есть для тебя, {{ user.first_name }}</h5>                             
                            <my-button 
                                @click="fetchBeer(); showDialog();"                                
                            >                    
                                Выбрать другое пиво
                            </my-button>
                            <div class="loader"><my-loader v-if="isBeerLoading"/></div>
                        </div>
                    </div>
               </div>
               <div class="col mb-3">
                <beer-item
                    class="suggested-beer"
                    :beer="beer"
                    @remove="removeBeer"
                    @toggle-flag="fetchBeer"
                />
               </div>
               <div class="col mb-3">
                <user-profile
                    class="user"
                    :user="user"
                />
               </div>
            </div>
        </div>
        <div class="container-fluid" v-if="isDialogueVisible">
            <my-dialogue v-model:show="isDialogueVisible">
                <div class="alert alert-light mb-2 text-center" role="alert">
                    Не нравится? Тогда попробуй это!
                </div>
                <beer-item
                    :beer="beer"
                    @remove="removeBeer"
                    @toggle-flag="fetchBeer"
                />
            </my-dialogue>
        </div>            
    </div>
</template>

<script>
import BeerList from "@/components/BeerList";
import BeerItem from "@/components/BeerItem";
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
        BeerList, MyDialogue, BeerItem,
        MyButton, UserProfile, MySelect, MyInput
    },
    data () {
        return {
            isDialogueVisible: false,
        }
    },
    setup () {
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
    methods: {
        showDialog () {
            this.isDialogueVisible = true;
        }
    },
     mounted () {
        this.fetchUser();
    },
}
</script>

<style scoped>
    .wrapper {
        max-width: 1440px;
        margin: 0 auto;
        padding: 1.5rem;
    }
    .bartender {
        border: none;
        height: 100%;
    }
    .user {
        height: 100%;
    }
    .beerlist-header {
        text-align: center;
        margin-top: 3rem;
    }
    .loader {
        display: inline-block;
        width: 1rem;
    }
</style>