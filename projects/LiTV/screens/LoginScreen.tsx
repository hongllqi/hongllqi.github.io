// Tela de Login - será também a tela inicial
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

export default function LoginScreen({navigation}) {
  const backgroundStyle = {
    flex: 1,
    backgroundColor: Colors.darker,
    height: '100%'
  };

  const refUsuario = createRef<TextInput>();
  const refSenha = createRef<TextInput>();

  const [textInputedUsuario, setTextInputedUsuario] = useState(null);
  const getTextInputedUsuario = (value) => {
    setTextInputedUsuario(value);
  }

  const [textInputedSenha, setTextInputedSenha] = useState(null);
  const getTextInputedSenha = (value) => {
    setTextInputedSenha(value);
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
    console.log("Agora tu pode logar!");
    navigation.navigate('Catalogo');
  }

  const pressRegistrar = () => {
    navigation.navigate('Registro')
  }
  
  return (
    <SafeAreaView style={backgroundStyle}>
      <FlatList>
        <View style={ styles.mainContainer }>
        <TouchableHighlight>
          <Text style={styles.welcome}>Welcome!</Text>
        </TouchableHighlight>
        <TouchableOpacity hasTVPreferredFocus={ true } onFocus={() => setFocus(refUsuario)}>
          <TxtInput placeholder="Usuário" name="usuarioText" ref={refUsuario} getText={getTextInputedUsuario}/>
        </TouchableOpacity>
        <TouchableOpacity onFocus={() => setFocus(refSenha)} >
          <TxtInput placeholder="Senha" ref={refSenha} getText={getTextInputedSenha}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={pressLogin}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={pressRegistrar}>
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
    felx: 1,
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
    width: '80%',
  }
});
