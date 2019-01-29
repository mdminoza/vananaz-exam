import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Checkbox } from 'react-native-paper';
import PropTypes from 'prop-types';
import styles from './styles';

const FormButton = (props) => {
  const {
    onPress, buttonText, checked, checkedStatus, invalidForm = false,
  } = props;

  const buttonStyle = [styles.button];
  if (invalidForm) {
    buttonStyle.push(styles.buttonDisabled);
  }
  return (
    <View style={styles.container}>
      <View style={styles.chckBxContainer}>
        <Checkbox
          style={styles.checked}
          status={checkedStatus ? 'checked' : 'unchecked'}
          uncheckedColor="#9477cb"
          color="#9477cb"
          onPress={checked}
        />
        <Text style={styles.chckbxText}>Remember me</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={buttonStyle} onPress={onPress} disabled={invalidForm}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

FormButton.propTypes = {
  checkedStatus: PropTypes.bool,
  buttonText: PropTypes.string,
  onPress: PropTypes.func,
  checked: PropTypes.func,
  invalidForm: PropTypes.bool,
};

export default FormButton;
