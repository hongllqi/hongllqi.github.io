import React from "react";
import { FlatList, Text, View, SafeAreaView, StatusBar, StyleSheet, TouchableHighlight } from "react-native";
import { ImgComponent } from "./ImgComponent";

export function CatalogSection(props){
    const DATA = props.data;
      
      type ItemProps = {title: any};
      
      const Item = ({title}: ItemProps) => (
        <View style={styles.container}>
          <ImgComponent source={title}/>
        </View>
      );
      
      return (
        <FlatList
          data={DATA}
          renderItem={({item}) => <Item title={item.title} />}
          keyExtractor={item => item.id}
          horizontal={true}
        />
      );
}
      
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: 300,
  }
});