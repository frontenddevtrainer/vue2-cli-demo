<script lang="ts">
// Fetch API - Browser Native
// Axios - 3rd Party

import Axios from "axios";
import type { Person } from "../../interfaces/person"
import { loadPeople } from "../../api/people"

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
            return value.website + " " + value?.company?.name;
        }
    },
    data: function (): { color: string,isDisbled: boolean, companyName: string, time: Date, interval: number, people: Person[], apiError: boolean } {
        return {
            apiError: false,
            companyName: "tavant",
            time: new Date(),
            interval: -1,
            people: [],
            isDisbled: false,
            color: "orange"
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
        showMessage(person: any, event: any){
            console.log(person, event)
        }
    },
    directives: {
        "change-color": {
            bind(el, binding, vnode){
                console.log(binding);
                const { color } = binding.value
                el.style.color = color
            }
        }
    }
}

</script>

<template>
    <div>
        <button :disabled="isDisbled" v-on:click="loadData()">Refresh</button>
        <p v-if="isDisbled">The refresh button is disabled</p>
        <p v-else-if="isDisbled">The refresh button is Enable</p>
        <div>
            <p v-if="apiError">API Error Occured</p>
            <p>Current time: {{ time }}</p>
            <p>Total records: {{ totalRecords }} in {{ companyNameFormatted }}</p>
            <b-card v-for="person in people" v-on:mouseover="showMessage(person, $event)" key="person.id" :title="person.username" img-alt="Image" img-top tag="article"
                style="max-width: 20rem;" class="mb-2">
                <b-card-text v-change-color="{ color, secondPartyName: 'secondPartyValue' }">
                    {{ person.name }} {{ person.phone }} {{ person | website | toUppercase | toLowercase }}
                </b-card-text>
                <b-button :href="person.website" variant="primary">Go somewhere</b-button>
            </b-card>
        </div>
    </div>
</template>

<style scoped></style>
