import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { StyleSheet, Modal, Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import CustomButton from '../components/CustomButton';

export default function AddPlayersScreen({ route, navigation }) {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [names, setNames] = useState([])
  const [inputText, onInputTextChange] = useState("");
  const [dummyValue, setDummyValue] = useState(null)
  const { cardset } = route.params;

  const onNameEnter = (name) => {
    if(name == ''){return}
    onInputTextChange('')

    var newNames = names
    newNames.push(name)
    setNames(newNames)
  }

  const removeName = (index) => {

    var newNames = names
    newNames.splice(index, 1)
    setNames(newNames)
    if (dummyValue == 69){setDummyValue(420)}
    else {setDummyValue(69)} 
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={.7}>
          <Image style={styles.closeButton} source={require('../assets/closeButton.png')} /> 
        </TouchableOpacity>
        <Text style={{fontFamily: 'Gilroy-Heavy', fontSize: 17, lineHeight: 22, color: 'white', textTransform: 'uppercase'}}>{cardset}</Text>
      </View>
      <View style={styles.content}>
        
        <Text style={{fontFamily: 'Gilroy-Heavy', fontSize: 30, lineHeight: 36, color: 'white', marginBottom: 16, width: '80%'}}>Who are u playing with?</Text>
        <Text style={{fontFamily: 'Gilroy-Medium', fontSize: 17, lineHeight: 22, color: 'white', marginBottom: 56, width: '80%'}}>Remove or Add players down below.</Text>
        <Text style={{fontFamily: 'Gilroy-Bold', fontSize: 14, lineHeight: 21, color: 'white', width: '80%'}}>Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={onInputTextChange}
          value={inputText}
          placeholder="Name"
          placeholderTextColor={"#9CA3AF"}
          onSubmitEditing={() => onNameEnter(inputText)}
        />
        <ScrollView bounces={true} showsHorizontalScrollIndicator={false} horizontal={true} style={styles.cardsetSelectionCardScrollView}>
          <View style={styles.names}>
          {names.map((name, index) => {
            return (
                <View style={styles.name}>
                  <Text style={{fontFamily: 'Gilroy-SemiBold', fontSize: 14, lineHeight: 20, color: 'white', marginLeft: 12}}>{name}</Text>
                  <TouchableOpacity onPress={() => removeName(index)} style={{height: 35, width: 35,  alignItems: 'center', justifyContent: 'center',}} activeOpacity={.7}>
                    <Image style={{height: 10.5, width: 10.5}} source={require('../assets/remove.png')}/>
                  </TouchableOpacity>
                </View>
            )
          })}
          </View>
        </ScrollView>


      </View>
      <View style={styles.buttonContainer}>
        <CustomButton  text="Start game" onPress={() => console.warn(names)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,  
    backgroundColor: '#111111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    position: 'absolute',
    top: '30%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButton: {
    height: 46,
    width: 46,
  },
  header: {
    position: 'absolute',
    width: '80%',
    top: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  buttonContainer: {
    position: 'absolute',
    width: '80%',
    top: '85%',
  },
  input:{
    height: 56,
    width: '80%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#374151',
    borderRadius: 4,
    color: 'white',
    marginBottom: 30,
    paddingLeft: 16,
  },
  cardsetSelectionCardScrollView: {
  },
  names: {
    flexDirection: 'row',
    marginHorizontal: 36,
  },
  name: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'white',
    height: 36
  },
});
