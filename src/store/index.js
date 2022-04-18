import { createStore } from 'vuex';
import { beerModule } from '@/store/beerModule';
import { userModule } from '@/store/userModule';

export default createStore({
    modules: {
        beer: beerModule,
        user: userModule
    }
});
