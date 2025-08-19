
import * as Font from 'expo-font';
import { router, SplashScreen } from 'expo-router';
import React, { useEffect } from 'react';
import { ActivityIndicator, Image, View } from 'react-native';
import tw from '../lib/tailwind';

// Prevent auto-hiding the splash screen
SplashScreen.preventAutoHideAsync();

export default function Home() {
  useEffect(() => {
    try {
      Font.loadAsync({
        montserratBlack: require('@/assets/fonts/Montserrat-Black.ttf'),
        montserratBold: require('@/assets/fonts/Montserrat-Bold.ttf'),
        montserratSemiBold: require('@/assets/fonts/Montserrat-SemiBold.ttf'),
        montserratMedium: require('@/assets/fonts/Montserrat-Medium.ttf'),
        montserratRegular: require('@/assets/fonts/Montserrat-Regular.ttf'),
        montserratLight: require('@/assets/fonts/Montserrat-Light.ttf'),
      });


      // Small delay for smooth transition
      setTimeout(() => {
        SplashScreen.hideAsync();
        // router?.replace('/(splash-screen)');
        router?.replace('/(tab)');
      }, 800);
    } catch (e) {
      console.warn('Font loading failed:', e);
      SplashScreen.hideAsync();
    }

  }, []);

  return (
    <View style={tw`flex-1 justify-center items-center bg-yellowGreen`}>
      <Image
        source={require('@/assets/images/splash-icon.png')}
        style={tw`w-48 h-48 rounded-2xl`}
        resizeMode="contain"
      />
      <View style={tw`absolute bottom-20`}>
        <ActivityIndicator size="large" color="#3E3E3F" />
      </View>
    </View>
  );
}

