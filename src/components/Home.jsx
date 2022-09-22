import React from "react";

import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'

import Container from "./Container";
import SearchBar from "./SearchBar";
import Grid from "./Grid";
import Card from "./Card";

import { fetchHeros } from "../libs/util";
import { Card1 } from "./card1";
 import img1 from '../images/ironman2.gif'
 import img2 from '../images/hulk.gif'
 import img3 from '../images/deadpool.gif'

const IMG_FANTASTIC = "portrait_fantastic";



export default function Home() {
    //carddiplaying
const[url1,setUrl]=useState('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=316eddf85f0da7db4201a24fec3933da&hash=eee9508ff09a9ae8c71c31d3cb18d2ec')
const[item, setItem] = useState();
 useEffect(()=>{

     const fetch =async()=>
     {
         const res = await axios.ge(url1)
        setItem(res.data.data.results)
     }
     fetch();

 },[url1])
 /////
  const [heroes, setHeroes] = useState([]);
  const [error, setError] = useState();

  let cards;

  const handleClick = async (e, args) => {
    e.preventDefault();
    if (args === "") return;

    try {
      return await fetchHeros(args);
    } catch (err) {
      return err;
    }
  };

  if (heroes) {
    cards = heroes.map((hero) => (
      <Card
        name={hero.name}
        key={hero.id}
        id={hero.id}
        thumbnail={`${hero.thumbnail.path}/${IMG_FANTASTIC}.${hero.thumbnail.extension}`}
      />
    ));
  
  }

  return (
    <Container>
      <div className="row">
      <div className="column-left">
      <img src={img2} alt=""/> 

      </div>
      <div className="column-center title">
         <img src={img1} alt=""/> 
        <h1>Search Your Marvel Hero</h1>
      </div>
      <div className="column-right">
      <img src={img3} alt=""/> 
      </div>
      </div>
      
      <SearchBar
        handleClick={handleClick}
        setHeroes={setHeroes}
        setError={setError}
      />
       {/* <h2>Results</h2>  */}
      <div className='content'>
    
    {
      <Card1 data={item}/>
    }

   </div>
   <div className="content">
      <Grid>{cards ? cards : null}</Grid></div>



    </Container>
   
  );
}