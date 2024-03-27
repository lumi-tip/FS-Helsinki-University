const Persons = ({persons, personsFiltered}) => {
    const personsMap = persons.map(person => <p key={person.id}>{person.name} {person.phone}</p>)
    const personsFilterMap = personsFiltered.map(person => <p key={person.id}>{person.name} {person.phone}</p>)
  
    return (
        <>
        {personsFiltered.length <= 0 ? 
            personsMap
            : 
            personsFilterMap}
        </>
    )
}

export default Persons