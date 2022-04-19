import axios from 'axios';
import { onMounted, ref } from 'vue';

export default function useUser () {
    const user = ref({});
    const isUserLoading = ref(true);
    const userAge = ref(0);
    const fetchUser = async () => {    
        try {
            isUserLoading.value = true;
            const response = await axios.get('https://random-data-api.com/api/users/random_user');
            user.value = response.data;
            userAge.value = new Date().getFullYear() - new Date(user.value.date_of_birth).getFullYear();
        } catch (e) {
            alert(e.message);
        } finally {
            isUserLoading.value = false;
        };
    };

    onMounted(fetchUser);
    return {
        user, isUserLoading, fetchUser, userAge
    }
}