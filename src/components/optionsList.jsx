import {useEffect} from 'react'

const OptionDimension = ({resultSearch, selectLocation, stateForprint}) => {
    
    const dimensionssearch = resultSearch.results;


    const handleONchange = (event) =>{

        let valueSelect = event.target.value;
            selectLocation(valueSelect)
        
    }

   useEffect(() =>{
    if(document.getElementById("select")){ 
        if(stateForprint.length>=3){
            document.getElementById("select").classList.remove("d-none")

        }
        else if(stateForprint.length<3){
            document.getElementById("select").classList.add("d-none")
        } 

    }
   }, [stateForprint])



    if(resultSearch){
        return(

            <>
                <select className="select-list d-none" onChange={handleONchange} select={clearImmediate()} id="select"> 
                    <option value="">elije tu dimension </option>
                    {
                       dimensionssearch.map((option, index) =>{
                            return(
                                <option key={index} value={`?name=${option.name}`}>{option.name}</option>
                            )
                       })
                    }
                </select>
            </>
        )
    }
    return(
        <select>
             <option value="">elije tu dimension</option>
        </select>
    )
}

export default OptionDimension