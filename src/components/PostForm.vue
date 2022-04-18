<template>
    <form @submit.prevent>
        <h2 class="form-title">Create post</h2>
        <my-input
            v-model="post.title"
            type="text" 
            placeholder="title"
        />
        <my-input 
            v-model="post.body" 
            type="text" 
            placeholder="body"
        />
        <my-button
            class="create"
            @click="createPost"
        >
            Create
        </my-button>
    </form>
</template>

<script>
export default {
    data () { 
        return {
            post: {
                id: 0,
                title: '',
                body: ''
            }
        }
    },
    methods: {
        createPost () {
            this.post.id = Date.now();
            this.$emit('create', this.post, 'second', 'third');
            this.post = {
                title: '',
                body: ''
            }
        }
    }
}
</script>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
    }
    .form-title {
        margin-top: 20px;
    }
    .create {
        align-self: flex-end;
    }

</style>