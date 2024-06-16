<script>

import CreateComponent from "./CreateComponent.vue";
import IndexComponent from "./IndexComponent.vue";
export default {
    name: "PostComponent",

    data() {
        return {
            persons: null,
        }
    },

    mounted() {
        //this.getPersons()
        //console.log(this.$refs.index.indexLog());
    },

    methods: {
      getPersons() {
          axios.get('/persons')
              .then( res => {
                  this.persons = res.data;
                  console.log(res.data);
              })
              .catch(error => {
                console.log(error);
              })
              .finally(() => {
                  console.log("END");
              })
      },

        parentLog() {
            console.log('this is parent component');
        }
    },

    computed: {

    },

    components: {
        CreateComponent,
        IndexComponent,
    },
}
</script>

<template>
    <div>
        <CreateComponent></CreateComponent>
        <IndexComponent ref="index"></IndexComponent>
    </div>
</template>

<style scoped>

</style>
