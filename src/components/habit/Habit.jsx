import React, { useContext } from 'react'
import './habit.css'
import { HabitsContext } from '../../context/context'

function Habit({ habit }) {

  const { deleteHabit } = useContext(HabitsContext);

  const { id, name, description, time, good, bad, count } = habit

  const colorStyle = {
    backgroundColor: good === true ? '#69cb7ec0' : '#ff9436',
  }

  return (
    <div className='habit-container' style={colorStyle}>
      <p>{time}</p>
      <h2>{name}</h2>
      <div className='buttons'>
      
        <button onClick={() => deleteHabit(id)}>Delete</button>
        <input type="checkbox" />
      </div>
    </div>
  )
}

export default Habit