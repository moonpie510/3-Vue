<script>
export default {
    name: "SomeComponent",

    data() {
        return {

        }
    },

    methods: {

    },

    mounted() {
        this.$parent.$parent.parentLog();
    },

    props: ['obj'],

}
</script>

<template>
    <div>
        <div>Color: {{obj.color}}</div>
        <div>Number: {{obj.number}}</div>
        <div>Is published: {{obj.isPublished ? 'yes' : 'no'}}</div>
    </div>
</template>

<style scoped>

</style>
