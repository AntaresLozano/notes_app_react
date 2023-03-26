import React, { useContext } from 'react'
import { HabitsContext } from '../../context/context'
import Habit from '../habit/Habit';


function HabitsList() {

  const { habits } = useContext(HabitsContext);

  console.log(`clg desde la lista:`,habits)

  return (
    <>
      {habits.map((habit, index) => <Habit key={index} habit={habit} />)}
    </>
  )
}

export default HabitsList