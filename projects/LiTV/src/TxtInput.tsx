import React, { useState } from "react";
import { TextInput, StyleSheet, View } from "react-native";
import type {Node} from 'react';

export const TxtInput = React.forwardRef((props, ref): Node => {
  const [isActive, setIsActive] = useState(false);
  const handlerFocus = () => {
    setIsActive(true);
  }
  const [isImportant, setImportant] = useState(false);
  const [textInputed, setTextInputed] = useState(null);
  const handlerBlur = () => {
    setIsActive(false);
    if (!textInputed){
      setImportant(true);
    } else{
      setImportant(false);
    }
  }

  return (
    <View style={styles.container}>
      <TextInput style={[isActive ? styles.inputSelected : styles.input, !textInputed && isImportant ? {borderColor: 'red',borderWidth: 3} : {}]} placeholder={ props.placeholder }  onChangeText={ (value) => {props.getText(value); setTextInputed(value);} }  blurOnSubmit={ true } onFocus={ handlerFocus } onBlur={ handlerBlur } ref={ ref }/>
    </View>
  );
})

const styles = StyleSheet.create({
  input: {
    minWidth: '80%',
    maxWidth: '80%',
    borderWidth: 1,
    padding: 10,
    margin: 12,
    borderRadius: 15,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    fontSize: 16,
    height: 40,
  },
  inputSelected: {
    minWidth: '80%',
    maxWidth: '80%',
    borderWidth: 3,
    padding: 10,
    margin: 12,
    borderRadius: 15,
    borderColor: '#7fffd4',
    backgroundColor: '#fff',
    fontSize: 16,
    height: 40,
    alignSelf: 'stretch',
  },
  container: {
    width: '100%',
  }
});