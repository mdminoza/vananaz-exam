import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { LoginForm } from '../components/LoginForm';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      dfEmail: 'sample@gmail.com',
      dfPass: 'password123',
    };
  }

  render() {
    const {
      checked, svdEmail, dfEmail, dfPass,
    } = this.state;
    return (
      <Container>
        <StatusBar translucent={false} />
        <Logo />
        <KeyboardAvoidingView behavior="padding" style={{ width: '90%' }}>
          <LoginForm
            checked={() => this.setState({ checked: !checked })}
            checkedStatus={checked}
            dfEmail={dfEmail}
            dfPass={dfPass}
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default Home;
