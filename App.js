
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";

import Home from "./screens/Home";
import Details from "./screens/Details";

import Register from "./screens/Register"
import Login from "./screens/Login"

import {authentication} from "./firebase/firebase-config"
const Stack = createStackNavigator();

// !!!!
const theme = {
  ...DefaultTheme,
  color: {
    ...DefaultTheme.colors,
    background: "transparent"
  }
}

const App = () => {
  // fonts need to be loaded first
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });
  // loan font first then run
  if (!loaded) return null

  return (
    <NavigationContainer theme={theme}>
    {/* screenOptions={{ headerShown: false }}  to hide default menu*/}
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login"> 
        {/* route to home */}
        <Stack.Screen name="Login" component={Login} />
         <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />

        {/* route to details */}
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;

// style={{
//   borderWidth: 2,
//   borderColor: "#20232a",
// }}