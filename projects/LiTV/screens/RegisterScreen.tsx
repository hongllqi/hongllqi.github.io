// Tela de Registro
import React, { createRef, useState } from 'react';
import 'react-native/tvos-types.d';
import {
  SafeAreaView,
  ScrollView as FlatList,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { TVControler } from '../src/TVControler';
import { TxtInput } from '../src/TxtInput';

export default function RegisterScreen({navigation}) {
  const backgroundStyle = {
    backgroundColor: Colors.darker,
    height: '100%'
  };

  const refUsuario = createRef<TextInput>();
  const refSenha = createRef<TextInput>();
  const refEmail = createRef<TextInput>();

  const [textInputedUsuario, setTextInputedUsuario] = useState(null);
  const getTextInputedUsuario = (value) => {
    setTextInputedUsuario(value);
  }

  const [textInputedSenha, setTextInputedSenha] = useState(null);
  const getTextInputedSenha = (value) => {
    setTextInputedSenha(value);
  }

  const [textInputedEmail, setTextInputedEmail] = useState(null);
  const getTextInputedEmail = (value) => {
    setTextInputedEmail(value);
  }

  const setFocus = (refElement) => {
    if (refElement && refElement.current){
      refElement.current.focus();
    }
  }

  const pressLogin = () => {
    if (!textInputedUsuario) {
      console.log("Tem que digitar login mano");
      if (refUsuario && refUsuario.current){
        refUsuario.current.focus();
        return;
      }
    }
    if (!textInputedSenha) {
      console.log("Esqueceu da senha?");
      if (refSenha && refSenha.current){
        refSenha.current.focus();
        return;
      }
    }
    if (!textInputedEmail) {
      console.log("Precisa de email também");
      if (refEmail && refEmail.current){
        refEmail.current.focus();
        return;
      }
    }
    navigation.navigate('Catalogo');
  }
  
  return (
    <SafeAreaView style={backgroundStyle}>
      <FlatList>
        <View style={ styles.mainContainer }>
        <TouchableHighlight>
          <Text style={styles.welcome}>Registre-se</Text>
        </TouchableHighlight>
        <TouchableOpacity hasTVPreferredFocus={ true } onFocus={() => setFocus(refUsuario)}>
          <TxtInput placeholder="Usuário" name="usuarioText" ref={refUsuario} getText={getTextInputedUsuario}/>
        </TouchableOpacity>
        <TouchableOpacity onFocus={() => setFocus(refSenha)} >
          <TxtInput placeholder="Senha" ref={refSenha} getText={getTextInputedSenha}/>
        </TouchableOpacity>
        <TouchableOpacity onFocus={() => setFocus(refEmail)} >
          <TxtInput placeholder="E-mail" ref={refEmail} getText={getTextInputedEmail}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={pressLogin}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Registrar</Text>
          </View>
        </TouchableOpacity>
        </View>
      </FlatList>
      <TVControler />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.white,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '30%',
    borderRadius: 8,
    marginTop: 50,
  },
  button: {
    minWidth: '60%',
    maxWidth: '60%',
    borderWidth: 1,
    padding: 10,
    margin: 12,
    borderRadius: 15,
    borderColor: '#ccc',
    backgroundColor: '#7fffd4',
    fontSize: 16,
    height: 40,
  },
  buttonText: {
    textAlign: 'center',
  },
  welcome: {
    fontSize: 16,
    color: 'red',
  }
});
