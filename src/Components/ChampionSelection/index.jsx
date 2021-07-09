import './style.css'
import { useState } from "react";
import StudentCard from "../StudentCard"

function ChampionSelection ({ students, mentors, setStudents, setMentors, handleGetStudents }) {

    const [pickedStudents, setPickedStudents] = useState([]);
    const [pickedMentors, setPickedMentors] = useState([]);
    const studentsLength = students.length
    const mentorsLength = mentors.length

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
        const output = []
        const comparis = []
        let number = randomNumber(mentorsLength);
        output.push(mentors[number])
        comparis.push(output[0].name)

        for (let i = 0; i < 2; i++) {
            number = randomNumber(mentorsLength);
            const mentorsName = mentors[number].name
            if ( !comparis.includes(mentorsName) ) {
                output.push(mentors[number])
                comparis.push(mentorsName)
            } else { i-- } 
        }
        return setPickedMentors(output)
    }
    const generateParty = () => {
        handleGetStudents('students', setStudents);
        handleGetStudents('staff', setMentors);
        addStudents()
        addMentors()
    }

    return (
        <div className='champion-selection'>
            <div className= 'selected-champions'>
                <StudentCard
                    pickedStudents = {pickedStudents}
                    pickedMentors = {pickedMentors}
                />
            </div>
            <div className = 'revel-button'>
                <button onClick={generateParty}>Revelar Campeões</button>
            </div>
        </div>
    )
}
export default ChampionSelection