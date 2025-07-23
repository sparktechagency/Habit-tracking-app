import tw from '@/src/lib/tailwind';
import { storage } from '@/src/utils/localStorage';
import React from 'react';
import { View } from 'react-native';
import LoginScreen from './loging';

export default function index() {
    const role = storage.getString('role');
    // console.log('Current role:', role);
    return (
        <View style={tw`flex-1`}>
            <LoginScreen />
        </View>
    )
}