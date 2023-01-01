import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './Screens/HomeScreen'
import OnboardingScreen from './Screens/Onboarding'
import SignUpScreen from './Screens/SignUpScreen'
import LoginScreen from './Screens/LoginScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {true && <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ header: () => null }} />}
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ header: () => null }} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ header: () => null }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})
