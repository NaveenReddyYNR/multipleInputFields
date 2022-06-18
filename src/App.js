import { useState } from 'react';
import './App.css';

function App() {
  const [persons, setPersons] = useState([
    { name: '', age: '', phoneNumbers:[] }
  ])

  const handleFormChange = (event, index) => {
    let data = [...persons];
    data[index][event.target.name] = event.target.value;
    setPersons(data);
  }

  const submit = (e) => {
    e.preventDefault();
    console.log(persons)
  }

  const addPersonFields = () => {
    let person = {
      name: '',
      age: '',
      phoneNumbers:[ ]
    }
    setPersons([...persons, person])
  }

  const addPhoneNumberField = (personIndex) => {
    //console.log("persons", persons);
    let personsLocal = [...persons];
    

   personsLocal[personIndex]["phoneNumbers"].push("");
   //console.log("phoneNumbers", personsLocal[personIndex]["phoneNumbers"]);
   //console.log("persons", persons);
  //  this.setState(prevState => {
  //   const team = [...prevState.team];
  //   team[index] = { ...team[index], [name]: value };
  //   return { team };
  // });
   setPersons(prevState => {
    const personsDuplicate = [...persons];
    personsDuplicate[personIndex] = {...personsDuplicate[personIndex], [....personsDuplicate[personIndex].phoneNumbers]:[...personsDuplicate[personIndex].phoneNumbers, ""]};
   });
   console.log("persons", persons);
    //onChange={(e)=> props.updateCuration({...props.curation, titles:[...props.curation.titles, e.target.value] }) }
  }

  const removeFields = (index) => {
    let data = [...persons];
    data.splice(index, 1)
    setPersons(data)
  }
  const personsLength = persons.length;
  return (
    <div className="App">
      <form onSubmit={submit}>
        {persons.map((person, personIndex) => {
          return (
            <center>
            <div key={personIndex} style={{width:"200px", display:"block",border:"1px solid gray"}}>
              <input
                style={{border:"none",height:"50%",width:"80%"}}
                name='name'
                placeholder='Name'
                onChange={event => handleFormChange(event, personIndex)}
                value={person.name}
              />
              <span>
              <i className="AddField" onClick={addPersonFields}>+</i>
              <RemoveButton arrLength={personsLength} removeFields={() => removeFields(personIndex)} />
              </span>
              <input
                style={{border:"none"}}
                name='age'
                placeholder='Age'
                onChange={event => handleFormChange(event, personIndex)}
                value={person.age}
              />
              <input
                style={{border:"none"}}
                name='phoneNumbers'
                placeholder='Phone Number'
                // onChange={event => updatePhoneNumber(event, personIndex)}
                value={person.phoneNumbers}
              /><span> <i className="AddField" onClick={() => addPhoneNumberField(personIndex)}>+</i></span>
              </div>
              <button ><i className="AddField" onClick={() => removeFields(personIndex)}>Remove</i></button>
            </center>
          )
        })}
      </form>
      <center>
          {/* <button onClick={addFields}>Add More..</button> */}
          <br />
          <button onClick={submit}>Submit</button>
      </center>
    </div>
  );
}

function RemoveButton(props){
  if(props.arrLength == 1) {return (<></>)}
  else {
  return (
    <i className="AddField" onClick={props.removeFields}>-</i>
  );
  }
}

export default App;