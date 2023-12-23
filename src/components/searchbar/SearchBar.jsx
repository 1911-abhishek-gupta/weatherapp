import React, { useRef } from 'react'
import "./searchbar.css";
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

const SearchBar = ({location,setLocation,data,setData}) => {

    //495942bbfc370ed7e80b4ed2bc478d39

    const loc = useRef();

    const handleClick = async(e) =>{
        e.preventDefault();

        setLocation(loc.current.value);

        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${loc.current.value}&appid=495942bbfc370ed7e80b4ed2bc478d39&units=metric`;
        try{
            const res = await axios.get(url);
            console.log(res.data);
            setData(res.data);

        }catch(err){
            console.log(err);
        }

    }


  return (
    <div className='searchBar'>
    <div className="searchBarName">
        <div className="location">
            <ShareLocationIcon/>
            <span className='locationName'>{data.city?.name},{data.city?.country}</span>
        </div>
        <div className="latAndLon">
            <p className='latiAndLong'>{data.city?.coord.lat} & {data.city?.coord.lon}</p>
        </div>
    </div>
        <div className="searchTab">
            <input className="searchTabInput" type="text" placeholder='Search your city here ....' ref={loc}/>
            <button className='searchTabBUtton' onClick={handleClick}>
                <SearchIcon/>
            </button>
        </div>
    </div>
  )
}

export default SearchBar