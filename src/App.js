import { useEffect, useState } from 'react';
import './App.css';
import ChampionSelection from './Components/ChampionSelection';


function App() {
  const [students, setStudents] = useState([]);
  const [mentors, setMentors] = useState([]);
  
  function handleGetStudents (value, state) {
    fetch(`https://hp-api.herokuapp.com/api/characters/${value}`)
    .then((res) => res.json())
    .then((res) => state(res))
    .catch((error) => console.log(error));
  }
  useEffect(() => {
    handleGetStudents('students', setStudents);
    handleGetStudents('staff', setMentors);
  }, []);
  
    
  return (
    <main className="container-main">
      <ChampionSelection
        students = {students}
        mentors = {mentors}
        setStudents = {setStudents}
        setMentors = {setMentors}
        handleGetStudents = {handleGetStudents}
      />
    </main>
  );
}

export default App;
