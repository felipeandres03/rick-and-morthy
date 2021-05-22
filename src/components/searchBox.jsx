import axios from 'axios';
import {useState, useEffect} from "react";
import ContainerLocation from "./locationContainer"
import  Header from "./header"
//este es el componente padre despues de App

const SearchDimension = () =>{

    const DimensionRam = () =>{

        let idLocation = [];
    
        for (let i = 1; i<= 108; i++){
    
          idLocation.push(i)
             
        }
        
      return(idLocation[Math.floor(Math.random() * idLocation.length)]);
    }
    const [dimension, setDimension] = useState(DimensionRam());
    const [locationObjet, setLocationObjet] = useState("")

    const [filter, setfilter] = useState("")
    const [filterDimension, setFilterDimension] = useState("");
    

    
    useEffect(() =>{
    
     axios.get(`https://rickandmortyapi.com/api/location/${dimension}`)
        .then(({data}) => {

            if(data.results){
                setLocationObjet(data.results[0])
            }
            else if(data){
                setLocationObjet(data)
            }

        });
    
    },[dimension]);
    
    useEffect(() =>{
    
        axios.get(`https://rickandmortyapi.com/api/location/?name=${filterDimension}`)
           .then(({data}) => {
   
               setfilter(data)
           });
       
       },[filterDimension]);  

    return (
        <div>
            <Header search={setFilterDimension} options={filter} foundLocation={setDimension}/>
            <ContainerLocation objetLocation={locationObjet} />
        </div>
    
    )
}


export default SearchDimension
