import AvailableRewardsCard from '@/src/components/ui/AvailableRewardsCard'
import SearchHabite from '@/src/components/ui/SearchHabite'
import tw from '@/src/lib/tailwind'
import React from 'react'
import { View } from 'react-native'

export default function RewardsScreen() {
    return (
        <View style={tw`flex-1 bg-primaryBg`}>
            <SearchHabite title='Available Rewards' addHeading='Rewards' />

            {/* View  */}
            <View style={tw`flex-1 `}>
                <AvailableRewardsCard />
            </View>
        </View>
    )
}