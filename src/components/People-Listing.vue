<script lang="ts">
// Fetch API - Browser Native
// Axios - 3rd Party

import Axios from "axios";
import type { Person } from "../interfaces/person"

export default {
    mounted() {
        this.loadData();
    },
    data: function (): { companyName: string, time: Date, interval: number, people: Person[] } {
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
        loadData() {
            Axios.get("https://jsonplaceholder.typicode.com/users")
                .then((response) => {
                    const { data } = response;
                    this.people = data;
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }
}

</script>

<template>
    <div>
        <button v-on:click="loadData()">Refresh</button>
        <div>
            <p>Current time: {{ time }}</p>
            <p>Total records: {{ totalRecords }} in {{ companyNameFormatted }}</p>
            <b-card v-for="person in people" :title="person.username" img-alt="Image" img-top tag="article"
                style="max-width: 20rem;" class="mb-2">
                <b-card-text>
                    {{ person.name }} {{ person.phone }}
                </b-card-text>
                <b-button :href="person.website" variant="primary">Go somewhere</b-button>
            </b-card>
        </div>
    </div>
</template>

<style scoped></style>