import { Stack } from "expo-router";

export default function AuthRootLayout() {

    return (
        <Stack
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="index" options={{
                animation: 'slide_from_right'
            }} />
            <Stack.Screen name="loging" options={{
                animation: 'slide_from_right'
            }} />
            <Stack.Screen name="register" options={{
                animation: 'slide_from_right'
            }} />
            <Stack.Screen name="verification-opt" options={{
                animation: 'slide_from_right'
            }} />
            <Stack.Screen name="created-new-password" options={{
                animation: 'slide_from_right'
            }} />
            <Stack.Screen name="verify-email" options={{
                animation: 'slide_from_right'
            }} />


        </Stack>
    );
}
