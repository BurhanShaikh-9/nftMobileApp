import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import WelcomeScreen from '../screens/welcomeScreen';
import NftMarket from '../screens/nftMarket';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { SafeAreaView, Text, View } from 'react-native';
import { Image } from 'react-native';
import Stats from '../screens/stats';
import Minted from '../screens/minted';
import Explore from '../screens/explore';
import Profile from '../screens/profile';
// import { BlurView } from '@react-native-community/blur';
import { BlurView } from 'expo-blur';

const BottomNavBar = () => {

    const BotNav = createBottomTabNavigator();

    const MyTheme = {
        dark: false,
        colors: {
          primary: 'rgb(255, 45, 85)',
          background: 'rgb(242, 242, 242)',
          card: 'rgb(255, 255, 255)',
          text: 'rgb(28, 28, 30)',
          border: 'rgb(199, 199, 204)',
          notification: 'rgb(255, 69, 58)',
        },
      };

    return (

        <NavigationContainer theme={MyTheme}>
            <BotNav.Navigator initialRouteName="Home"
                screenOptions={({ route }) => ({
                    tabBarShowLabel: false, tabBarStyle: {
                        backgroundColor: 'rgba(255, 0, 0, 0.4)',
                        // position: 'absolute',
                        // bottom:140,
                        // borderTopLeftRadius: 20,
                        // borderTopRightRadius: 20,
                        // backdropFilter: 'blur(10px)',
                    },
                    // tabBarBackground: () => (
                    //     <BlurView
                    //         blurType="light"
                    //         blurAmount={10}
                    //         reducedTransparencyFallbackColor="white"
                    //     />
                    // )
                })}
            >
                <BotNav.Screen name="Home" component={WelcomeScreen} options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image source={require('../../assets/icons/home.png')} />
                        </View>
                    ),
                }} />
                <BotNav.Screen name="Stats" component={Stats} options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image source={require('../../assets/icons/stats.png')} />
                        </View>
                    ),
                }} />

                <BotNav.Screen name="Minted" component={Minted} options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image source={require('../../assets/icons/minted.png')} />
                        </View>
                    ),
                }} />
                <BotNav.Screen name="Explore" component={Explore} options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image source={require('../../assets/icons/explore.png')} />
                        </View>
                    ),
                }} />
                <BotNav.Screen name="Profile" component={Profile} options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image source={require('../../assets/icons/profile.png')} />
                        </View>
                    ),
                }} />
            </BotNav.Navigator>
        </NavigationContainer>
    )
}

export default BottomNavBar