import React from 'react';

class Contactform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '', 
      email: '',
      message: ''
    }
    
  }
  
  render() {
    return (
      // <div>
      // <form>
      // <label>
      // <input type="text" name="name" value="Your Name"/>
      // <input type="text" name="email" value="Your Email"/>
      // <input type="text" name="subject" value="Subject"/>
      // <input type="text" name="message" value="Message"/>
      // </label>
      // <input type="submit" value="Submit" />
      // </form>
      // </div>
      <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="contact" />
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
  
    <label>Subject: <input type="text" name="subject" /></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
      )
    }
  }

  export default Contactform;