import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import HomeScreen from './Screens/HomeScreen'
import OnboardingScreen from './Screens/Onboarding'
import SignUpScreen from './Screens/SignUpScreen'
import LoginScreen from './Screens/LoginScreen'
import AccountsScreen from './Screens/AccountsScreen'
import AlertsScreen from './Screens/AlertsScreen'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({}) => ({
        tabBarLabelStyle: { fontSize: 10 },
        tabBarBadgeStyle: { backgroundColor: '#373A4D' }
      })}
    >
      <Stack.Screen
        name="Dashboard"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            let iconsVariant = focused ? 'home' : 'home-outline'
            let iconsColor = focused ? '#373A4D' : '#8F92A9'
            return <Ionicons name={iconsVariant} size={24} color={iconsColor} />
          },
          // tabBarStyle: { backgroundColor: 'papayawhip' },
          tabBarLabel: 'Dashboard'
        }}
      />
      <Stack.Screen
        name="Accounts"
        component={AccountsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            let iconsVariant = focused ? 'card' : 'card-outline'
            let iconsColor = focused ? '#373A4D' : '#8F92A9'
            return <Ionicons name={iconsVariant} size={24} color={iconsColor} />
          }
        }}
      />
      <Stack.Screen
        name="Alerts"
        component={AlertsScreen}
        options={{
          tabBarBadge: 3,
          tabBarIcon: ({ focused, color, size }) => {
            let iconsVariant = focused ? 'notifications' : 'notifications-outline'
            let iconsColor = focused ? '#373A4D' : '#8F92A9'
            return <Ionicons name={iconsVariant} size={24} color={iconsColor} />
          }
        }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {true && <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ header: () => null }} />}
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ header: () => null }} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ header: () => null }} />
        <Stack.Screen name="Home" component={HomeTabs} options={{ header: () => null }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})
