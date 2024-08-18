import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set } from 'firebase/database';
import { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';


const Stack=createStackNavigator();

export default function App() {
  const [score, setScore]=useState<string>('')
  const [userID, setUserID] = useState<string>('');

  const firebaseConfig = {
    apiKey: "AIzaSyDzXLmZV0p6QHZ48l5z9rS-7yw95XaRTjM",
    authDomain: "moviles2-6f753.firebaseapp.com",
    projectId: "moviles2-6f753",
    storageBucket: "moviles2-6f753.appspot.com",
    messagingSenderId: "781833245872",
    appId: "1:781833245872:web:34e8546759cb377d7dd775"
  };
  initializeApp(firebaseConfig);
  function envioDatos(userID:string,score:string){
    const db=getDatabase();
    const reference=ref(db, 'users/'+userID);
    set(reference,{
      highscore:score,  
    })
  };
  return (

    <View style={styles.container}>
      <Text>Aplicacion de base datos TR</Text>
      <TextInput
        style={styles.input}
        placeholder='Ingresa el valor maximo'
        value={score}
        onChangeText={setScore}
        keyboardType='numeric'

      />
      <Button
        title='Envio de datos'
        onPress={() => envioDatos("Ana", score)}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderColor: 'gray',
    borderWidth:3,
    width: '80%'
  }
});
