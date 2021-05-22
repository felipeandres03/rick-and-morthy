import "../css/styles.css";
import logo from '../logoV2.png';
import OptionDimension from './optionsList';
import {useState} from 'react'


const Header = ({search, options, foundLocation, }) =>{
    
    const[ valueInput, SetvalueInput ] = useState("")

    
    const handleOnchage = (event) =>{
        
        SetvalueInput (event.target.value)
        
        if(valueInput.length>=3){
            search(valueInput)
        }
    }

    
    return(
        <div className="header">
            <div className="logo">
                <img src={logo} alt="logo" title='ok'/>
            </div> 
            <div className="search">
                <input type="text" id="search" onChange={handleOnchage} required/>
                <label htmlFor="search" type="button"> 
                    <i className="fab fa-searchengin"></i>
                </label>

                <div className="options">
                <OptionDimension resultSearch={options} selectLocation={foundLocation} stateForprint={valueInput}/>
                </div>
            </div>              
        </div>
    )
} 


export default Header
