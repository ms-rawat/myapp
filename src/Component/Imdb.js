import { useEffect,useState } from "react";
export default function Imdb(){
    let [pokemon,setpokemon]=useState([]);

    useEffect(()=>{
        fetchpokemondetail();
    },[])
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ddeeaee416mshf6dd51a97d96c48p1f0716jsn303a9a4c2cac',
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
    };
     const fetchpokemondetail = async()=>{
        let res = await fetch('https://imdb8.p.rapidapi.com/auto-complete?q=iron', options);
        let resdata = await res.json();
    //   console.log(resdata.d)
      setpokemon(resdata.d)
      console.log(pokemon)
      pokemon.map((item)=>{
       
        
      })

        
     }
     return(
        <>  
        
        <h1>hello</h1>
        
     {
          pokemon.map((item)=>
          (
           <p> 
            <p>
        {item.id}
        </p>
        <p>
        {item.l}
        </p>
        <p>
        <img  src={item.i.imageUrl} alt="thoe" />
        </p>
        
        
           </p>
           
          )
          
          )
     }
        </>
     )
     }