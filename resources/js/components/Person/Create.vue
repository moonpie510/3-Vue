<script>
export default {
    name: "Create",

    data() {
        return {
            name: null,
            age: null,
            job: null
        }
    },

    methods: {
        store() {
            axios.post('/api/people/', {name: this.name, age: this.age, job: this.job})
                .then(res => {
                    this.$router.push( {name: 'person.index'} )
                })
        },
    },

    computed: {
        isDisabled() {
            return this.name && this.age && this.job;
        }
    }
}
</script>

<template>
    <div class="w-25">
        <div class="mb-3">
            <input type="text" placeholder="Name" class="form-control" v-model="name">
        </div>
        <div class="mb-3">
            <input type="text" placeholder="Age" class="form-control" v-model="age">
        </div>
        <div class="mb-3">
            <input type="text" placeholder="Job" class="form-control" v-model="job">
        </div>
        <div>
            <input type="submit" :disabled="!isDisabled" value="Add" class="btn btn-primary" @click.prevent="store">
        </div>
    </div>
</template>

<style scoped>

</style>
