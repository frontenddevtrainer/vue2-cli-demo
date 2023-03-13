<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import PeopleListing from "./components/People/People-Listing.vue"
import AddPeople from "./components/People/Add-People.vue";
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
        <div class="col-3">
          <AddPeople />
        </div>
        <div class="col-9">
          <!-- <button v-on:click="changeShowPeopleListing()">Show</button>
          <PeopleListing/> -->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
