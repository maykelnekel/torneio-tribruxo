import './style.css'
import RenderCards from "../RenderCards"

function ChampionsPage (pickedStudents) {

    return (
        <div className = 'champions-page'>
            <h2>Parabéns campeões</h2>
            <p>Desejo Sorte</p>
            <div>
                <RenderCards
                    pickedStudents = {pickedStudents}
                />
            </div>
        </div>
    )
}
export default ChampionsPage