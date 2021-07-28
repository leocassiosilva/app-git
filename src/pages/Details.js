import React, { useState, useEffect} from 'react';
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import GlobalStyles from '../Styles/GlobalStyles';
import api from '../services/api';
import Theme from '../Styles/Theme';

import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export function Details({route}) { 

    const [user, setUser] = useState({}); 

    async function carregarUser(nickname){
        try {

            response = await api.get('/users/' + nickname); 

            const {data} = response; 

            const obj = {
                id: data.id, 
                name: data.name, 
                login: data.login, 
                company: data.company,
                bio:data.bio, 
                avatar_url:data.avatar_url, 
                url:data.url,
                followers:data.followers, 
                public_repos:data.public_repos

            }

            setUser(obj);
            console.log(obj);
        }catch{
            console.error(error); 
        }
    }

    useEffect(()=>{
        const { user  } = route.params;
        carregarUser( user );
      
    },[]);


    return (
        <View style={GlobalStyles.container}> 
            <View style={styles.perfil}>
                <Image style={styles.userLogo} source={{ uri:user.avatar_url }}/>
                <Text style={styles.title}>{user.name}</Text> 
                <Text style={styles.textSmall}>{user.url}</Text>
                {user.company && <Text style={styles.textRegular}> Empresa: {user.company}</Text>}

                <Text style={styles.textRegular}>{user.bio}</Text>
            </View>

            <View style={styles.info}>  
                <View>
                    <Text style={styles.titleInfo}>Repositórios</Text> 
                    <View style={styles.infoCount}>
                        <MaterialCommunityIcons name="source-repository" size={50} color="black"/>
                        <Text style={styles.textCount}>{user.public_repos}</Text>

                    </View>
                </View>
                <View>
                    <Text style={styles.titleInfo}>Seguidores</Text> 
                    <View style={styles.infoCount}>
                        <FontAwesome5 name="users" size={40} color="black"/>
                        <Text style={styles.textCount}>{user.followers}</Text>

                    </View>
                </View>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.texBtn}>Excluir</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    perfil:{
        alignItems:'center'
    }, 
    info:{
        marginTop:70, 
        width:'75%',
        flexDirection:'row',
        justifyContent:'space-between',
    }, 
    userLogo:{
        width:140, 
        height:140, 
        borderRadius:90, 
        alignItems:'center'
    }, 
    title:{
        fontSize:30, 
        fontFamily:Theme.fonts.rebotoRegular, 
        color:Theme.colors.gray
    },
    textSmall:{
        fontSize:14,
        fontFamily:Theme.fonts.rebotoRegular,
        color: Theme.colors.gray 
    }, 
    textRegular:{
        fontSize:20,
        marginTop:20,
        fontFamily:Theme.fonts.rebotoRegular,
        color: Theme.colors.gray 
    },
    titleInfo:{
        fontSize:22, 
        fontFamily: Theme.fonts.rebotoRegular
    },
    infoCount:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
      },
    textCount:{
        fontSize: 15,
        fontFamily: Theme.fonts.robotoBold,
        color: Theme.colors.black
    }, 
    footer:{
        width:100, 
        height:200,
        alignItems: 'center',
        justifyContent:'flex-end'
    },
    btn:{
        backgroundColor:'#8257E5', 
        width:200, 
        height:40, 
        borderRadius:15, 
        alignItems:'center', 
        justifyContent:'center'
    }, 
    texBtn:{
        color:'#FFFFFF',
        fontSize:20, 
        fontFamily: Theme.fonts.robotoBold,
    }
})
