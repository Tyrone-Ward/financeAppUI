import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const SignUpScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headingText}>Sign Up</Text>
      </View>
      <View style={styles.inputSection}>
        <View>
          <TextInput style={styles.usernameInput} placeholder={'Email address'} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TextInput style={styles.passwordInput} placeholder={'Password'} secureTextEntry={true} />
            <Ionicons
              name="eye"
              size={24}
              color="black"
              style={{ position: 'absolute', marginLeft: '90%', marginTop: 32 }}
              onPress={() => {
                alert('show password')
              }}
            />
          </View>
        </View>
      </View>
      <TouchableOpacity>
        <View style={styles.signUpButton}>
          <Text style={{ color: 'white', fontSize: 14, fontWeight: '600' }}>SIGN UP</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text>
            Already have an account? <Text style={{ fontWeight: 'bold' }}>Login here</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24
  },
  heading: {
    flex: 0.3,
    justifyContent: 'center',
    borderWidth: 0,
    borderColor: 'tomato'
  },
  headingText: {
    color: '373A4D',
    fontSize: 28
  },
  usernameInput: {
    height: 48,
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 24,
    color: '#373A4D',
    backgroundColor: '#F5F5FA',
    borderWidth: 0
  },
  passwordInput: {
    marginTop: 21,
    height: 48,
    width: '100%',
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 24,
    color: '#373A4D',
    backgroundColor: '#F5F5FA',
    borderWidth: 0
  },
  inputSection: {
    flex: 0.25,
    borderWidth: 0,
    borderColor: 'tomato'
  },
  signUpButton: {
    borderWidth: 1,
    borderColor: 'tomato',
    height: 56,
    backgroundColor: '#373A4D',
    alignItems: 'center',
    justifyContent: 'center'
  },
  footer: {
    flex: 0.45,
    borderWidth: 0,
    borderColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
