<script lang="ts">
    export default {
        props : ["id"],
        computed: {
            id() : any {
                return this.$route.params.id + "computed"
            }
        }
    }
</script>

<template>
    <div>
        <router-link to="/">Home</router-link>
        <router-link to="/products">Products</router-link>
        <!-- <div><PeopleListing  /></div> -->
        Detail Page
        {{ id }}
        
     </div>
</template>
