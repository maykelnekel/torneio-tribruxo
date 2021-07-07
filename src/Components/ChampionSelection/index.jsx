
import { useState } from "react";
import StudentCard from "../StudentCard"
import MentorCard from "../MentorCard"

function ChampionSelection ({ students, mentors }) {
    const [pickedStudents, setPickedStudents] = useState([]);
    const [pickedMentors, setPickedMentors] = useState([]);
    const studentsLength = students.length
    const mentorsLength = mentors.length
    const randomNumber = (value) => Math.floor(Math.random() * value)


    const filter = () => {}
    
    const addStudents = () => {
        const output = []
        for (let i = 0; i < 3; i++) {
            const number = randomNumber(studentsLength)
            output.push(students[number])
        }
        return setPickedStudents(output)
    }
    
    const addMentors = () => {
        const output = []
        for (let i = 0; i < 3; i++) {
            const number = randomNumber(mentorsLength)

            output.push(mentors[number])
        }
        return setPickedMentors(output)
    }

    return (
        <div className='champion-selection'>
            <div className= 'selected-champions'>
                <StudentCard
                    pickedStudents = {pickedStudents}
                />
            </div>
            <button onClick={addStudents}>Revelar Campeões</button>
            {console.log(pickedStudents)}
        </div>
    )
}
export default ChampionSelection