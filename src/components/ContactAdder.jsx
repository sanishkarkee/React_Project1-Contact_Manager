import React, { useState } from 'react';

const ContactAdder = (props) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [location, setLocation] = useState('');

  const onclickHandler = () => {
    //  2)  custom OBJECT to store the entered data
    // A] click me ma press gare paxi ,user entered data ko euta CUSTOM OBJECT banauxa
    const contactData = {
      name: name,
      number: mobile,
      location: location,
    };

    // B] tes paxi mathi ko CUSTOM OBJECT lai APP.JSX ma pass garxa (Child - Parent) by adding function as props to the CHILD COMPONENT
    props.oncontactAdded(contactData);

    // C] contact add bhaye chai input field clear garna
    setName('');
    setMobile('');
    setLocation('');
  };

  return (
    <>
      {/* 1) */}
      <div className='simpleAdder'>
        Contact Adder: <br />
        <input
          type='text'
          value={name}
          placeholder='Contact Name'
          onChange={(e) => {
            setName(e.target.value);
            // console.log(e.target.value);
          }}
        />
        <input
          type='text'
          value={mobile}
          placeholder='Mobile'
          onChange={(e) => {
            setMobile(e.target.value);
          }}
        />
        <input
          type='text'
          value={location}
          placeholder='Location'
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
        <br />
        <br />
        <button onClick={onclickHandler}>Click me!</button>
      </div>
    </>
  );
};

export default ContactAdder;
