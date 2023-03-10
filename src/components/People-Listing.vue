<script lang="ts">
// Fetch API - Browser Native
// Axios - 3rd Party

import Axios from "axios";

export default {
    mounted() {
        
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            const { data } = response;
            this.people = data;
        })
        .catch((error)=>{
            console.log(error);
        })


    },
    data: function () {
        return {
            companyName: "tavant",
            time: new Date(),
            interval: -1,
            people: []
        }
    },
    computed: {
        totalRecords() {
            return this.people.length;
        },
        companyNameFormatted() {
            return this.companyName.toUpperCase()
        }

    },
    methods: {

    }
}

</script>

<template>
    <div>
        <p>Current time: {{time}}</p>
        <p>Total records: {{ totalRecords }} in {{ companyNameFormatted }}</p>
        <b-card v-for="person in people" :title="person.role" :img-src="person.profilePic" img-alt="Image" img-top
            tag="article" style="max-width: 20rem;" class="mb-2">
            <b-card-text>
                {{ person.name }} {{ person.age }}
            </b-card-text>
            <b-button :href="person.profileLink" variant="primary">Go somewhere</b-button>
        </b-card>
    </div>
</template>

<style scoped></style>