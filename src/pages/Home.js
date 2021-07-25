import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GlobalStyles from '../Styles/GlobalStyles';
import {Input} from '../components/Input'

export function Home( { navigation} ) {
    return (
        <View style={GlobalStyles.container}>
          <Text style={styles.title}>GIT.Networking</Text>
          <Input  placeholder="Informe o nickname do usuário"/>

        </View>
    );
}


const styles = StyleSheet.create({
  title:{
    fontSize: 30,
    color:'#8257E5', 
    fontWeight:'bold'
  }
})



