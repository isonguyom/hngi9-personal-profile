import React from 'react';


function Contact() {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Form submitted')
      };

return (
<form className='Contact' onSubmit={ handleSubmit }>
    <h2>Hello, Contact</h2>
    <label>First name
        <input type="text" id='first_name' placeholder='Enter your first name'/>
      </label>
    <label>Last name
        <input type="text" id='last_name' placeholder='Enter your last name'/>
      </label>
    <label>Email
        <input type="email" id='email' placeholder='yourname@gmail.com'/>
      </label>
    <label>Message
    <textarea id='message' placeholder="Send me a message and I'll reply you as soon as possible..." />
      </label>
    <label>
    <input type='checkbox' id='aggreement'/>
    You agree to providing your data to Martin Isonguyo, who may contact you.
      </label>
    <button type='submit' id='btn__submit'>Submit</button>
</form>
);
};






export default Contact;