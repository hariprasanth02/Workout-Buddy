import React, { useEffect } from 'react'
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'
import { useWorkoutsContext } from '../hooks/useWorkoutContext'

WorkoutDetails
useWorkoutsContext

const Home = () => {
  // const [workouts,setWorkout] = useState(null)
  const {workouts,dispatch} = useWorkoutsContext()
  useEffect(()=>{
    const fetchWorkouts = async ()=>{
      const response = await fetch('/api/workouts/')
      const json = await response.json()

      if(response.ok){
        // setWorkout(json)
        dispatch({type:'SET_WORKOUTS',payload:json})
      }
    }
    fetchWorkouts()
  },[dispatch])
  return (
    <div className='home'>
     <div className='workouts'>
      {
        workouts && workouts.map((workout)=>(
          // <p>{workout.title}</p>
          <WorkoutDetails key={workout._id} workout={workout}/>
        ))
      }

     </div>
     <WorkoutForm/>
    </div>
  )
}

export default Home
