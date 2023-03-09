<script lang="ts">

export default {
    props: {
        people: {
            type: Array
        }
    },
    data: function () {
        return {
            message: "hello world!!!"
        }
    },
    methods: {

    }
}

</script>

<template>
    <ul>
        <li v-for="person in people">
            {{
                person.name
            }}
        </li>
    </ul>
</template>

<style scoped>
* {
    color: red
}
</style>