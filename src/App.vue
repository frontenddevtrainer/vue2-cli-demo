<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import PeopleListing from "./components/People-Listing.vue"


</script>

<template>
  <div>
    <Navbar />
    <button>show listing</button>
    <div class="container">
      <div class="row">
        <div class="col-3">Hello world!!!</div>
        <div class="col-9">
          <PeopleListing />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
