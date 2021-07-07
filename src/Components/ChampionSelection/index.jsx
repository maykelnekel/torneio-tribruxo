
import { useState } from "react";
import StudentCard from "../StudentCard"
import MentorCard from "../MentorCard"

function ChampionSelection ({ students, mentors }) {
    const [pickedStudents, setPickedStudents] = useState([]);
    const [pickedMentors, setPickedMentors] = useState([]);

    const randomNumber = (array) => Math.floor(Math.random() * array.length)

    const randomChoice = (array, setArray) => {
        array.map((element, index) => {
            ( randomNumber(array)

            )

        })
            
    }

    return (
        <div className='champion-selection'>
            <div className= 'selected-champions'>
                <StudentCard
                    pickedStudents = {pickedStudents}
                />
            </div>
            <button>Revelar Campeões</button>
        </div>
    )
}
export default ChampionSelection