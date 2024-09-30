/*
    POINTS TO REMEMBER:
    0) suru ma chai existing arrays of object data lai chai useState bata store garne ani, initial data haru lai map garera display garne
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
import './styles/app.scss';

function App() {
  const showLocalStorageData = JSON.parse(localStorage.getItem('sameidforall'));

  //NOTE: all entered data localstorage ma stored xa. Localstorage na stored bhayeko data nai show hune ho bhane paxi chai localstorage ko data lai STATE ma save gara kei farak pardaina
  const [contacts, setContacts] = useState(
    showLocalStorageData ? showLocalStorageData : []
  );

  // ContactAdder.jsx ko data haru yaha aauxa
  const addContactData = (receivedDatafromContactAdder) => {
    const allReceivedData = [receivedDatafromContactAdder, ...contacts];
    setContacts(allReceivedData);

    localStorage.setItem('sameidforall', JSON.stringify(allReceivedData));
  };

  // localstorage ra state ko data lai CLEAR garna lai
  const clearAllContacts = () => {
    localStorage.clear();
    setContacts([]);
  };

  return (
    <>
      <div className='contact_adder'>
        <ContactAdder oncontactAdded={addContactData} />
      </div>

      <div className='contact_list'>
        Contact List:
        {contacts.map((receivedDatafromUseState) => (
          <Contact
            key={receivedDatafromUseState.id}
            data={receivedDatafromUseState}
          />
        ))}
        <button onClick={clearAllContacts}>Clear all contacts</button>
      </div>
    </>
  );
}

export default App;
