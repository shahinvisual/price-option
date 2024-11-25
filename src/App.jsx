
import './App.css'
import LineChart from './Components/LineChart/LineChart'
import NavBar from './Components/NavBar/NavBar'
import Phones from './Components/Phones/Phones'
import PriceOption from './Components/PriceOptions/PriceOptions'
// import DaisyNav from './Components/DaisyNav/DaisyNav'

function App() {


  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-7xl bg-orange-500 font-bold'>Vite + React</h1>
      <PriceOption></PriceOption>
      <LineChart></LineChart>
      <Phones></Phones>
      
    </>
  )
}

export default App
