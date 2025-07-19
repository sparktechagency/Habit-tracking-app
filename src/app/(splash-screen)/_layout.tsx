import { Stack } from "expo-router";

export default function SplashScreenRootLayout() {

    return (
        <Stack
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="index" options={{}} />
            <Stack.Screen name="splash-screen-one" options={{ animation: 'slide_from_right' }} />
            <Stack.Screen name="splash-screen-tow" options={{ animation: 'slide_from_right' }} />
            <Stack.Screen name="splash-screen-three" options={{ animation: 'slide_from_right' }} />
            {/* Add other screens here */}
        </Stack>
    );
}
