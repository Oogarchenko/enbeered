<template>
  <div class="dialogue" v-if="show" @click.stop="hideDialogue">
      <div @click.stop class="dialugoe__content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import toggleMixin from '@/mixins/toggleMixin';
export default {
    name: 'my-dialogue',
    mixins: [toggleMixin],
    methods: {
        hideDialogue () {
            this.$emit('update:show', false);
        }
    }
}
</script>

<style scoped>
    .dialogue {
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        display: flex;
    }

    .dialogue__content {
        margin: auto;
        background: white;
        border-radius: 12px;
        min-width: 300px;
        min-height: 50px;
    }
</style>