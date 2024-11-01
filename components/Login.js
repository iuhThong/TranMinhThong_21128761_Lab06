import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Ionicons';
export default function LoginScreen({ navigation }) {
  const [email, setEmail]= useState('')
  const [pwd, setPwd]= useState('')
  const handleLogin= async()=>{
    try {
      const respone= await fetch('https://6723584e493fac3cf24a8fe9.mockapi.io/Account')
      const users= await respone.json()

      const user= users.find((user)=> user.Email === email && user.Pwd=== pwd)
      if(user){
        console.log("dang nhap thanh cong")
        navigation.navigate('ElectronicsScreen')
      }
      else{
      Alert.alert('Invalid')
      }
    } catch (error) {
      Alert.alert('Error: '+ error)
    }
  }
  return (
    <SafeAreaView style={styles.container}>
        <Icon name="arrow-back-outline" style={styles.icon} size={24} color="black"/>
        <Icon name="logo-react" style={styles.img} size={100} color="black"/>

        <Text style={styles.title}>Hello again!</Text>

        <Text style={styles.subTitle}> Log into your account</Text>

        <View style={styles.inputContaier}>
          <Icon name="mail-outline" style={styles.inputIcon}size={24} />
          <TextInput style={styles.input} 
          placeholder='Enter your email' 
          keyboardType='email-address'
          value={email}
          onChangeText={setEmail}
          />
        </View>
        
        <View style={styles.inputContaier}>
          <Icon name="key" style={styles.inputIcon} size={24} />
          <TextInput style={styles.input} 
          placeholder='Enter your password' 
          secureTextEntry
          value={pwd}
          onChangeText={setPwd}
          />
        </View>

        <TouchableOpacity style={styles.btnContaier} onPress={handleLogin}>
          <Text style={styles.textBtn}>
            Continue
          </Text>
        </TouchableOpacity>

        <Text style={styles.orText}> or</Text>

        <View style={styles.socialIconContainer}>
          <View style={styles.socialIcon}>
            <Icon name="logo-facebook"size={40} style={{color: 'blue'}}/>
          </View>
          
          <View style={styles.socialIcon}>
            <Icon name="logo-google"size={40} style={{color: 'red'}}/>
          </View>
          <View style={styles.socialIcon}>
            <Icon name="logo-apple"size={40} style={{color: 'darkblue'}}/>
          </View>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  icon:{
    position: 'absolute',
    top:50,
    left:20
  },
  img:{
    marginBottom: 15
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold'
  },
  subTitle:{
    fontSize: 14,
    color: '#777'
  },
  inputContaier:{
    width: 100,
    flexDirection: 'row',
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 16,
    padding:10,
    width: '100%'
  },
  input:{
    fontSize: 16,
    marginVertical: 10
  },
  inputIcon:{
    marginVertical:10,
    marginRight: 10,
    color: "grey"
  },
  btnContaier:{
    marginVertical: 15,
    backgroundColor: 'blue',
    borderRadius: 16,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%'
  },
  textBtn:{
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10
  },
  orText:{
    color: '#777',
    fontSize: 18,
    marginBottom: 10
  },
  socialIconContainer:{
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center'
  },
  socialIcon:{
    height: 60,
    width: 60,
    borderRadius: 16,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 7
  }
});
