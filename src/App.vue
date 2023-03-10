<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import PeopleListing from "./components/People-Listing.vue"
import { ref } from "vue";

let showPeopleListing = ref(false);

function changeShowPeopleListing() {
  showPeopleListing.value = !showPeopleListing.value;
}

</script>

<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row">
        <div class="col-3">Hello world!!!</div>
        <div class="col-9">
          <button v-on:click="changeShowPeopleListing()">Show</button>
          <PeopleListing v-if="showPeopleListing" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
