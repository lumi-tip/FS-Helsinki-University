import axios from "axios"
const baseURL = "http://localhost:3001/persons"

const getInfo = () =>{
    return axios.get(baseURL)
}

const addPerson = (person) => {
    return axios.post(baseURL, person)
}

const updatePerson = (updatedPerson) =>{
    return axios.put(`${baseURL}/${updatedPerson.id}`, updatedPerson)
}

const deletePerson = (id) =>{
    return axios.delete(`${baseURL}/${id}`)
}

export default {
    getInfo,
    deletePerson,
    addPerson,
    updatePerson
}