import { useState, useEffect } from 'react'
import axios from 'axios'


const App = () => {
  const [countryName, setCountryName] = useState(undefined)
  const [countriesOptions, setCountriesOptions] = useState([])
  const [countryWeather, setCountryWeather] = useState({})
  const api_key = import.meta.env.VITE_SOME_KEY
  console.log(api_key)

  const handleChange = ({ target }) =>{
    setCountryName(target.value)
  }

  const getweather = (lat, lon)=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`)
    .then(res => setCountryWeather(res.data))
  }

  const hook = () => {
    if(countryName){
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
        .then(response => {
          const countryFilter = response.data.filter(e=> e.name.common.toLowerCase().includes(countryName.toLowerCase()))
          console.log(countryFilter)
          setCountriesOptions(countryFilter)
          if(countryFilter.length === 1){
            const latitude = countryFilter[0].latlng[0]
            const longitud = countryFilter[0].latlng[1]
            getweather(latitude, longitud)
          }
        })
    }
  }

  useEffect(hook,[countryName])

  return (
    <>
      <label>Country name: </label>
      <input type='text' onChange={handleChange}/>
      {
        countriesOptions.length > 10 && 
        <p>Too many matches Specify another filter</p>
      }
      {
        countriesOptions.length > 1 && countriesOptions.length <= 10 &&
        countriesOptions.map((option,index) => 
          <div key={index} style={{margin: "10px"}}>
            <span >{option.name.common}</span>
            <button style={{margin: "0 0 0 10px"}} onClick={() => setCountryName(option.name.common)}>Select Country</button>
          </div> 
        )
      }
      {
        countriesOptions.length === 1 && 
        <div>
          <h1>{countriesOptions[0].name.common}</h1>
          <p>Capital {countriesOptions[0].capital}</p>
          <p>area {countriesOptions[0].area}</p>
          <h2>languages</h2>
          <ul>
              {Object.values(countriesOptions[0].languages).map((idiom,key) => <li key={key}>{idiom}</li>)}
          </ul>
          <img src={countriesOptions[0].flags.png} width="200px"/>
          {countryWeather && 
            <div>
              <p>temperature {countryWeather.main.temp} Celcius</p>
              <img src={`https://openweathermap.org/img/wn/${countryWeather.weather[0].icon}@2x.png`}/>
              <p>wind {countryWeather.wind.speed} m/s</p>
            </div>
          }
        </div>
      }
    </>
  )
}

export default App