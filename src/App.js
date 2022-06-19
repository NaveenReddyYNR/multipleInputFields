import React from "react";

function Persons(props) {
  const [persons, setPersons] = React.useState([
    {
      name: "",
      age: "",
      phoneNumbers: [""],
    },
  ]);

  const handleFormChange = (event, index) => {
    let data = JSON.parse(JSON.stringify(persons));
    data[index][event.target.name] = event.target.value;
    setPersons(data);
  };

  const addPersonFields = () => {
    let person = {
      name: "",
      age: "",
      phoneNumbers: [""],
    };
    setPersons([...persons, person]);
  };

  const updatePhoneNumber = (event, phoneIndex, personIndex) => {
    let data = JSON.parse(JSON.stringify(persons));
    let person = data[personIndex];
    let phoneNumbers = person.phoneNumbers;
    phoneNumbers[phoneIndex] = event.target.value;
    setPersons(data);
  };

  const addPhoneNumberField = (personIndex) => {
    let data = JSON.parse(JSON.stringify(persons));
    let person = data[personIndex];
    let phoneNumbers = person.phoneNumbers;
    phoneNumbers.push("");
    setPersons(data);
  };

  return (
    <div>
      {persons?.map((person, personIndex) => {
        return (
          <div
            key={personIndex}
            style={{
              width: 210,
              display: "block",
              border: "1px solid black",
              marginBottom: 48,
              marginLeft: 25,
            }}
          >
            <div style={{ display: "flex", marginBottom: 16 }}>
              <input
                style={{ height: 36, width: 200, border: "1px solid gray" }}
                name="name"
                placeholder="Name"
                value={person.name}
                onChange={(event) => handleFormChange(event, personIndex)}
              />
              <span style={{ padding: 10, fontSize: 20, cursor: "pointer" }}>
                <i onClick={addPersonFields}> + </i>
              </span>
            </div>
            <input
              style={{
                height: 36,
                width: 200,
                border: "1px solid gray",
                marginBottom: 16,
              }}
              name="age"
              placeholder="Age"
              value={person.age}
              onChange={(event) => handleFormChange(event, personIndex)}
            />
            {person.phoneNumbers?.map((phone, phoneIndex) => {
              return (
                <div style={{ display: "flex", marginBottom: 16 }}>
                  <input
                    style={{ height: 36, width: 200, border: "1px solid gray" }}
                    name="phoneNumbers"
                    value={phone}
                    placeholder="Phone Number"
                    onChange={(event) =>
                      updatePhoneNumber(event, phoneIndex, personIndex)
                    }
                  />
                  <span
                    style={{ padding: 10, fontSize: 20, cursor: "pointer" }}
                  >
                    <i onClick={() => addPhoneNumberField(personIndex)}> + </i>
                  </span>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Persons;
