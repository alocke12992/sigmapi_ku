import React from 'react';
import { Input, Form } from './styles';
import { Container, Section, Button } from 'styledComponents';

class ContactForm extends React.Component {
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
      <Section dark> 
      <Container>
      <Form className="form" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <p>
      
            <Input placeholder="Name" type="text" name="name" />

        </p>
        <p>
          
            <Input type="email" name="email" />
        </p>
        <p>
          
            <Input type="text" name="subject" />
        </p>
        <p>
        
          <textarea name="message">
          </textarea>
        
        </p>
        <p>
          <Button type="submit">Send</Button>
        </p>
      </Form>
      </Container>
      </Section>
      )
    }
  }
  
  export default ContactForm;