import { createContext, useEffect, useState } from 'react'
import { habits as data } from '../data/habits'
export const HabitsContext = createContext()

export function HabitsContentProvider(props) {
  const [habits, setHabits] = useState([])


  useEffect(() => {
    setHabits(data)
  }, [])


  const addHabit = (habit) => {
    setHabits([...habits, habit])
  }

  const deleteHabit = (id) => {
    setHabits(habits.filter(habit => habit.id !== id))
  }



  return (
    <HabitsContext.Provider value={{ habits, addHabit, deleteHabit }}>
      {props.children}
    </HabitsContext.Provider>
  )
}

export default HabitsContext