<template>
  <div class="user__card">
      <img :src="user.avatar" alt="" class="avatar" width="300" height="300">
      <h4>{{ user.first_name}} {{ user.last_name }}</h4>
  </div>
</template>

<script>
export default {
    props: { 
        user: { 
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
    .user__card {
        width: 100px;
        min-height: 200px;
    }
</style>