const Form = ({value, handleChange, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
        <div>name: <input name='name' value={value.name} onChange={handleChange}/></div>
        <div>number: <input name='number' value={value.number} onChange={handleChange}/></div>
        <div><button type="submit">add</button></div>
      </form>
    )
}

export default Form