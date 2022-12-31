import Onboarding from 'react-native-onboarding-swiper'

import { Image } from 'react-native'
import React from 'react'

const OnboardingScreen = ({ navigation }) => (
  <Onboarding
    onDone={() => navigation.replace('HomeScreen')}
    onSkip={() => navigation.replace('HomeScreen')}
    pages={[
      {
        backgroundColor: 'green',
        image: <Image source={require('../assets/Images/sapiens1.png')} style={{ width: 250, height: 250 }} />,
        title: 'Stay in the green',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis semper erat. Maecenas gravida pretium aliquam. Sed malesuada massa id purus.'
      },
      {
        backgroundColor: 'tomato',
        image: <Image source={require('../assets/Images/sapiens2.png')} style={{ width: 250, height: 250 }} />,
        title: "We'll keep you on track",
        subtitle: 'Praesent fermentum magna eu lacus laoreet, vitae aliquet ipsum feugiat. Fusce id orci elit. In ultricies tempor dui, a rhoncus lectus.'
      },
      {
        backgroundColor: 'purple',
        image: <Image source={require('../assets/Images/sapiens3.png')} style={{ width: 250, height: 250 }} />,
        title: 'Double flower power',
        subtitle: "Beautiful, isn't it?"
      }
    ]}
  />
)

export default OnboardingScreen
