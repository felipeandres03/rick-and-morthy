import '../css/styles.css';

const Back = ({state, changestate}) =>{
    
    if(document.getElementById("scroll")){
        document.getElementById('scroll').scrollTo(
            {
                left: state,
                behavior: 'smooth',
            }
        )
    }

    return(
        <div className="button-position"> 
               <button onClick={() =>
                changestate( prev =>{

                    if(prev=== 0){
                        return prev
                    }
                  
                    return state-434.50
                })
            }> 
            <i className="fas fa-angle-double-left"></i>
            </button>  
        </div>
    )
}

export default Back
