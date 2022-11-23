<template>
    <div class="container">

        <h1>View Character</h1>
        <div>
            <h3>{{ this.$route.params.id }}</h3>
        </div>


    </div>
</template>

<script>
export default {
    methods: {
        async getCharacter() {
            console.log('getting character')
        },
    },
    mounted() {
        this.getCharacter();
    },
};
</script>

<style scoped>
.container {
    height: 300px;
    background-color: red;
}
</style>