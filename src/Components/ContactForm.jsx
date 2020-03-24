import React, { Component } from 'react';
import styled from 'styled-components';
import axios from "axios";

const SomeText = styled.h3`
margin: 0;
padding: 0;
  color: grey;
  @media only screen and (max-width: 600px) {
  font-size: 14px;
  }
`

const Container = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0px 10px;
`

const FormContainer = styled.form`
  margin: 2vw 25vw;
  width: 50vw;
  height: 40vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 3fr 1fr;
  grid-gap: 10px;
  @media only screen and (max-width: 600px) {
  margin: 2vw 10vw;
  width: 80vw;
  }
`

const NameInput = styled.input`
  grid-column: 1/2;
  grid-row: 1/2;
  padding: 4px;
  border-color: black;
`
const NumberInput = styled.input`
  grid-column: 2/4;
  grid-row: 2/3;
  padding: 4px;
  border-color: black;
`
const EmailInput = styled.input`
  grid-column: 1/3;
  grid-row: 3/4;
  padding: 4px;
  border-color: black;
`

const MessageInput = styled.input`
  grid-column: 1/4;
  grid-row: 4/5;
  padding: 4px;
  border-color: black;
`
const SendButton = styled.button`
  grid-column: 3/4;
  grid-row: 5/6;
  background-color: black;
  color: white;
`

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
    email: "",
    message: ""
  }

  handleChange = event  => {
    const key = event.target.id;
    const input = event.target.value;
    this.setState({[key]: input});
  };

  handleSubmit = event => {
    event.preventDefault();
    const {name, email, number, message} = this.state;
    if (name !== "" && email !== "" && number!== "" && message !== ""){
      const data = {name, number, email, message, from: 'alex-portfolio'};
      axios.post(`https://portfolio-backend-alex.herokuapp.com/api/mail`, data)
           .then(response => {
              console.log(response);
              this.setState({name: "", number: "", email: "", message: ""})
            }).catch(error => {
              console.log(error);
              this.setState({name: "", number: "", email: "", message: "There was an error sending your message"})
            });
    } else {
      alert("Please fill in all form fields before attempting to send me a message!");
    }
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <Container>
        <SomeText>PLEASE ENTER A MESSAGE USING THE FORM BELOW TO CONTACT ME</SomeText>
        </Container>
        <FormContainer onSubmit={this.handleSubmit}>
          <NameInput type="text" placeholder="Name" id="name" value={this.state.name} onChange={this.handleChange}/>
          <NumberInput type="text" placeholder="Contact Number" id="number" value={this.state.number} onChange={this.handleChange} />       
          <EmailInput type="text" placeholder="Email" id="email" value={this.state.email} onChange={this.handleChange}/>
          <MessageInput type="text" placeholder="Message" id="message" value={this.state.message} onChange={this.handleChange}/>
          <SendButton>SEND!</SendButton>
        </FormContainer >
      </div>
    );
  }
}

export default ContactForm;