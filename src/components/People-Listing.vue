<script lang="ts">
export default {
    mounted() {
        console.log("mounted");
        setInterval(()=>{
            this.time = new Date();
        }, 1000)
    },
    data: function () {
        return {
            companyName: "tavant",
            time: new Date(),
            people: [
                {
                    name: "abc",
                    age: 23,
                    role: "Manager",
                    profilePic: "",
                    profileLink: ""
                }
            ]
        }
    },
    computed: {
        generatePeople() {
            return [...new Array(10)].map(() => {
                return {
                    name: "abc",
                    age: Math.round(Math.random() * 30),
                    role: "Manager",
                    profilePic: "",
                    profileLink: ""
                }
            })
        },
        totalRecords() {
            return this.generatePeople.length;
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
        <b-card v-for="person in generatePeople" :title="person.role" :img-src="person.profilePic" img-alt="Image" img-top
            tag="article" style="max-width: 20rem;" class="mb-2">
            <b-card-text>
                {{ person.name }} {{ person.age }}
            </b-card-text>
            <b-button :href="person.profileLink" variant="primary">Go somewhere</b-button>
        </b-card>
    </div>
</template>

<style scoped></style>