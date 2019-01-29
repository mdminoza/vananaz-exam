import React from 'react';
import { View, TextInput, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const FormInput = (props) => {
  const {
    inputLabel,
    placeholderText,
    keyboardType,
    onTextChange,
    inputVal,
    onInputBlur,
    secured = true,
  } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.inputLabel}>{inputLabel}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          keyboardType={keyboardType}
          secureTextEntry={secured}
          style={styles.input}
          placeholder={placeholderText}
          onChangeText={onTextChange}
          value={inputVal}
          onBlur={onInputBlur}
        />
      </View>
    </View>
  );
};

FormInput.propTypes = {
  inputLabel: PropTypes.string,
  placeholderText: PropTypes.string,
  keyboardType: PropTypes.string,
  inputVal: PropTypes.string,
  secured: PropTypes.bool,
  onInputBlur: PropTypes.any,
  onTextChange: PropTypes.func,
};

export default FormInput;
