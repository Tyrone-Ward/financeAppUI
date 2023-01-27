import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, SafeAreaView, Dimensions, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import { PieChart } from 'react-native-chart-kit'
import accountData from '../data/accountData'
import transactioData from '../data/transactionData'

const screenWidth = Dimensions.get('window').width

const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  useShadowColorFromDataset: false, // optional
  legend: 'Rainy Days'
}

const data = [
  {
    name: 'Rent',
    population: 33,
    color: '#8F92A9',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15
  },
  {
    name: 'Internet',
    population: 33,
    color: '#F5F5FA',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15
  },
  {
    name: 'Food',
    population: 33,
    color: '#373A4D',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15
  }
]

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
      headerLeftContainerStyle: { marginTop: 25, paddingHorizontal: 24 },
      headerRightContainerStyle: { marginTop: 25, paddingHorizontal: 21 },
      headerLeft: () => (
        <View style={{ borderColor: 'tomato', borderWidth: 0, width: '150%' }}>
          <Text style={{ fontSize: 32 }}>Dashboard</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <FontAwesome5 name="thumbs-up" size={24} color="black" />
            <Text style={{ paddingLeft: 8 }}>Your finances are looking good</Text>
          </View>
        </View>
      ),
      headerStyle: { height: 100 }
      // headerShown: false
    })
  }, [navigation])

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
      <ScrollView horizontal={false}>
        <View style={styles.chartView}>
          <PieChart data={data} width={screenWidth} height={220} chartConfig={chartConfig} accessor="population" backgroundColor="transparent" paddingLeft="15" absolute />
        </View>
        <View style={styles.incomeAndExpenses}>
          <View style={{ height: 104, width: 170, backgroundColor: '#F5F5FA', alignItems: 'center' }}>
            <Text style={{ margin: 12 }}>INCOME</Text>
            <Text style={{ fontSize: 28 }}>$5,000</Text>
          </View>
          <View style={{ height: 104, width: 170, backgroundColor: '#F5F5FA', alignItems: 'center' }}>
            <Text style={{ margin: 12, color: '#373A4D' }}>EXPENSES</Text>
            <Text style={{ fontSize: 28, color: '#373A4D' }}>$1,575</Text>
          </View>
        </View>
        <View style={styles.accountData}>
          <Text>ACCOUNTS</Text>
          <Text>SEE ALL</Text>
        </View>
        <View>
          {accountData.map((d) => (
            <View style={{ borderTopColor: 'lightgray', borderWidth: StyleSheet.hairlineWidth, paddingVertical: 8 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16 }}>
                <Text style={d.title == 'Net Total' ? { fontWeight: 'bold' } : ''}>{d.title}</Text>
                <Text style={d.amount == '$65,224' ? { fontWeight: 'bold' } : ''}>{d.amount}</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16 }}>
                <Text>{d.subtitle}</Text>
                <Text>{d.time}</Text>
              </View>
            </View>
          ))}
        </View>
        <View style={styles.accountData}>
          <Text>TRANSACTIONS</Text>
          <Text>SEE ALL</Text>
        </View>
        <View>
          {transactioData.map((d) => (
            <View style={{ borderTopColor: 'lightgray', borderWidth: StyleSheet.hairlineWidth, paddingVertical: 8 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16 }}>
                <Text style={d.title == 'Net Total' ? { fontWeight: 'bold' } : ''}>{d.title}</Text>
                <Text style={d.amount == '$65,224' ? { fontWeight: 'bold' } : ''}>{d.amount}</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16 }}>
                <Text>{d.subtitle}</Text>
                <Text>{d.time}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <StatusBar style="dark-content" />
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  chartView: {
    flex: 0.25,
    borderWidth: 0,
    borderColor: 'tomato'
  },
  incomeAndExpenses: {
    flex: 0.25,
    paddingTop: 42,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderWidth: 0,
    borderColor: 'tomato'
  },
  accountData: {
    flex: 0.5,
    paddingTop: 48,
    paddingBottom: 16,
    flexDirection: 'row',
    borderWidth: 0,
    borderColor: 'tomato',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    color: '#373A4D'
  }
})
