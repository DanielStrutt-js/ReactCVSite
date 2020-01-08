import React from 'react';
import emailjs from 'emailjs-com';
import FlexView from 'react-flexview';
import './EmailForm.css'

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('5156967712', 'template_tQhXFAes', e.target, 'user_Kk9ya6FUBjR0uc5o2qpNs')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (

    <FlexView column='true' >
    <form className="contact-form" onSubmit={sendEmail}>
      <label>Contact number</label>
      <input type="Contact Number" name="contact_number" placeholder="Number"/>
      <label>Name</label>
      <input type="text" name="user_name" placeholder="Name" />
      <label>Email</label>
      <input type="email" name="user_email" placeholder="Email"/>
      <label>Message</label>
      <textarea name="message" placeholder="Write your message here..." />
      <input type="submit" value="Send" />
    </form>
    </FlexView>
  );
}