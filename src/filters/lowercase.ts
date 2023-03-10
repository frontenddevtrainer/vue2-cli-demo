import Vue from "vue";

Vue.filter("toLowercase", (value: string) => {
    return value.toLowerCase();
})