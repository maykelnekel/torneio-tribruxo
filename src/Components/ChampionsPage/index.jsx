import './style.css'
import RenderCards from "../RenderCards"

function ChampionsPage (pickedStudents, firstTurnTrue) {

    return (
        <div className = 'champions-page'>
            <h2>Parabéns campeões</h2>
            <p className='text'>Desejo-lhes Sorte...</p>
            <div className= 'ponto'></div>
            <div className= 'ponto'></div>
            <div className= 'seta'></div>
            <div>
                <RenderCards
                    pickedStudents = {pickedStudents}
                />
            </div>
        </div>
    )
}
export default ChampionsPage