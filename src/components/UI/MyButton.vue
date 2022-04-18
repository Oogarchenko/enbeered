<template>
  <button class="btn">
      <slot></slot>
  </button>
</template>

<script>
export default {
    name: 'my-button'
}
</script>

<style scoped>
    .btn {
        min-width: 80px;
        min-height: 40px;
        background-color: gold;
        border: none;
        color: white;
        font-weight: bold;
        border-radius: 0.5em;
        margin: 0.5rem 1rem;
    }
</style>