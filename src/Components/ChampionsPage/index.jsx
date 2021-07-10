import './style.css'
import RenderCards from "../RenderCards"

function ChampionsPage (pickedStudents) {

    return (
        <div className = 'champions-page'>
            <h2>Parabéns campeões</h2>
            <p className='texto'>Desejo-lhes Sorte...</p>
            <div className= 'ponto'>.</div>
            <div className= 'ponto'>.</div>
            <div className= 'ponto'>.</div>
            <div>
                <RenderCards
                    pickedStudents = {pickedStudents}
                />
            </div>
        </div>
    )
}
export default ChampionsPage