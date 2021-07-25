import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export function Input({placeholder}){ 
    
    return(
        <View style={styles.contanerInput}>
            <TextInput 
                style={styles.input}
                placeholder={placeholder}
                />
            
            <TouchableOpacity style={styles.btn}>
                <AntDesign name="right" size={28} color={'#B2B2B2'}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    contanerInput:{
        margin:5,
        flexDirection:'row',
        alignItems:'center'
    },
    
    input:{
        height:56,
        width: 357,
        paddingLeft: 20,
        color: 'gray',
        fontSize: 17,
        backgroundColor: '#FFFFFF',

    }, 
    btn:{
        height:56,
        padding: 15,
        backgroundColor: '#FFFFFF',
        borderLeftWidth:1,
        borderLeftColor: 'gray',
    }
   
  });