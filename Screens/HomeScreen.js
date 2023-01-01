import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Ionicons
          name="settings-outline"
          size={24}
          color="black"
          onPress={() => {
            alert('hello')
          }}
        />
      ),
      title: '',
      headerLeft: () => (
        <View>
          <Text style={{ fontSize: 16 }}>Dashboard</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <FontAwesome5 name="thumbs-up" size={24} color="black" />
            <Text>Your finances are looking good</Text>
          </View>
        </View>
      ),
      headerHeight: 100
    })
  }, [navigation])

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <StatusBar style="dark" />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
