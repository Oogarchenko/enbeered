<template>
  <a href="#" @click.prevent class="btn btn-warning"><slot></slot></a>
</template>

<script>
export default {
    name: 'my-button'
}
</script>

<style scoped>
    .btn {
        color: black;
        font-weight: bold;
        border-radius: 0.5em;
        margin: 0.5rem 1rem;
    }
</style>