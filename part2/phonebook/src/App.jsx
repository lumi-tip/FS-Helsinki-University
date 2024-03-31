import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import Form from './components/Form'
import Persons from './components/Persons'
import axios from 'axios'
import Request from './services/modules'

const App = () => {
  const [persons, setPersons] = useState([])
  const [contactInfo, setContactInfo] = useState({name: "", number: ""})
  const [findName , setFindName ] = useState('')
  const [personsFilter, setPersonsFilter] = useState([])
  
  //gets data in first render from db.json
  useEffect(() =>{
    Request.getInfo().then(res => setPersons(res.data))
  }, [])

  //controlled input for name and phone
  const handleChange = ({ target }) => {
    setContactInfo(prevState => ({ ...prevState, [target.name]: target.value }))
  }

  //controlled input for search input
  const handleFind = ({target}) =>{
    setFindName(target.value)
    const filteredPersons = persons.filter(e => e.name.toLowerCase().includes(target.value.toLowerCase()))
    if(target.value.length <= 0) setPersonsFilter([])
    else setPersonsFilter(filteredPersons)
  }

  //add or update contacts
  const handleSubmit = (event) => {
    event.preventDefault()
    const newPerson = { name: contactInfo.name, number: contactInfo.number }

    if(contactInfo.name !== ""){
      const duplicatedPerson = persons.find(person => person.name == contactInfo.name)

      if(duplicatedPerson && duplicatedPerson.number === contactInfo.number) alert(`${duplicatedPerson.name} is already added to the phonebook`)
      
      else if(contactInfo.number === "") alert(`Add a number for ${contactInfo.name}`)

      else if (duplicatedPerson && duplicatedPerson.number !== contactInfo.number){
        if(window.confirm(`${duplicatedPerson.name} is already added to the phonebook, replace the old number with a new one?`)){
          const updatedPerson = newPerson
          changeNumber(updatedPerson, duplicatedPerson)
        }
      }

      else{
        setPersons(persons.concat(newPerson))
        Request.addPerson(newPerson).then(res => console.log(res.data))
        setContactInfo({name: "", number: ""})
      } 
    }
  }

  //delete a contact
  const toggleDelete = (id, name) =>{
    if(window.confirm(`Delete ${name}?`)){
      const notDeletedPersons = persons.filter(e=> e.id !== id)
      setPersons(notDeletedPersons)
      Request.deletePerson(id)
  
      const findInPersonFilter = personsFilter.find(e => e.id === id)
      if(findInPersonFilter){
        setPersonsFilter(personsFilter.filter(e=> e.id !== id))
      }
    }
  }

  const changeNumber = (updatedPerson, duplicatedPerson) =>{
    const addPerson = {id: duplicatedPerson.id, name: duplicatedPerson.name, number: updatedPerson.number}
    Request.updatePerson(addPerson).then(res => {
      setPersons(persons.map(person => person.id !== duplicatedPerson.id ? person : res.data))
    })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchBar value={findName} handleChange={handleFind}/>
      <h2>Add New</h2>
      <Form value={contactInfo} handleSubmit={handleSubmit} handleChange={handleChange}/>
      <h2>Numbers</h2>
      <Persons persons={persons} personsFiltered={personsFilter} handleDelete={toggleDelete}/>
    </div>
  )
}

export default App