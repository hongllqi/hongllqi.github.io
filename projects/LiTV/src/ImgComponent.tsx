import React, { useState } from "react";
import type {Node} from 'react';
import { Image, StyleSheet, TouchableHighlight } from "react-native";

export const ImgComponent = (props): Node => {
    const [isActive, setIsActive] = useState(false);

    return(
      <TouchableHighlight onFocus={() => setIsActive(true)} onBlur={() => setIsActive(false)}>
        <Image style={isActive ? styles.imagesActive : styles.images} source={props.source} />
      </TouchableHighlight>
    )
};
      
const styles = StyleSheet.create({
  images: {
    width: 145,
    height: 200,
    marginLeft: 25,
    borderRadius: 8,
  },
  imagesActive: {
    width: 200,
    height: 300,
    marginLeft: 15,
    borderRadius: 8,
    
  },
});