import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle={"dark-content"} translucent />
      <Stack
        screenOptions={{
          headerShown: false, // Hides header for all screens
          animation: 'fade', // Smooth transition animation
        }}
      >
        {/* Initial screens */}
        <Stack.Screen name="index" />
        <Stack.Screen name="+not-found" />

        {/* Grouped screens */}
        <Stack.Screen
          name="(splash-screen)"
          options={{
            gestureEnabled: false // Disable swipe back on splash screens
          }}
        />
        <Stack.Screen
          name='(auth)'
          options={{
            gestureEnabled: false // Disable swipe back on splash screens
          }}
        />
        <Stack.Screen
          name='(tab)'
          options={{
            gestureEnabled: false // Disable swipe back on splash screens
          }}
        />
        <Stack.Screen
          name='view-details'
          options={{
            gestureEnabled: false // Disable swipe back on splash screens
          }}
        />


        {/* Add more groups as needed */}
        {/* <Stack.Screen name="(app)" /> */}
        {/* <Stack.Screen name="(onboarding)" /> */}
      </Stack>
    </>
  );
}