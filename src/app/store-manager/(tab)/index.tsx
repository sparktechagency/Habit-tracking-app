import MiniTopBar from '@/src/components/ui/MiniTopBar'
import RewardsView from '@/src/components/ui/RewardsView'
import tw from '@/src/lib/tailwind'
import React, { useState } from 'react'
import { View } from 'react-native'

export default function RewardsScreeen() {
    const [visible, setVisible] = useState<boolean>(false)

    return (
        <View style={tw`flex-1 bg-primaryBg`}>
            <MiniTopBar Heading='Rewards' pageName='Rewards' visible={visible} setVisible={setVisible} />

            <RewardsView />
        </View>
    )
}