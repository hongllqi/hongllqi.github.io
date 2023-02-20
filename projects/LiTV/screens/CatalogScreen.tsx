// Tela de Login - será também a tela inicial
import React, { createRef, useState } from 'react';
import 'react-native/tvos-types.d';
import {
  SafeAreaView,
  ScrollView as FlatList,
  StyleSheet,
  Text,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { TVControler } from '../src/TVControler';
import { CatalogSection } from '../src/CatalogSection';
import { CatalogData } from '../src/CatalogData';

export default function CatalogScreen({navigation}) {
  const backgroundStyle = {
    backgroundColor: Colors.darker,
    height: '100%'
  };
  const catalogData = new CatalogData();
  
  return (
    <SafeAreaView style={backgroundStyle}>
      <FlatList>
        <Text style={styles.secionTitle}>Ação</Text>
        <CatalogSection data={ catalogData._listAcao }/>
        <Text style={styles.secionTitle}>Aventura</Text>
        <CatalogSection data={ catalogData._listAventura }/>
        <Text style={styles.secionTitle}>Comédia</Text>
        <CatalogSection data={ catalogData._listComedia }/>
        <Text style={styles.secionTitle}>Drama</Text>
        <CatalogSection data={ catalogData._listDrama }/>
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
  },
  button: {
    width: '80%',
    borderWidth: 1,
    padding: 10,
    margin: 12,
    borderRadius: 15,
    borderColor: '#ccc',
    backgroundColor: '#7fffd4',
    fontSize: 16,
    height: 40,
  },
  secionTitle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    opacity: .6,
  }
});
