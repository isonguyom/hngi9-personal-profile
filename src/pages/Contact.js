import { useState } from 'react';
import Footer from "../components/Footer";

 const userInputs = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    agree: false
    }

function Contact() {
   
    const [inputs, setInputs] = useState(userInputs);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs({ ...inputs, [name]: value });
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs)
    };


return (
    <div className="Contact">
    <form className='contact-form' onSubmit={handleSubmit}>
        <h2 id='contact_form_title'>Contact Me</h2>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
        <div className='names-wrapper'>
        <div className='form-control'>
            <label htmlFor='first_name'>First name</label>
                <input type="text" name="firstName" id='first_name' placeholder='Enter your first name' onChange={handleChange} /> 
        </div>
        <div className='form-control'>
            <label htmlFor='last_name'>Last name</label>
                <input type="text" name="lastName" id='last_name' placeholder='Enter your last name' onChange={handleChange} />  
        </div>
        </div>
        <div className='form-control'>
            <label htmlFor='email'>Email</label>
                <input type="email" name="email" id='email' placeholder='yourname@gmail.com' onChange={handleChange}/> 
        </div>
        <div className='form-control'>
            <label htmlFor='message'>Message</label>
                <textarea id='message' name="message" rows={8} placeholder="Send me a message and I'll reply you as soon as possible..." onChange={handleChange} />   
        </div>
        <div className='form-control'>  
           <label>
           <input type='checkbox' name="agree" id='aggreement' onChange={handleChange} />
        You agree to providing your data to Martin Isonguyo, who may contact you.</label>
    </div>
    <button type='submit' id='btn__submit'>Send message</button>
</form>
<Footer />
</div>
);
};






export default Contact;