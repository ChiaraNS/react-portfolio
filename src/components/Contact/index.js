import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  };


  return (
    <div>
      <p className="contact-me">Contact Me</p>
      <hr />
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="field">
          <label className="label" htmlFor="name">Name</label>
          <input className="input" type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div className="field">
          <label className="label" htmlFor="email">Email</label>
          <input className="input" type="email" name="name" defaultValue={email} onBlur={handleChange} />
        </div>
        <div className="field">
          <label className="label" htmlFor="name">Message</label>
          <textarea className="teaxtarea" rows="5" name="message" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="is-danger">{errorMessage}</p>
          </div>  
        )}
        <button className="button" data-testid="button" type="submit">Submit</button>
        </form>  
    </div>
  );
}  
//   return (
//     <section className='container'>
//       <h1>Contact me</h1>
//       <div id="contact" >
//         <p>Email address: <a href="mailto:cns3.22202@gmail.com">cns3.22202@gmail.com</a></p>
//         <p>GitHub: <a href="https://github.com/ChiaraNS">ChiaraNS</a></p>
//         <p>LinkedIn: <a href="https://www.linkedin.com/in/chiara-schafer-9659501a9/">chiara-schafer</a></p>
//       </div>
//     </section>
//   );
// }

export default Contact;
