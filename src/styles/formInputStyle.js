import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, Button, Alert, TextInput, } from 'react-native'

export const formInputStyle = StyleSheet.create({

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
          fontSize: 25,
          color: '#4d4d4d',
          fontWeight: "bold",
          margin: 12,
        },
        input: {
          height: 40,
          margin: 12,
          borderWidth: 2,
          padding: 10,
          borderColor: 'blue',
        }
      });

