import AvailableRewardsCard from '@/src/components/ui/AvailableRewardsCard'
import RedeemHistory from '@/src/components/ui/RedeemHistory'
import SearchHabite from '@/src/components/ui/SearchHabite'
import { GROUPTABSReward } from '@/src/constants/tabs'
import tw from '@/src/lib/tailwind'
import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export default function RewardsScreen() {
    const [activeTab, setActiveTab] = useState<string>('all');

    console.log(activeTab);


    return (
        <View style={tw`flex-1 bg-primaryBg`}>

            <View style={tw`flex-row mb-2`}>
                {GROUPTABSReward.map((tab) => {
                    const isActive = activeTab === tab?.key;
                    return (
                        <TouchableOpacity
                            key={tab.key}
                            onPress={() => setActiveTab(tab?.key)}
                            style={[
                                tw`flex-1 py-3 items-center border-b-2`,
                                isActive ? tw`border-blackText` : tw`border-transparent`,
                            ]}
                        >
                            <Text
                                style={[
                                    tw`text-sm font-montserrat-400`,
                                    isActive ? tw`text-blackText font-montserrat-600` : tw`text-blackText`,
                                ]}
                            >
                                {tab.label}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>

            {activeTab === 'all' && <SearchHabite title='Available Rewards' addHeading='Rewards' />}

            {/* View  */}
            <View style={tw`flex-1 `}>
                {activeTab === 'all' ? <AvailableRewardsCard /> : <RedeemHistory />}
            </View>
        </View>
    )
}