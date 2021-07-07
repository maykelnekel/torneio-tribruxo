import { useEffect, useState } from 'react';
import './App.css';
import ChampionSelection from './Components/ChampionSelection';

function App() {
  const [students, setStudents] = useState([]);
  const [mentors, setMentors] = useState([]);
  
  function handleGetStudents (value) {
    fetch(`http://hp-api.herokuapp.com/api/characters/${value}`)
    .then((res) => res.json())
    .then((res) => setStudents(res))
    .catch((error) => console.log(error));
  }
  useEffect(() => {
    handleGetStudents('students');
    handleGetStudents('staff');
  }, []);
    
  // console.log(students)
  // console.log(mentors)

  return (
    <main className="container">
      <ChampionSelection
        students = {students}
        mentors = {mentors}
      />
    </main>
  );
}

export default App;
