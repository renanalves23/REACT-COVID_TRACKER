import React, {useState, useEffect} from "react";

import {Cards, Chart, CountryPicker } from './components'

import {fetchData} from './api'

import styles from './App.module.css'
import CoronaImage from './images/COVID-19.png'

export default function App() {
  const [data, setData] = useState({})
  const [country, setCountry] = useState('')

  useEffect(() => {
    async function load(){
      const fetchedData = await fetchData()
      
      // console.log(fetchedData)

      return setData(fetchedData)
    }
    load()
  }, [])

  const handleCountryChange = async (country) =>{
    const fetchedData = await fetchData(country)
    console.log(country);
    console.log(fetchedData);


    setCountry(country)
    setData(fetchedData)
  }

  return (
    <div className={styles.container} >
      <img src={CoronaImage} className={styles.image} alt="COVID-19" />
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart country={country} data={data} />
    </div>
  );
}
