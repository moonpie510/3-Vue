<script>
export default {
    name: "Edit",

    data() {
        return {
            name: null,
            age: null,
            job: null
        }
    },

    methods: {
        getPerson() {
            axios.get(`/api/people/${this.$route.params.id}`)
                .then(res => {
                    this.name = res.data.data.name;
                    this.age = res.data.data.age;
                    this.job = res.data.data.job;
                })
        },

        update() {
            axios.patch(`/api/people/${this.$route.params.id}`, {name: this.name, age: this.age, job: this.job})
                .then(res => {
                    this.$router.push({name: 'person.show', params: {id: this.$route.params.id}});
                })
        }
    },

    mounted() {
        this.getPerson();
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
            <input type="submit" :disabled="!isDisabled" value="Update" class="btn btn-primary" @click.prevent="update">
        </div>
    </div>
</template>

<style scoped>

</style>
