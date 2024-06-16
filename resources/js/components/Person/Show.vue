<script>
import route from '../../router';

export default {
    name: "Show",

    data() {
        return {
            person: null,
        }
    },

    methods: {
        getPerson() {
            axios.get(`/api/people/${this.$route.params.id}`)
                .then(res => {
                    this.person = res.data.data;
                })
        }
    },

    mounted() {
        this.getPerson();
    }
}
</script>

<template>
    <div v-if="person">
        <div>
            Name: {{ person.name }}
        </div>
        <div>
            Age: {{ person.age }}
        </div>
        <div>
            Job: {{ person.job }}
        </div>
        <router-link :to="{name: 'person.edit', params: {id: this.$route.params.id}}">Edit</router-link>
    </div>
</template>

<style scoped>

</style>
