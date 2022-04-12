import React, {useState} from "react";

import { SafeAreaView, View, Text, StyleSheet, TextInput } from 'react-native';

export const App = () =>{

  const [NameText, setNameText] = useState('')
  const [NameAge, setNameAge] = useState('')

  const nameUpdate = (text)=>{
    console.log('val', text)
    setNameText(text)
  }

  const ageUpdate = (Age)=>{
    console.log('val', Age)
    setNameAge(Age)
  }

return (
<SafeAreaView style={styles.mainContainer}>
<View style={styles.container}>
<Text style={styles.Title}>My Name is: {NameText}</Text>
<TextInput
        style={styles.input}
        onChangeText={nameUpdate}
        value={NameText}
      />
<Text style={styles.Title}>My Age: {NameAge}</Text>

<TextInput
        style={styles.input}
        onChangeText={ageUpdate}
        value={NameAge}
      />

</View>

</SafeAreaView>
);
};

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
  },

  container:{
    backgroundColor:'yellow',
    flex: 1,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  
  Title:{
    fontSize:30,
    color:'#4d4d4d',
  }
});