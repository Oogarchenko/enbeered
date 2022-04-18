<template>
  <div class="loader">
       <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'my-loader'
}
</script>

<style scoped>
    .loader {
        color: teal;
        font-size: 2rem;
    }
</style>