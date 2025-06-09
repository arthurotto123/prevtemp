import { useState, useRef} from 'react'
import axios from 'axios'
import './App.css'
import Weatherinfo from './components/Weatherinfo/Weatherinfo'

function App() {
  const [weather, setWeather] = useState(null)
  const inputRef = useRef()

 async function Buscidade(){
    const city = inputRef.current.value
    const key = "900192749eb5b1f24b1485333d209726"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const apiInfo = await axios.get(url)
    setWeather(apiInfo.data)
    
    

  }

  return (
    <div>
      <h1>Previsão do Tempo</h1>
      <input ref={inputRef} type='text' placeholder='Digite a cidade'/>
      <button onClick={Buscidade}>Buscar</button>
      {weather && <Weatherinfo weather={weather} />}
    </div>
    

    
  )
}

export default App
