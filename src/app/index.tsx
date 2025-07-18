
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
        'montserrat-800': require('@/assets/fonts/Montserrat-Black.ttf'),
        'montserrat-700': require('@/assets/fonts/Montserrat-Bold.ttf'),
        'montserrat-600': require('@/assets/fonts/Montserrat-SemiBold.ttf'),
        'montserrat-500': require('@/assets/fonts/Montserrat-Medium.ttf'),
        'montserrat-400': require('@/assets/fonts/Montserrat-Regular.ttf'),
        'montserrat-300': require('@/assets/fonts/Montserrat-Light.ttf'),
      });

      // Small delay for smooth transition
      setTimeout(() => {
        SplashScreen.hideAsync();
        router?.replace('/(splash-screen)');
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

