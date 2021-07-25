import { StatusBar } from 'expo-status-bar';
import React, { useState }from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import GlobalStyles from '../Styles/GlobalStyles';
import {Input} from '../components/Input'
import { AntDesign } from '@expo/vector-icons'; 
import api from '../services/api';
import { ItemUser } from '../components/ItemUser';
import Theme from '../Styles/Theme';

export function Details( { navigation} ) {
    return (
        <View style={styles.containerPerfil}>
          <Text>ola</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    containerPerfil:{
        alignItems:'center'
    },
    userPhoto:{
        width:140, 
        height:140, 
        borderRadius:90,
    }
})
