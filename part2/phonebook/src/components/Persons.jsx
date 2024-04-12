const Persons = ({persons, personsFiltered, handleDelete}) => {
    const personsMap = persons.map((person, index) => {
        return(
            <div style={{display:"flex"}} key={index}>
                <p>{person.name} {person.number}</p>
                <button onClick={() => handleDelete(person.id, person.name)}>delete</button>
            </div>
        )
    })

    const personsFilterMap = personsFiltered.map((person, index) => {
        return(
            <div style={{display:"flex"}} key={index}>
                <p>{person.name} {person.number}</p>
                <button onClick={() => handleDelete(person.id, person.name)}>delete</button>
            </div>
        )
    })
  
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