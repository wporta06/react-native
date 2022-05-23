import { useState, } from 'react'
import { View, Text, Image, StyleSheet, ScrollView, useWindowDimensions } from 'react-native'

import { Input, Button, } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

import { authentication } from '../firebase/firebase-config'
import { createUserWithEmailAndPassword } from 'firebase/auth'

import Logo from '../assets/images/logo.png'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'

const Register = ({ }) => {
  const navigation = useNavigation();
  const [isSignIn, setIsSignIn] = useState(false)

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { height } = useWindowDimensions();

  const onRegisterPress = () => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then((re) => {
        console.log(re);
        setIsSignIn(true);
        console.warn('hooooooome')
        navigation.navigate("Home")
      })
      .catch((re) => {
        console.log(re)
      })
  }
  const onSignInPress = () => {
    navigation.navigate('Login')
  }

  return (

    <ScrollView showsVerticalScrollIndicator={false}>

      <View style={styles.root}>
        <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />
        <Text style={styles.title}>Create an account</Text>
        {/* <CustomInput placeholder="Username"
          value={username}
          setValue={setUsername} /> */}
        <CustomInput placeholder="Email"
          value={email}
          setValue={setEmail} />
        <CustomInput placeholder="Password"
          value={password}
          setValue={setPassword} secureTextEntry />
        {/* <CustomInput placeholder="Repeat Password"
          value={passwordRepeat}
          setValue={setPasswordRepeat} secureTextEntry /> */}

        <CustomButton text="Register" onPress={onRegisterPress} />
        {/* <Text style={styles.text}>
          By registering,you confirm that you accept our{''}
          <Text onPress={onTermsOfUsePressed} style={styles.link}>Terms of Use </Text>and
          <Text onPress={onPrivacyPolicyPressed} style={styles.link}> Privacy Policy</Text>
        </Text> */}

        {/* <SocialSigninButtons /> */}

        <CustomButton text="Have an account? sign in" onPress={onSignInPress} type="TERTIRY" />
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20
  },
  title: {
    fontSize: 24,
    fontweight: 'bold',
    color: '#051C60',
    margin: 30
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 200,
  }
})

export default Register