import Vue from "vue";

Vue.filter("toUppercase", (value: string) => {
    return value.toUpperCase();
})