function Contact() {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Form submitted')
      };

return (
    <form className='Contact' onSubmit={handleSubmit}>
        <h2 id='contact_form_title'>Contact Me</h2>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
        <div className='names-wrapper'>
        <div className='form-control'>
            <label htmlFor='first_name'>First name</label>
                <input type="text" id='first_name' placeholder='Enter your first name' /> 
        </div>
        <div className='form-control'>
            <label htmlFor='last_name'>Last name</label>
                <input type="text" id='last_name' placeholder='Enter your last name' />  
        </div>
        </div>
        <div className='form-control'>
            <label htmlFor='email'>Email</label>
                <input type="email" id='email' placeholder='yourname@gmail.com' /> 
        </div>
        <div className='form-control'>
            <label htmlFor='message'>Message</label>
                <textarea id='message' placeholder="Send me a message and I'll reply you as soon as possible..." />   
        </div>
        <div className='form-control'>  
           <label>
           <input type='checkbox' id='aggreement' />
        You agree to providing your data to Martin Isonguyo, who may contact you.</label>
    </div>
    <button type='submit' id='btn__submit'>Send message</button>
</form>
);
};






export default Contact;