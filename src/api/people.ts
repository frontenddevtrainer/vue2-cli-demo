import Axios from "axios";

export function loadPeople() {
    return Axios.get("http://localhost:3000/people")
        .then((response) => {
            const { data } = response;
            return data
        })
}

export function savePerson(form) {
    return Axios.post("http://localhost:3000/people", form)
        .then((response) => {
            const { data } = response;
            return data
        })
}