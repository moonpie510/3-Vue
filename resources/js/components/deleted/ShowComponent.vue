<script>

export default {


    name: "ShowComponent",

    data() {
        return {

        }
    },

    mounted() {

    },

    methods: {

        changeEditPersonId(id, name, age, job) {
            this.$parent.editPersonId = id;
            let editName = `edit_${id}`;
            let fullEditName = this.$parent.$refs[editName][0];
            fullEditName.name = name;
            fullEditName.age = age;
            fullEditName.job = job;
        },

        deletePerson(id) {
            axios.delete(`/api/people/${id}`)
                .then(res => {
                    this.$parent.getPeople();
                })
        },

    },

    props: [
        'person'
    ],


}
</script>

<template>

    <tr :class="this.$parent.isEdit(person.id) ? 'd-none' : ''">
        <th scope="row">{{ person.id }}</th>
        <td>{{ person.name }}</td>
        <td>{{ person.age }}</td>
        <td>{{ person.job }}</td>
        <td><a href="#" class="btn btn-success"
               @click.prevent="changeEditPersonId(person.id, person.name, person.age, person.job)">Edit</a></td>
        <td><a href="#" class="btn btn-danger" @click.prevent="deletePerson(person.id)">Delete</a></td>
    </tr>
    <EditComponent :person="person" :ref="`edit_${person.id}`"></EditComponent>

</template>

<style scoped>

</style>
