import { useState } from 'react'
import SearchBar from './components/SearchBar'
import Form from './components/Form'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id: 1}
  ])
  const [contactInfo, setContactInfo] = useState({name: "", phone: "", id: ""})
  const [findName , setFindName ] = useState('')
  const [personsFilter, setPersonsFilter] = useState([])

  const handleChange = ({ target }) => {
    setContactInfo(prevState => ({ ...prevState, [target.name]: target.value }))
  }

  const handleFind = ({target}) =>{
    setFindName(target.value)
    const filteredPersons = persons.filter(e => e.name.toLowerCase().includes(target.value.toLowerCase()))
    if(target.value.length <= 0) setPersonsFilter([])
    else setPersonsFilter(filteredPersons)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if(contactInfo.name !== ""){
      const avoidDuplicate = persons.find(e => e.name == contactInfo.name)
      if (avoidDuplicate) alert(`${contactInfo.name} is already added to phonebook`)
      else if(contactInfo.phone === "") alert(`Add a number for ${contactInfo.name}`)
      else{
        setPersons(persons.concat({ name: contactInfo.name, phone: contactInfo.phone, id: persons.length + 1 }))
        setContactInfo({name: "", phone: "", id: ""})
      } 
    }
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <SearchBar value={findName} handleChange={handleFind}/>
      <h2>Add New</h2>
      <Form value={contactInfo} handleSubmit={handleSubmit} handleChange={handleChange}/>
      <h2>Numbers</h2>
      <Persons persons={persons} personsFiltered={personsFilter}/>
    </div>
  )
}

export default App