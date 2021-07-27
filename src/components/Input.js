import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import Icon from 'react-native-vector-icons/FontAwesome';
import Theme from '../Styles/Theme';

export function Input({placeholder, onPress, onChangeText}){ 
    
    return(
        <View style={styles.containerInput}>
            <TextInput 
                style={styles.input}
                placeholder={placeholder}
                onChangeText={onChangeText}/>
            
            <TouchableOpacity style={styles.btn} onPress={onPress}>
                <AntDesign name="right" size={25} color={'#B2B2B2'}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    containerInput:{
        marginTop:40,
        width: '90%',
        height: 65,
        backgroundColor: '#FFFFFF',
        flexDirection:'row',
        alignItems: 'center',
        borderRadius: 5,
    },
    
    input:{
        flex:1,
        height:'100%',
        paddingLeft: 20,
        color: Theme.colors.gray,
        fontSize: 17,
        backgroundColor: '#FFFFFF',
        fontFamily:Theme.fonts.rebotoRegular,

    }, 
    btn:{
        height:56,
        padding: 15,
        backgroundColor: '#FFFFFF',
        borderLeftWidth:1,
        borderLeftColor: 'gray',
    }
   
  });