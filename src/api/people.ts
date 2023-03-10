import Axios from "axios";

export function loadPeople() {
    return Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            const { data } = response;
            return data
        })
}

export function savePerson() {
    return Axios.post("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            const { data } = response;
            return data
        })
}