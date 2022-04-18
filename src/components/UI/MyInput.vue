<template>
    <input 
        :value="modelValue" 
        @input="updateInput"
        type="text" 
        aria-label="Beer name" 
        class="form-control" 
    >
</template>

<script>
export default {
    name: 'my-input',
    props: {
        modelValue: [String, Number],
        myvalue: [String]
    },
    methods: {
        updateInput (e) {
            this.$emit('update:modelValue', e.target.value)
        }
    }
}
</script>

<style scoped>
    .input {
        width: 100%;
        padding: 20px;
        border: 2px solid teal;
        margin: 1rem 1rem;
        border-radius: 1em;
    }
</style>