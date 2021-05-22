import {useState, useEffect} from "react";
import ContainerResidents from "./ResidentContainer";
import Next from "./buttonNext"
import Back from "./buttonBack"

const InfoLocation = ({objetLocation}) =>{

    const [valueScroll, setValueScroll] = useState(0);
    const [residents, setResidents] = useState([]);

   
    useEffect(() => {
        const residents = objetLocation.residents;
        setResidents(residents);

    },[objetLocation]) 


    
    const limit = () =>{
        if(residents){
            const limit = residents.length-1
            const result =  limit * 434.50;
            return(result)
        }
    }
   
    
    if(residents === []){

        return (

            <div>
                <ContainerResidents ResidentArray={residents} />
                <h1>{objetLocation.name}</h1>
                <h2>{objetLocation.dimension}</h2> 
            </div>
        )

    }
  
    return (
            <div className="location-container">
                <div className="row">
                    <div className="col-2">
                       <Back state={valueScroll} changestate={setValueScroll} />
                    </div>
                    <div className="col-target">
                        <ContainerResidents ResidentArray={residents} />
                    </div>
                    <div className="col-2">
                      <Next  state={valueScroll}  changestate={setValueScroll} limit={limit()}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h1>{objetLocation.name}</h1>
                        <h2>{objetLocation.dimension}</h2> 
                    </div>
                </div>
            </div>
        )
}




export default InfoLocation
