import React from 'react'

import {SafeAreaView, View, Text, StyleSheet, TextInput} from 'react-native'

export const App = () => {

  const [text, onChangeText] = React.useState("Useless Text");

  return (

      <View styles={{backgroundColor: 'lightgreen', flex: 1}}>
        <Text styles={styles.title}>Top</Text>
        <Text styles={styles.title}>Middle</Text>
        <Text styles={styles.title}>Bottom</Text>
        <Text styles={styles.title}>Below Bottom</Text>

        <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        />
      </View>

  );

};

const styles = StyleSheet.create({

  mainContainer: {
    flex : 1   
  },

  container: {
    flex : 1,
    justifyContent: 'space-between', 
    alignItems: 'center',   
    backgroundColor: 'yellow'
  },

  title: {
    fontSize: 40, 
  },


});
