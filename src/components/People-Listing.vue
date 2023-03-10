<script lang="ts">
// Fetch API - Browser Native
// Axios - 3rd Party

import Axios from "axios";
import type { Person } from "../interfaces/person"
import { loadPeople } from "../api/people"

export default {
    mounted() {
        loadPeople().then((data)=>{
            this.people = data;
        }).catch((error)=>{
            this.apiError = true;
        })
    },
    filters: {
        website(value: Person) : string{
            return value.website + " " + value.company.name;
        }
    },
    data: function (): { companyName: string, time: Date, interval: number, people: Person[], apiError: boolean } {
        return {
            apiError: false,
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
        <button v-on:click="loadData()">Refresh</button>
        <div>
            <p v-if="apiError">API Error Occured</p>
            <p>Current time: {{ time }}</p>
            <p>Total records: {{ totalRecords }} in {{ companyNameFormatted }}</p>
            <b-card v-for="person in people" :title="person.username" img-alt="Image" img-top tag="article"
                style="max-width: 20rem;" class="mb-2">
                <b-card-text>
                    {{ person.name }} {{ person.phone }} {{ person | website | toUppercase | toLowercase }}
                </b-card-text>
                <b-button :href="person.website" variant="primary">Go somewhere</b-button>
            </b-card>
        </div>
    </div>
</template>

<style scoped></style>