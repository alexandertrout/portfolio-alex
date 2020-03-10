import React, { Component } from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
  margin: 5vw 25vw;
  width: 50vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 3fr 1fr;
  grid-gap: 10px;
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
    this.setState({name: "", number: "", email: "", message: ""})
    console.log("SUBMIT!");
  }

  render() {
    console.log(this.state)
    return (
      <div>
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