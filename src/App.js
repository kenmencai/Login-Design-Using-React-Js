/* eslint-disable react/style-prop-object */
import React, {Component, Fragment} from 'react';
import {Container,Row,Col,form,} from "react-bootstrap";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

/**import LoginImg from './login.jpg'**/
import 'bootstrap/dist/css/bootstrap.min.css';
class LoginForm extends Component {
  render() {
    return( 
      <Fragment>
        <Container>
          <Row>
            <Col lg = {6} md = {6} sm = {12} className = "p-5 m-auto">
            <div class="page-header"><h2>Login Form</h2></div>
  <form class="form-horizontal">
    <fieldset>

    
      <legend><h3>Have an account? Sign In</h3></legend>

     
      <div class="form-group">
        <label class="col-md-1 control-label" for="username"></label>  
        <div class="col-md-12">
          <input id="username" name="username" type="text" placeholder="Username" class="form-control input-md"/>
        </div>
      </div>

    
      <div class="form-group">
        <label class="col-md-1 control-label" for="password"></label>
        <div class="col-md-12">
          <input id="password" name="password" type="password" placeholder="Password" class="form-control input-md"/>
        </div>
      </div>
      <div class="form-group">
        <label class="col-md-1 control-label" for="login"></label>
      <div class="col-md-5">
        <button id="login" name="login" class="btn btn-block btn-success">Login</button>
      </div> 
      </div> 
    </fieldset>
  </form>
            
        
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default LoginForm;

