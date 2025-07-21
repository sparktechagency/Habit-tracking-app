import tw from '@/src/lib/tailwind'
import React from 'react'
import { Text, View } from 'react-native'

export default function SayOnScreen() {
    return (
        <View style={tw`bg-red-200 flex-1`}>
            <Text>SayOnScreen</Text>
        </View>
    )
}