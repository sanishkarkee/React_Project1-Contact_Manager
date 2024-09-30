import React, { useState } from 'react';

const ContactAdder = (props) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [location, setLocation] = useState('');

  const onFormSubmitHandler = (e) => {
    // submit gare paxi ko page load lai rokna lai
    e.preventDefault();

    //  2)  custom OBJECT to store the entered data
    // A] click me ma press gare paxi ,user entered data ko euta CUSTOM OBJECT banauxa
    const contactData = {
      id: Math.random(), //custom id banako because mapping/display garda id pass garnu parxa
      name: name,
      number: mobile,
      location: location,
    };

    if (name.length < 1 || mobile.length < 1 || location.length < 1) {
      alert('Please enter all the datas');
    } else {
      // B] tes paxi mathi ko CUSTOM OBJECT lai APP.JSX ma pass garxa (Child - Parent) by adding function as props to the CHILD COMPONENT
      props.oncontactAdded(contactData);

      // C] contact add bhaye chai input field clear garna
      setName('');
      setMobile('');
      setLocation('');
    }
  };

  return (
    <>
      {/* 1) */}
      <div className='simpleAdder'>
        Contact Adder: <br />
        <form onSubmit={onFormSubmitHandler}>
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
          <button>Add contact</button>
        </form>
      </div>
    </>
  );
};

export default ContactAdder;
