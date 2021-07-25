import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import Icon from 'react-native-vector-icons/FontAwesome';
import Theme from '../Styles/Theme';


export function ItemUser({name, onPress}){
    return (
        <View style={styles.container}>
            
            <Text style={styles.nickname}>{name}</Text>


            <View style={styles.separador}></View>

            <View style={styles.viewButton}>
                <TouchableOpacity style={styles.btn} onPress={onPress}>
                    <Icon name="eye"  size={25} color={Theme.colors.gray}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    //stilo do componend 
    container:{
        marginTop:15,
        width: '90%',
        height: 50,
        backgroundColor:'#DEE4E4',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 5,
    }, 
    //estilo do nome  
    nickname:{
        paddingLeft: 30,
        fontSize:17,
        fontFamily:Theme.fonts.rebotoRegular,
    },
    //estilo do button 
    btn:{
        padding: 15,
    },
    
}); 