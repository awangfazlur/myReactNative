import React, { useState } from "react";

import { SafeAreaView, View, Text, StyleSheet, Button, Alert, TextInput, } from 'react-native'

export const MyApp = () => {

  const createTwoButtonAlert = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

  const createThreeButtonAlert = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed")
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

  const [nameText, setNameText] = useState('')
  const [ageNo, setAgeNo] = useState('')

  const textUpdate = (text) => {
    console.log("Name : ", text)

    setNameText(text)
  }

  const ageUpdate = (age) => {
    console.log("Age : ", age)

    setAgeNo(age)
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>


        <Text style={styles.title} > NAME : {nameText}</Text>

        <TextInput
          style={styles.input}
          onChangeText={textUpdate}
          value={nameText} />

        <Text style={styles.title}> AGE : {ageNo}</Text>

        <TextInput
          style={styles.input}
          onChangeText={ageUpdate}
          value={ageNo}
          keyboardType="numeric"
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  mainContainer: {
    flex: 1,
  },
  container: {
    backgroundColor: 'yellow',
    flex: 1,
    //justifyContent : 'space-between',
    //alignItems : "center",
    //alignSelf : "flex-end",
  },
  container2: {
    backgroundColor: 'green',
    flex: 3,
  },
  title: {
    //fontSize: 30,
    //color: "blue",
    //fontWeight: "bold",
    fontSize: 25,
    color: '#4d4d4d',
    fontWeight: "bold",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderColor: 'blue',
  }
});