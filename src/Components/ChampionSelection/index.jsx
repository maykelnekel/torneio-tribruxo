
import { useState } from "react";
import StudentCard from "../StudentCard"


function ChampionSelection ({ students, mentors }) {
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

        for (let i = 0; i < 2; i++) {
            number = randomNumber(studentsLength);
            const studentsName = students[number].name
            if ( !comparis.includes(studentsName) ) {
                output.push(students[number])
                comparis.push(studentsName)
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
        addStudents()
        addMentors()
    }

    return (
        <div className='champion-selection'>
            <div className= 'selected-champions'>
                <StudentCard
                    pickedStudents = {pickedStudents}
                    addStudents = {addStudents}
                    pickedMentors = {pickedMentors}
                    addMentors = {addMentors}
                />
            </div>
            <div>
                <button onClick={generateParty}>Revelar Campeões</button>
            </div>
        </div>
    )
}
export default ChampionSelection