import './App.css';
import React, { useState } from 'react';
import TeamList from './Team';
import MemberCreator from './Form';

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {

  const [ members, setMembers ] = useState([]);

  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    });
  };

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }
    if (!newMember.name || !newMember.email || !newMember.role) return;

      let newTeam = [...members, newMember]
      setMembers(newTeam);
      setFormValues(initialFormValues);
  };

  // const newMemberInfo = (name, email, role) => {
  //   let newMember = {name, email, role}
  //   let updatedTeam = [...members, newMember]
  //   setMembers(updatedTeam);
  // }

  return (
    <div className="App">
      <TeamList TeamList={members}/>
      <MemberCreator
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
    </div>
  );
}

export default App;
