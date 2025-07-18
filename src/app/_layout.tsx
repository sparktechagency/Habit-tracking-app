import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
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
            animation: 'slide_from_right',
            gestureEnabled: false // Disable swipe back on splash screens
          }}
        />
        <Stack.Screen
          name='(auth)'
          options={{
            animation: 'slide_from_right',
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