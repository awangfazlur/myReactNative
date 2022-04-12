import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, Button, Alert, TextInput, } from 'react-native'
import { formInputStyle, textInputStyle } from "../styles";

export const LandingPage = () => {

  

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


        <Text style={textInputStyle.title} > NAME : {nameText}</Text>

        <TextInput
          style={formInputStyle.input}
          onChangeText={textUpdate}
          value={nameText} />

        <Text style={textInputStyle.title}> AGE : {ageNo}</Text>

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
