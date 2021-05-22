import "../css/styles.css";
import reload from "../reloadV2.gif"

const PrintCards = ({objetsProtagonist}) =>{

    if(objetsProtagonist.length === 0){

        return(
          <div>
            <div className="alert">
             <h2>Rick ya estuvo aqui, no quendan habitantes</h2>
            </div>
            <div className="reload">
              <button onClick={() => {window.location.reload()} }>
                <img src={reload} alt="reload"/>
              </button>
            </div>  
          </div>
          
        )
    }

    return(
      <div className="container-cards" id='scroll'>
          {  
          objetsProtagonist.map((element) =>{
              return(
                <div className="col-12"  key={element.id}>
                   <div className="card">
                    <div className="col-7">
                        <img className="character" src={element.image} alt="character"/>
                        <div className="description"> <span>status:</span> {element.status} </div>
                    </div>
                    <div className="col-3">
                      <div>
                      <div className="info-character">
                           <span>Name:</span> {element.name}
                          
                      </div>
                      <div className="info-character">
                           <span>origin:</span> {element.origin.name}
                      </div>
                        <div className="info-character">
                            <span>Caps:</span> <br/>
                            ({element.episode.length})
                        </div>
                      </div>       
                    </div>
                </div>

                </div>
               
              )
                      
                  })
          }
      </div>
  )

}

export default PrintCards