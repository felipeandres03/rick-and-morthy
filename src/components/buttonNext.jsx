import '../css/styles.css';

const Next = ({state, changestate, limit }) =>{

    if(document.getElementById("scroll")){
        document.getElementById('scroll').scrollTo(
            {
                left: state,
                behavior: 'smooth',
            },
        )
    }
    return(
        <div className="button-position">
            <button onClick={() => 
                changestate( prev =>{

                    if(prev===limit){
                        return prev
                    }

                    return state+434.50
                })}> 
               <i className="fas fa-angle-double-right"></i>
            </button>  
        </div>
    )
}

export default Next

