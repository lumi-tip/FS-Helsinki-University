const Header = ({ name }) => <h2>{name}</h2>

const Total = ({ sum }) => <p>Number of exercises {sum}</p>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => {

  const partsMap = parts.map((part, index) => <Part key={index} part = {part}/>)

  return(
    <>
    {partsMap}
    </>
  )
}

const Course = ({course}) =>{
  const sum = course.parts.reduce((prev,next)=> prev + next.exercises , 0)
  return(
    <>
      <Header name = {course.name}/>
      <Content parts = {course.parts}/>
      <Total sum = {sum}/>
    </>
  )
}

export default Course