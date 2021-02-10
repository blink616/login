import { Form, FormGroup, Label, Input } from "reactstrap";
import { Button, Card } from "react-bootstrap";
import Link from "next/link";
import Router from 'next/router'
import React, {Component} from 'react';
import {graphql} from "@apollo/client/react/hoc";

import {addUser} from "../../queries/authQueries";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      password:'',
      email:'',
    };
  };

  render() {
    return (

        <div>
          <Card className="signin shadow p-3 mb-5 bg-white rounded-20">
            <Form className="signinform" onSubmit={this.submitUser}>
              <Card className="signincard shadow p-3 mb-5 bg-white rounded">
                <h5>Lets Sign You Up!</h5>
                <FormGroup>
                  <Label>Name</Label>
                  <Input
                      onChange={this.handleUserNameChange.bind(this)}
                      className="input-group"
                      type="text"
                      placeholder="Name"
                  ></Input>
                </FormGroup>
                <FormGroup>
                  <Label>Email</Label>
                  <Input
                      onChange={this.handleEmailChange.bind(this)}
                      className="input-group"
                      type="email"
                      placeholder="Email"
                  ></Input>
                </FormGroup>
                <FormGroup>
                  <Label>Password</Label>
                  <Input
                      onChange={this.handlePasswordChange.bind(this)}
                      className="input-group"
                      type="password"
                      placeholder="Password"
                  ></Input>
                </FormGroup>
                <FormGroup>
                  <Input type="submit" value="Sign Up" className="btn-primary btn-block btn-lg"/>
                  <h6>
                    Already have an account?{" "}
                    <span>
              <Link href="../admin/Login">LogIn</Link>
            </span>{" "}
                  </h6>
                </FormGroup>
              </Card>
            </Form>
          </Card>
        </div>
    );
  }
  submitUser=(event)=>{
    console.log('submitting user')
      event.preventDefault();
      this.props.addUser({
        variables: {
          username: this.state.username,
          email:  this.state.email,
          password: this.state.password
        }
      }).then(r =>Router.push('/admin/login').catch(err=>console.log(err)));
    
  }
  handleUserNameChange(e){
      this.setState({
        'username':e.target.value
      })
  }
  handlePasswordChange(e){
    this.setState({
      'password':e.target.value
    })
  }
  handleEmailChange(e){
    this.setState({'email':e.target.value})

  }
}

export default graphql(addUser,{name:'addUser'})(SignUp);

