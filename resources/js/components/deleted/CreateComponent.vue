<script>
import SomeComponent from "./SomeComponent.vue";
export default {
    name: "CreateComponent",

    data() {
        return {
            name: null,
            age: null,
            job: null,
            obj: {
                color: 'green',
                number: 50,
                isPublished: false
            }
        }
    },

    methods: {
      addPerson() {
          axios.post('/api/people', {name: this.name, age: this.age, job: this.job})
              .then(res => {
                  this.name = '';
                  this.age = '';
                  this.job = '';
                  this.$parent.$refs.index.getPeople();
              })
        }
    },

    mounted() {

    },

    components: {
        SomeComponent,
    }
}
</script>

<template>
    <div class="w-25">
        <div class="mb-3">
            <input type="text" class="form-control" id="name" placeholder="name" v-model="name">
        </div>
        <div class="mb-3">
            <input type="number" class="form-control" id="age" placeholder="age" v-model="age">
        </div>
        <div class="mb-3">
            <input type="text" class="form-control" id="job" placeholder="job" v-model="job">
        </div>
        <div class="mb-3">
            <input type="submit" class="btn btn-primary" value="Добавить" @click.prevent="addPerson">
        </div>
        <SomeComponent :obj="obj"></SomeComponent>
    </div>
</template>

<style scoped>

</style>
