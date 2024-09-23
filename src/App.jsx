/*
    POINTS TO REMEMBER:
    1) Project start garnu bhanda paila chai euta DUMMY OBJECT banayera tya static data enter garne
       ani tyo static data haru use garera chai Components haru banaune ani paxi static data lai dynamic data le replace garne
    2) parent -child = > pass props
       child -parent  => create funcn in parent and pass them as props to child, ani child ma tyo function cal garera tes bhitra data pass garne
    3) OPERATIONS:
          * user le data enter garxa  ⇒ (In ContactAdder.jsx)
          * enter gareko data bata custom object banxa  ⇒ (In ContactAdder.jsx)
          * Custom object Parent component(App.jsx) ma pass hunxa  ⇒ (from ( ContactAdder.jsx  to  App.jsx))
          * Custom object ko data list ma display garinxa  ⇒ (In App.jsx)
*/

import { useState } from 'react';
import ContactAdder from './components/ContactAdder';
import Contact from './components/Contact';
import './styles/app.css';
import { Component } from 'react';

function App() {
  const initialContacts = [
    {
      name: 'John',
      number: '1111',
      location: 'Nepal',
    },
    { name: 'Sanish', number: '2222', location: 'Australia' },
    { name: 'Ram', number: '3333', location: 'USA' },
  ];

  const [contacts, setContacts] = useState(initialContacts);

  const addContactData = (CustomObjectData) => {
    setContacts([CustomObjectData, ...contacts]);
  };

  return (
    <>
      <div className='contact_adder'>
        <ContactAdder oncontactAdded={addContactData} />
      </div>

      <div className='contact_list'>
        Contact List:
        {contacts.map((receivedData) => (
          <Contact data={receivedData} />
        ))}
      </div>
    </>
  );
}

export default App;
