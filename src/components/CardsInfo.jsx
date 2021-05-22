import {useState, useEffect} from "react";
import axios from 'axios';
import  PrintCards  from "./printcads";



const Infocards = ({idCharactersArray}) => {

    const[protagonists, setProtagonists]= useState([]);


    
    useEffect(() =>{

        let url = `https://rickandmortyapi.com/api/character/${idCharactersArray}`
       
        axios.get(url)
            .then(({data})=>{
                if(data.results){
                    setProtagonists([]) 
                    return null
                } 

                if(data.length){
                        const [...characters] = data;
                       setProtagonists(characters);
                } 
                else{
                    const character = [data];
                    setProtagonists(character)  
                }
                        
            })
            .catch((err) => {return(err)});
        
    },[idCharactersArray,]);

    return ( 
        <>
            <PrintCards objetsProtagonist={protagonists} />
        </>
    )
}


export default Infocards




                   
   