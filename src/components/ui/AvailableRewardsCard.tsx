import { IconRewards } from '@/assets/icons'
import tw from '@/src/lib/tailwind'
import React, { useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SvgXml } from 'react-native-svg'
import RedeemModal from './RedeemModal'

const AvailableRewardsCard = () => {
  const [viewModal, setViewModal] = useState<boolean>(false);

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
      paddingHorizontal: 12,
      paddingTop: 20
    }} >
      <View>
        {[1, 2, 3, 4].map((item) => (
          <View key={item} style={tw`bg-primaryBg rounded-lg border-l-4 border-[#d9d9d9] p-4 shadow-md mb-4`}>
            <View style={tw`flex-row gap-8`}>

              <View style={tw`bg-[#d9d9d9] items-center p-8 justify-center  rounded-lg`} >
                <SvgXml xml={IconRewards} />
              </View>

              <View style={tw`flex-col gap-3  flex-1`}>
                <View style={tw`flex-col  justify-between gap-1`}>
                  <Text style={tw`text-blackish font-montserrat-700 text-base  `}>Coffee Discount </Text>
                  <Text style={tw`text-blackish font-montserrat-600 text-xs  `}>Get 20% off your next coffee at Brew Haven </Text>
                  <Text style={tw`text-[#ff8c00] font-montserrat-700 text-base  `}>50 points</Text>
                </View>
                <TouchableOpacity onPress={() => setViewModal(!viewModal)} style={tw` px-2.4 rounded-full  py-2 bg-neutral-700 flex-row justify-center items-center gap-2.5`}>
                  <Text style={tw`text-white text-xs font-montserrat-400`}>Redeem</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
        <RedeemModal viewModal={viewModal} setViewModal={setViewModal} />
      </View>
    </ScrollView>
  )
}

export default AvailableRewardsCard