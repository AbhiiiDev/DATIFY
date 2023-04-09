import React from 'react'
import TinderCard from "react-tinder-card";
import { useState,useEffect } from 'react'
import "./TinderCard.css"
import axios from '/src/axios.js';

function TinderCards() {

    const [people, setPeople] = useState([]);
    console.log(people);

useEffect(() => {
async function fetchData(){
    const req=await axios.get("/tinder/cards");
    setPeople(req.data);


}
fetchData();
}, [])

    const swiped = (direction, nameToDelete) => {
        console.log("removing:" + nameToDelete);
        setLastDirection(direction);
    }

    const outOfFrame = (name) => {
        console.log(name + "left the screen!");
    };




    return (
        <div className='tinderCards'>
          <div className='tinderCards_cardContainer' >
            {  people.map((people)=>(
                <TinderCard className='swipe'
                key={people.name}
                preventSwipe={["up","down"]}
                onSwipe={(dir)=> swiped(dir,people.name)}
                onCardLeftScreen={()=>outOfFrame(people.name)}
                >
<div style={{backgroundImage:`url(${people.imgUrl})`}}
className="card"
>
    <h3>{people.name}</h3>
</div>
         </TinderCard>
            ))}
            </div> 
        </div>
    )
}

export default TinderCards
