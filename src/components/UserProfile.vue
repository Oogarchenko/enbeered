<template>
    <div class="card user__card" >
        <img :src="user.avatar" class="card-img-top" alt="user avatar" width='300' height='300'>
        <div class="card-body mt-5">
            <h5 class="card-title text-center">{{ user.first_name}} {{ user.last_name }}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Возраст: {{ new Date().getFullYear() - new Date(user.date_of_birth).getFullYear() }}</li>
            <li class="list-group-item">Должность: {{ user.employment?.title }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: { 
        user: { 
            type: Object,
            required: true
        },
    }
}
</script>

<style scoped>

</style>