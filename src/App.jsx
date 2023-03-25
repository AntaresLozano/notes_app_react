import { Greetings, HabitsForm, HabitsList } from "./components"

function App() {
  
  return (
    <div className="App">
      <div className="left">
        <HabitsForm/>
      </div>
      <div className="rigth" >
        <Greetings/>
        <HabitsList/>
      </div>
    </div>
  )
}

export default App
