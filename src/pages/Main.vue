<template>
  <div class="wrapper">
        <my-loader v-if="isUserLoading"/>
        <div class="main-section container container-fluid">           
            <div class="row">
                <div class="col mb-3">
                    <div class="card text-center bartender">
                        <img src="@/assets/images/Moe.webp" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">У меня кое что есть для тебя, {{ user.first_name }}</h5>                             
                            <my-button 
                                @click="fetchBeer(); toggleDialogue();"                                
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
                    @toggle-flag="toggleConfirmationPopup"
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
        <div class="input-group">
            <my-input
                :model-value="searchQuery"
                @update:model-value="this.setSearchQuery"
                placeholder="Поиск..."
            />
            <my-select
                :model-value="selectedSort"
                @update:model-value="this.setSelectedSort"
                :options="sortOptions"
            />
        </div>
        <my-loader v-if="isBeerLoading"/>
        <div class="container-lg">
            <beer-list 
                :beers="sortedAndSearchedBeers"
                @remove="removeBeer"
            />
        </div>
        <div class="container-fluid" v-if="isDialogueVisible">
            <my-dialogue v-model:show="isDialogueVisible">
                <div class="alert alert-light mb-2 text-center" role="alert">
                    Попробуй вот это!
                </div>
                <beer-item
                    :beer="beer"
                    @remove="removeBeer"
                    @toggle-flag="toggleConfirmationPopup"
                />
            </my-dialogue>
        </div>            
        <div class="container-fluid popup" v-if="isPopupVisible">
            <my-dialogue v-model:show="isPopupVisible">
                <div class="alert alert-warning text-center" role="alert">
                    Пиво удалено из коллекции!
                </div>
            </my-dialogue>
        </div>      
  </div>
</template>
    
<script>
import BeerItem from '@/components/BeerItem';
import BeerList from "@/components/BeerList";
import MyDialogue from "@/components/UI/MyDialogue";
import MyButton from '@/components/UI/MyButton';
import UserProfile from '@/components/UserProfile';
import MySelect from '@/components/UI/MySelect';
import MyInput from '@/components/UI/MyInput';
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

export default {
    components: {
        BeerList, MyDialogue, BeerItem,
        MyButton, UserProfile, MySelect, MyInput
    },
    data () {
        return {
            isDialogueVisible: false,
            isPopupVisible: false,
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
            setUserAge: 'user/setUserAge',
        }),
        ...mapActions({
            fetchBeer: 'beer/fetchBeer',
            removeBeer: 'beer/removeBeer',
            fetchUser: 'user/fetchUser',
        }),
        toggleDialogue () {
            this.isDialogueVisible = !this.isDialogueVisible;
        },
        toggleConfirmationPopup () {
            this.isPopupVisible = !this.isPopupVisible;
            this.isDialogueVisible = false;
        }
    },
    mounted () {
        this.fetchUser();
        this.fetchBeer();
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
            userAge: state => state.user.userAge,
       }),
       ...mapGetters({
           sortedBeers: 'beer/sortedBeers',
           sortedAndSearchedBeers: 'beer/sortedAndSearchedBeers',
       }) 
    }
}
</script>

<style scoped>
    .wrapper {
        max-width: 1440px;
        min-height: 50px;
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
    .alert {
        margin: 0;
    }
</style>