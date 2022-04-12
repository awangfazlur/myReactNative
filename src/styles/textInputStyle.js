import { StyleSheet } from 'react-native';

const defaultTitle = {
    fontSize: 25,
    color: '#4d4d4d',
    fontWeight: "bold",
    margin: 12,
}


export const textInputStyle = StyleSheet.create({

    title: defaultTitle,
    title2: {
        ...defaultTitle,
        color: 'green',
    }

});