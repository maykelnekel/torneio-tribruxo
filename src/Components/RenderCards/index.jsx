import './style.css'
import VanillaTilt from 'vanilla-tilt';


function StudentCard ({ pickedStudents}) {
    


    VanillaTilt.init(document.querySelectorAll(".student-card"), {
		max: 25,
		speed: 350
        
	});;
    VanillaTilt.init(document.querySelectorAll(".mentor-card"), {
		max: 25,
		speed: 400
	});;

    const age = (value) => value === '' ? 'Idade desconhecida' : 1994 - value + ' anos'
    return (
        <div className = 'container' >
            
            {pickedStudents.pickedStudents.map((item, index) =>
            <div className = "container-cards" key = {index}>
                <div className='student-card'  data-tilt data-tilt-scale="1.1">
                    <div className='student-card-intern'> 
                        <h4 className = 'student-title'>Campeão</h4>
                        <img className = 'student-img' src={item.image} alt = {item.name}/>
                        <h3 className = 'student-name'>{item.name}</h3>                   
                        <p className = 'student-age'>{age(item.yearOfBirth)}</p>
                        <p className = 'student-house'>{item.house}</p>
                    </div>
                </div>
                <div className='mentor-card' data-tilt data-tilt-scale="1.1">
                    <div className='mentor-card-intern'>
                        <h4 className = 'mentor-title'>Mentor</h4>
                        <img className = 'mentor-img' src={pickedStudents.pickedMentors[index].image} alt = {item.name}/>
                        <h3 className = 'mentor-name'>{pickedStudents.pickedMentors[index].name}</h3>                   
                        <p className = 'mentor-house'>{pickedStudents.pickedMentors[index].house === ''
                                    ?
                                    'Casa desconhecida'
                                    :
                                    pickedStudents.pickedMentors[index].house
                                }
                        </p>
                    </div>
                </div>  
                
            </div>
            )}
        </div>
    )
}
export default StudentCard