import React from 'react';
import { View, StyleSheet } from 'react-native';

const OnboardingDot = (props) => {
    return (
        <View style={[props.index == props.pageIndex ? styles.whiteDot : styles.grayDot]}>
            
        </View>
    )
}

export default OnboardingDot;

const styles = StyleSheet.create({
    whiteDot: {
      width: 10,
      height: 10,
      backgroundColor: 'white',
      borderRadius: 5
    },
    grayDot: {
      width: 10,
      height: 10,
      backgroundColor: '#3F3F3F',
      borderRadius: 5
    },
  });