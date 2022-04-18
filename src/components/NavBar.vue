<template>
  <div class="nav">
      <div>MOE`s</div>
      <div class="nav__buttons">
          <my-button @click="$router.push('/bar')">Что там в баре?</my-button>
          <my-button @click="$router.push('/about')">Что это за бар?</my-button>
      </div>
  </div>
</template>

<script>
import MyButton from '@/components/UI/MyButton'
export default {
  components: { MyButton },
}
</script>

<style scoped>
    .nav {
        height: 50px;
        background-color: teal;
        box-shadow: 2px 2px 4px gray;
        display: flex;
        align-items: center;
        padding: 0 15px;
    }
    .nav__buttons {
        margin-left: auto;
    }

</style>