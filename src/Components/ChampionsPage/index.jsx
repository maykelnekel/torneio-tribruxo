import './style.css'
import RenderCards from "../RenderCards"
import ChampionsPageMesage from './championsPageMessage'

function ChampionsPage (props) {

    return (
        <div className = 'champions-page'>
            <ChampionsPageMesage/>
            <RenderCards
                pickedStudents = {props}
            />
            <button className='initial-page-button'  onClick={props.firstTurnTrue}>Pagina Inicial</button>
            </div>
        
    )
}
export default ChampionsPage