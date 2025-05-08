const Exercise = () => {

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
    
      const Header = (props) => {
        return <h1>{props.course}</h1>
      }
    
      const Part = (props) => {
        return (
          <p>{props.name} {props.exercises}</p>
        )
      }
    
      const Content = (props) => {
        return (
          <>
            <Part name={props.part1} exercises={props.exercises1} />
            <Part name={props.part2} exercises={props.exercises2} />
            <Part name={props.part3} exercises={props.exercises3} />
          </>
        )
      }
    
      const Total = (props) => {
        return (
          <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
        )
      }
    
    
      return (
        <div>
          <Header course={course.name} />
          <Content part1={course.parts[0].name} exercises1={course.parts[0].exercises} part2={course.parts[1].name} 
          exercises2={course.parts[1].exercises} part3={course.parts[2].name} exercises3={course.parts[2].exercises} />
          <Total exercises1={course.parts[0].exercises} exercises2={course.parts[1].exercises} exercises3={course.parts[2].exercises} />
          
        </div>
      )
    }
    
    export default Exercise