import { Button, Input } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
const Main=()=>{
    const [city,setcity]=useState('')
    const Handlechange=(event)=>{
        setcity(event.target.value)
        console.log(city)
    }
    const Apifetch=async()=>{
        const key="30a17a56b0b665ed712ef599f4b5bf25"
        const unit="metric"
        const fetch=await axios.get("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+key+"&units="+unit);
        console.log(fetch)
        const temp=fetch.data.main.temp;
        const name=fetch.data.name;
        setTemp(temp)
        setName(name)
    }
    const [temp,setTemp]=useState("")
    const [name,setName]=useState("")
    const [toggle,settoggle]=useState(true)
    const Toggling=()=>{settoggle(!toggle)}
    const Handleclick=()=>{
        Apifetch()
        Toggling()
    }
    const Handleback=()=>{
        Toggling()
    }
    return(
        <div className='main'>
            <h1>WEATHER APP</h1>
            <img src='https://th.bing.com/th/id/R.2a0d85176c2920afc72f2a3c439eb270?rik=3iXEzFKJ18JRiw&riu=http%3a%2f%2flogok.org%2fwp-content%2fuploads%2f2015%2f09%2fGoogle-logo-2015-G-icon.png&ehk=rdZ4hRCI7YkCC6Oc1jOO8Ald0l%2fiG2FplTA7YYFqQfY%3d&risl=&pid=ImgRaw&r=0' alt='Google'></img>
            <p>Powered By Google</p>
            {toggle?
            <form className='form'>
            <Input type='text' placeholder='Enter the city to Search' onChange={Handlechange}></Input>
            <br></br>
            <br></br>
            <Button variant="contained" onClick={Handleclick}>Search</Button>
            <br></br>
            </form> :
            <>
            <h1>{name}</h1>
            <h1>Temperature:{temp}</h1>
            <Button variant="contained" onClick={Handleback}>Back</Button>
            </>}
            
        </div>
    )
}
export default Main;