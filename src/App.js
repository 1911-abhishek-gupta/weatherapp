
import { useEffect, useState } from 'react';
import './App.css';
import ResultBar from './components/resultBar/ResultBar';
import SearchBar from './components/searchbar/SearchBar';
import Topbar from "./components/topbar/Topbar"
import axios from "axios";

function App() {

  const [location,setLocation] = useState('Delhi');
  const [data,setData] = useState({});

  useEffect(()=>{

    const handleClick = async() =>{

      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=495942bbfc370ed7e80b4ed2bc478d39&units=metric`;
      try{
          const res = await axios.get(url);
          setData(res.data);

      }catch(err){
          console.log(err);
      }

  };

  handleClick();

  },[location])

  console.log(location);

  return (
        <div className="app">
          <Topbar setLocation={setLocation}/>
          <SearchBar location={location} setLocation={setLocation} data={data} setData={setData}/>
          <ResultBar data={data}/>
        </div>
  );
}

export default App;
