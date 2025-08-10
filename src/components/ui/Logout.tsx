import { IconsLogout } from '@/assets/icons';
import tw from '@/src/lib/tailwind';
import React from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

type LogoutProps = {
    setSettingView: (visible: boolean) => void;
};

const Logout = ({ setSettingView }: LogoutProps) => {

    const handleLogout = () => {
        setSettingView(false);
        // Add your logout logic here, e.g., clear user session, navigate to login screen, etc.

        Alert.alert("Logout", "You have been logged out successfully.", [
            {
                text: "OK",
                onPress: () => {
                    // Navigate to login or home screen after logout
                    // router.push('/(auth)/login'); // Adjust the path as per your routing structure
                }
            },
            {
                text: "cancel",
                onPress: () => {
                    // Navigate to login or home screen after logout
                    // router.push('/(auth)/login'); // Adjust the path as per your routing structure
                }
            }
        ]
        )
    }


    return (
        <View>
            <TouchableOpacity
                style={tw` flex-row gap-1 px-6 py-4`}
                onPress={handleLogout}
            >
                <SvgXml xml={IconsLogout} />
                <Text style={tw`text-red-500 text-base font-montserrat-600`}>
                    Log Out
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Logout;
