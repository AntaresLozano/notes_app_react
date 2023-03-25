import React from 'react'
import styled from 'styled-components'
import './index.css'

function HabitsForm() {
    let time = '00:00'


  return (
    <div className="container">
      <h2>Manage your habits</h2>
            <input type="text" placeholder='habit name' />
            <textarea placeholder='type a description'></textarea>
            <input id="appt-time" type="time" name="appt-time" value={time}/>
            <div className='check' >
              <input type="checkbox" id="cbox1" value="good"/> <label for="cbox1">Good</label>
              <input type="checkbox" id="cbox2" value="bad"/> <label for="cbox2">Bad</label>
            </div>     
    </div>
  )
}

export default HabitsForm