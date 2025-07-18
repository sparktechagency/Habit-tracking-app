import { Stack } from "expo-router";

export default function SplashScreenRootLayout() {

    return (
        <Stack
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="index" options={{}} />
            <Stack.Screen name="splash-screen-one" options={{}} />
            <Stack.Screen name="splash-screen-tow" options={{}} />
            <Stack.Screen name="splash-screen-three" options={{}} />
            {/* Add other screens here */}
        </Stack>
    );
}
