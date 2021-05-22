import Infocards from "./CardsInfo"

const ResidentInfo = ({residents}) =>{

    const idCharacters = [];
    if(residents){
    residents.forEach(urlCharacter => {
        const ids = urlCharacter.replace("https://rickandmortyapi.com/api/character/", "");
        idCharacters.push(ids)
    })
    }
    
    if(idCharacters.length > 0){

        return(
            <>
                <Infocards idCharactersArray={idCharacters} />
            </>
        )
    }

        return (
            <>
                <Infocards idCharactersArray={[]}/>
            </>
        )
}


export default ResidentInfo