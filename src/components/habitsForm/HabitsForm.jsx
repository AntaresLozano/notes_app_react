import './index.css'
import React, { useContext, useState } from 'react'
import { HabitsContext } from '../../context/context'
import { v4 as uuidv4 } from 'uuid';

function HabitsForm() {
  // let time = '00:00'
  const [habit, setHabit] = useState(null);
  const { addHabit } = useContext(HabitsContext)

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    description: '',
    time: '',
    good: null,
    bad: null,
    count: 0
  });

  // const handleInputChange = (event) => {
  //   console.log(event.target)
  //   const { name, value } = event.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  const handleInputChange = (event) => {
    const { name, checked, value } = event.target;
    if (name === "good") {
      setFormData((prevData) => ({
        ...prevData,
        good: checked,
        bad: checked ? false : prevData.bad
      }));
    } else if (name === "bad") {
      setFormData((prevData) => ({
        ...prevData,
        bad: checked,
        good: checked ? false : prevData.good
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData) {
      formData.id = uuidv4()
      addHabit(formData)
    }
  };

  // const handleCheckValue = (event) => {
  //   const { name, value = true } = event.target;
  //   handleInputChange
  // }

  return (
    <div className="container">
      <h2>Manage your habits</h2>
      <form className='form' onSubmit={handleSubmit} >

        <input type="text"
          placeholder='habit name'
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required />

        <textarea placeholder='type a description'
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          required
        ></textarea>

        <input id="appt-time"
          type="time"
          name="time"
          value={formData.time}
          onChange={handleInputChange}
          required
        />

        <div className='check' >
          <input type="checkbox"
            id="cbox1"
            name="good"
            value={formData.good}
            onChange={handleInputChange}
          />
          <label htmlFor="good"> Good</label>

          <input type="checkbox"
            id="cbox2"
            name="bad"
            value={formData.bad}
            onChange={handleInputChange}
          />
          <label htmlFor="bad">Bad</label>

        </div>
        <button type='submit' >Create</button>
      </form>
    </div>
  )
}

export default HabitsForm