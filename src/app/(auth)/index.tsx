import tw from '@/src/lib/tailwind'
import React from 'react'
import { View } from 'react-native'
import LoginScreen from './loging'

export default function index() {
    return (
        <View style={tw`flex-1`}>
            <LoginScreen />
        </View>
    )
}