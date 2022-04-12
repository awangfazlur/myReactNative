import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, Button, Alert, TextInput, } from 'react-native'
import { formInputStyle } from "../styles/formInputStyle";

export const LandingPage = () => {

  /*const createTwoButtonAlert = () =>
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
    );*/

  /*const createThreeButtonAlert = () =>
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
    );*/

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
    <SafeAreaView style={formInputStyle.mainContainer}>
      <View style={formInputStyle.container}>


        <Text style={formInputStyle.title} > NAME : {nameText}</Text>

        <TextInput
          style={formInputStyle.input}
          onChangeText={textUpdate}
          value={nameText} />

        <Text style={formInputStyle.title}> AGE : {ageNo}</Text>

        <TextInput
          style={formInputStyle.input}
          onChangeText={ageUpdate}
          value={ageNo}
          keyboardType="numeric"
        />
      </View>
    </SafeAreaView>
  )
}
