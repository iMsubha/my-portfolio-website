import emailjs from "emailjs-com";
import React from "react";
import { Container, Form } from "react-bootstrap";
import HeaderTop from "../HeaderTop/HeaderTop";
const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_ls0f40i",
        e.target,
        "user_mmkn3f4k08qu0exoI9Bz6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <Container>
      <HeaderTop />
      <Form 
      style={{backgroundColor:'#FDD778'}}
      className="contact-form mb-5 p-5 rounded-lg mt-5"
       onSubmit={sendEmail}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="user_name"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="user_email"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <input type="submit" value="Send" className="px-3" />
      </Form>
    </Container>
  );
};

export default Contact;
