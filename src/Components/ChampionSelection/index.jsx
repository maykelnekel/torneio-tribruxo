import './style.css'
import { useState } from "react";

import InitalPage from '../InitialPage';
import ChampionsPage from '../ChampionsPage';

function ChampionSelection ({ students, mentors, setStudents, setMentors, handleGetStudents }) {
    const [pickedStudents, setPickedStudents] = useState([]);
    const [pickedMentors, setPickedMentors] = useState([]);
    const [firstTurn, setFirstTurn] = useState(true);
    const studentsLength = students.length;
    const mentorsLength = mentors.length;

    const randomNumber = (value) => Math.floor(Math.random() * value)
    
    const addStudents = () => {
        const output = []
        const comparis = []
        let number = randomNumber(studentsLength);
        output.push(students[number])
        comparis.push(output[0].name)
        comparis.push(output[0].house)

        for (let i = 0; i < 2; i++) {
            number = randomNumber(studentsLength);
            const studentsName = students[number].name
            const studentsHouse = students[number].house
            if ( !comparis.includes(studentsName) && !comparis.includes(studentsHouse)) {
                output.push(students[number])
                comparis.push(studentsName)
                comparis.push(studentsHouse)
            } else { i-- } 
        }
        return setPickedStudents(output)
    }
    
    const addMentors = () => {
        const output = [];
        const comparis = [];
        let number = randomNumber(mentorsLength);
        output.push(mentors[number]);
        comparis.push(output[0].name);

        for (let i = 0; i < 2; i++) {
            number = randomNumber(mentorsLength);
            const mentorsName = mentors[number].name;
            if ( !comparis.includes(mentorsName) ) {
                output.push(mentors[number]);
                comparis.push(mentorsName);
            } else { i-- } 
        }
        return setPickedMentors(output);
    }
    const generateParty = () => {
        document.body.scrollTo({top: 0, behavior: 'smooth'});
        document.documentElement.scrollTo({top: 0, behavior: 'smooth'});
        setFirstTurn(false);
        handleGetStudents('students', setStudents);
        handleGetStudents('staff', setMentors);
        addStudents();
        addMentors();
        
    }
    const firstTurnTrue = () => {
        if (!firstTurn) {
            return setFirstTurn(true)
        }}

    return (
        <div className='champion-selection'>
            <div className= 'selected-champions'>
                { firstTurn ?
                    <InitalPage/>
                    :
                    <ChampionsPage
                        pickedStudents = {pickedStudents}
                        pickedMentors = {pickedMentors}
                        firstTurnTrue = {firstTurnTrue}
                    />
                }
                
            </div>
            <div className = 'revel-button'>
                <button onClick={generateParty}>
                    { firstTurn ?
                    'Revelar Campeões'
                    :
                    'Novos Campeões'
                    }
                </button>
                
            </div>
        </div>
    )
}
export default ChampionSelection