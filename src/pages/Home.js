import { StatusBar } from 'expo-status-bar';
import React, { useState }from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import GlobalStyles from '../Styles/GlobalStyles';
import {Input} from '../components/Input'
import { AntDesign } from '@expo/vector-icons'; 
import api from '../services/api';
import { ItemUser } from '../components/ItemUser';
import Theme from '../Styles/Theme';

export function Home( { navigation} ) {

    const [nickname, setNickname] = useState(''); 
    const [users, setUsers] = useState(''); 

    //função assincrona para buscar um user na api 
    async function handleSearchUser () {
      try{
        //reponse vai receber o user  pesquisado 
        response = await api.get('/users/' + nickname); 

        //atribuinto ao data o response 
        const {data} = response; 

        const obj = {
          id: data.id, 
          nome: data.name, 
          login: data.login,
        }

        setUsers(oldValue => [...oldValue, obj]); 
        setNickname('');  

        console.log(obj);
  
    }catch(error){
      console.error(error);
    }
  }
    return (
        <View style={GlobalStyles.container}>
          <AntDesign name="github" size={98} color={'#8257E5'} />  
          <Text style={styles.title}>GIT.Networking</Text>
          <Input  placeholder="Informe o nickname do usuário" onChangeText={setNickname}
          onPress={handleSearchUser}/>

          <FlatList data={users}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => (
                <ItemUser name={item.login} onPress={ () => navigationDetails( item.login )}/>
              )}

          />
        </View>
    );
}


const styles = StyleSheet.create({
  title:{
    fontSize: 30,
    color:Theme.colors.primary,
    fontFamily:Theme.fonts.robotoBold, 
  }
})



