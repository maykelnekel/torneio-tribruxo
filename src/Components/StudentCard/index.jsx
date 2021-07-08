import './style.css'

function StudentCard ({ pickedStudents, addStudents, pickedMentors, addMentors }) {
    const age = (value) => value === '' ? 'desconhecido' : 1994 - value

    console.log(pickedStudents)
    return (
        <div className = 'container-cards'>
            {pickedStudents.map((item, index) => 
                <div className='student-card' key = {index}>
                    <img className = 'student-img' src={item.image} alt = {item.name}/>
                    <h3>Nome: {item.name}</h3>                   
                    <p>Idade: {age(item.yearOfBirth)}</p>
                    <p>Casa: {item.house}</p>
                    <div className='mentor-card' >
                        <div key = {index}>
                            <img className = 'mentor-img' src={pickedMentors[index].image} alt = {item.name}/>
                            <h3>Nome: {pickedMentors[index].name}</h3>                   
                            <p>Casa: {pickedMentors[index].house}</p>
                        </div>
                    </div>
                </div>
                
            )}
           
        </div>
    )
}
export default StudentCard