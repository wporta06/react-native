import { useState, } from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import { Input, Button, } from 'react-native-elements'

import Logo from '../assets/images/logo.png'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'

import { authentication } from '../firebase/firebase-config'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native'


const Login = ({ }) => {
  const navigation = useNavigation();
  const [isSignIn, setIsSignIn] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { height } = useWindowDimensions();

  const LoginUser = () => {
    signInWithEmailAndPassword(authentication, email, password)
      .then((re) => {
        console.log(re);
        setIsSignIn(true);
        navigation.navigate("Home")
        // console.warn("hoooome")
      })
      .catch((re) => {
        console.log(re)
      })
  }
  const onSignUpPress = () => {
    // console.warn("onSignUpPress")
    navigation.navigate("Register")
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>

      <View style={styles.root}>
        <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry />

        <CustomButton text="Sign In" onPress={LoginUser} />

        <CustomButton text="Don't have account? Creat one!" onPress={onSignUpPress} type="TERTIRY" />
      </View>
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20
  },
  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 200,
  }
})

export default Login



























// old
// import { useState, } from 'react'
// import { View, Text, Image, StyleSheet } from 'react-native'
// import { Input, Button, } from 'react-native-elements'


// import { authentication } from '../firebase/firebase-config'
// import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
// import { useNavigation } from '@react-navigation/native'

// const Login = ({ }) => {
//   const navigation = useNavigation();
//   const [isSignIn, setIsSignIn] = useState(false)

//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   const LoginUser = () => {
//     signInWithEmailAndPassword(authentication, email, password)
//       .then((re) => {
//         console.log(re);
//         setIsSignIn(true);
//         navigation.navigate("Home")
//       })
//       .catch((re) => {
//         console.log(re)
//       })
//   }

//   const SignOutUser = () => {
//     signOut(authentication)
//       .then((re) => {
//         setIsSignIn(false);
//       })
//       .catch((err) => {
//         console.log(err)
//       })
//   }
//   return (
//     <View style={{ marginTop: 100 }}>
//       <Text >Login</Text>
//       <Input leftIcon={{ type: 'material', name: 'email' }} placeholder="email" value={email} onChangeText={text => setEmail(text)} />
//       <Input placeholder="Password" value={password} secureTextEntry={true} onChangeText={text => setPassword(text)} />


//       {/* <Button color="#841583" title="Log out" onPress={SignOutUser} /> */}

//       <View style={{ margin: 10 }}>
//         <Button color="#841523" title="Login" onPress={LoginUser} />

//       </View>
//       <View style={{ margin: 10 }}>
//         <Button color="#841523" title="Register" />
//       </View>
//     </View>
//   )
// }

// export default Login