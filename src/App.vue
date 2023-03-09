<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import PeopleListing from "./components/People-Listing.vue"

const peopleData: any = [
    {
      name : "abc"
    },
    {
      name : "def"
    },
    {
      name : "xyz"
    }
]

</script>

<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row">
        <div class="col-3">Hello world!!!</div>
        <div class="col-9">
          <PeopleListing v-bind:people="peopleData" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
