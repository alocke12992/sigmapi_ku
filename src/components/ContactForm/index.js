import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Form, Button, Input, useStyles } from './styles';
import { Container, Section, colors } from 'styledComponents';

function ContactForm() {
  const classes = useStyles();
  return (
    <Section dark>
      <Container>
        <Form className="form" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
          <h1>Contact us</h1>
          <p>If you're interested in learning more about joining Sigma Pi, check out our <Link to="/join">Recruitment page</Link> and sign up via one of the interest forms there.</p>
          <input type="hidden" name="form-name" value="contact" />
          <Input
            className={classes.margin}
            type="text"
            name="name"
            label="Name"
            variant="outlined"
            required
          />
          <Input
            type="email"
            name="email"
            className={classes.margin}
            label="Email"
            variant="outlined"
            required
          />
          <Input
            type="text"
            name="subject"
            className={classes.margin}
            label="Subject"
            variant="outlined"
            required
          />
          <Input
            type="text"
            name="message"
            multiline
            rowsMax="4"
            rows="3"
            className={classes.margin}
            label="Message"
            variant="outlined"
            required
          />
          <Button type="submit">Send</Button>
        </Form>
      </Container>
    </Section>
  )
}

  export default ContactForm;