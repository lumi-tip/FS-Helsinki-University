const Header = ({course}) => {
  return(
    <>
      <h1>{course}</h1>
    </>
  )
}

const Part = (props) =>{
  return(
    <p>{props.part_name} {props.part_exercise}</p>
  )
}

const Content = (props) =>{

  const content = props.parts.map((part, index) => {
    return(
      <Part key={index} part_name={part.name} part_exercise={part.exercises}/>
    )
  })

  return (
    <>{content}</>
  )
}

const Total = ({parts}) =>{
  
  let numOfExercises = 0
  for(let part of parts){
    numOfExercises += part.exercises
  }

  return(
    <p>Number of exercises {numOfExercises}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App