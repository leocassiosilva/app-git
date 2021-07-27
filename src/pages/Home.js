import React, { useState, useEffect} from 'react';
import { FlatList, StyleSheet, Text, View, Keyboard  } from 'react-native';
import GlobalStyles from '../Styles/GlobalStyles';
import {Input} from '../components/Input'
import { AntDesign } from '@expo/vector-icons'; 
import api from '../services/api';
import { ItemUser } from '../components/ItemUser';
import Theme from '../Styles/Theme';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Home( { navigation} ) {

    const keyAsyncStorage = "@user:contatos";


    const [nickname, setNickname] = useState(''); 
    const [users, setUsers] = useState([]); 

    //Funtion para navigation 
    function navigationDetails(login){
      navigation.navigate('Details', {user: login}); 
    }



    //função assincrona para buscar um user na api 
    async function handleSearchUser () {
      try{
        //reponse vai receber o user  pesquisado 
        response = await api.get('/users/' + nickname); 

        //atribuinto ao data o response 
        const {data} = response; 

        //objeto com os atributos id, nome e login
        const obj = {
          id: data.id, 
          nome: data.name, 
          login: data.login,
        }
        
        //vetor para armazenar  
        const vetData = [...users, obj]; 
        
        try{
            await AsyncStorage.setItem(keyAsyncStorage, JSON.stringify( vetData ) );
        }catch(error){
            Alert.alert("Erro na gravação de contatos");
        } 


        Keyboard.dismiss();
        setNickname('');  
        loadData(); 
        console.log(obj);

      }catch(error){
      console.error(error);
      }
    }

    //metodo load data para carregar os dados salvos 
    async function loadData(){
      try{
          const retorno = await AsyncStorage.getItem(  keyAsyncStorage  );   
          const teste = JSON.parse( retorno )
          console.log( teste );
          setUsers( teste || [] );
      }catch(error){
          Alert.alert("Erro na leitura dos dados");
      }
    }

    //useEffect para chamar o metodo/function de load
    useEffect( ()=>{
      loadData();      
    } , []);


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



