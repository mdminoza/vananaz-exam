import React from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import Foect from 'foect';
import PropTypes from 'prop-types';
import styles from './styles';
import { FormButton } from '../FormButton';
import { FormInput } from '../FormInput';

const LoginForm = (props) => {
  const { checked, checkedStatus } = props;

  const savedCredentials = async (args) => {
    const { email, password } = args;
    if (checkedStatus) {
      try {
        await AsyncStorage.setItem('emailCrdntls', email);
        await AsyncStorage.setItem('pssCrdntls', password);
      } catch (error) {
        alert(error);
      }
    }
  };

  const validate = (model) => {
    const { dfEmail, dfPass } = props;
    const { email, password } = model;
    if (email === dfEmail && password === dfPass) {
      alert('Successfully login!');
      savedCredentials({ email, password });
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <View>
      <Foect.Form
        defaultValue={{ email: 'adasdasd' }}
        onValidSubmit={(model) => {
          validate(model);
        }}
      >
        {form => (
          <View>
            <Foect.Control name="email" required pattern={/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/}>
              {control => (
                <View style={styles.container}>
                  <FormInput
                    inputLabel="Email"
                    placeholderText="Input Email Address"
                    onInputBlur={control.markAsTouched}
                    secured={false}
                    onTextChange={text => control.onChange(text)}
                    keyboardType="email-address"
                    inputVal={control.value}
                  />
                  {control.isTouched && control.isInvalid && (
                    <View>
                      {control.errors.pattern ? (
                        <Text style={styles.errorText}>Not correct format for email address.</Text>
                      ) : (
                        <Text style={{ color: 'red' }}>Email Input is required.</Text>
                      )}
                    </View>
                  )}
                </View>
              )}
            </Foect.Control>
            <Foect.Control name="password" required minLength={6} maxLength={12}>
              {control => (
                <View style={styles.container}>
                  <FormInput
                    inputLabel="Password"
                    placeholderText="Input Password"
                    onInputBlur={control.markAsTouched}
                    onTextChange={text => control.onChange(text)}
                    inputVal={control.value}
                  />
                  {control.isTouched && control.isInvalid && (
                    <View>
                      {control.errors.minLength || control.errors.maxLength ? (
                        <Text style={{ color: 'red' }}>Please use at least 6 - 12 characters.</Text>
                      ) : (
                        <Text style={{ color: 'red' }}>Password Input is required.</Text>
                      )}
                    </View>
                  )}
                </View>
              )}
            </Foect.Control>
            <FormButton
              status
              onPress={() => form.submit()}
              checked={checked}
              buttonText="Sign In"
              invalidForm={form.isInvalid}
              checkedStatus={checkedStatus}
            />
          </View>
        )}
      </Foect.Form>
    </View>
  );
};

LoginForm.propTypes = {
  checked: PropTypes.func,
  checkedStatus: PropTypes.bool,
  // svdEmail: PropTypes.string,
  dfEmail: PropTypes.string,
  dfPass: PropTypes.string,
};

export default LoginForm;
